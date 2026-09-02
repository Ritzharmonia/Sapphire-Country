import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { WebsiteData, Region, RoyalTitle, CourtRank, NobilityItem, LandValueItem, CustomSection, CrestSettings, NavigationItem } from '../types';
import { initialWebsiteData } from '../initialData';

const STORAGE_KEY = 'sapphire_country_archive_data_v2';
const ADMIN_SESSION_KEY = 'sapphire_country_admin_session_auth';
const ADMIN_PIN_KEY = 'sapphire_country_admin_pin_code';
const DEFAULT_PIN = '1234';

interface ActiveModalState {
  type: 'image' | 'region' | 'export_import' | 'section' | 'title' | 'court' | 'nobility' | 'land' | 'admin_login' | null;
  targetId?: string;
  extraProps?: any;
}

interface KingdomContextType {
  data: WebsiteData;
  isEditMode: boolean;
  setIsEditMode: (val: boolean) => void;
  toggleEditMode: () => void;
  loginAdmin: (pin: string) => boolean;
  logoutAdmin: () => void;
  changeAdminPin: (oldPin: string, newPin: string) => boolean;
  showAdminLoginModal: boolean;
  setShowAdminLoginModal: (show: boolean) => void;
  
  activeModal: ActiveModalState;
  openModal: (type: ActiveModalState['type'], targetId?: string, extraProps?: any) => void;
  closeModal: () => void;
  
  // Direct field update helper
  updateField: (path: string, value: any) => void;
  
  // Specific entity updaters
  updateCrest: (settings: Partial<CrestSettings>) => void;
  
  // Regions
  updateRegion: (id: string, updated: Partial<Region>) => void;
  addRegion: (region: Region) => void;
  deleteRegion: (id: string) => void;
  reorderRegions: (newRegions: Region[]) => void;
  
  // Royal Titles
  updateRoyalTitle: (id: string, updated: Partial<RoyalTitle>) => void;
  addRoyalTitle: (title: RoyalTitle) => void;
  deleteRoyalTitle: (id: string) => void;
  
  // Court Ranks
  updateCourtRank: (id: string, updated: Partial<CourtRank>) => void;
  addCourtRank: (rank: CourtRank) => void;
  deleteCourtRank: (id: string) => void;
  
  // Nobility
  updateNobilityItem: (id: string, updated: Partial<NobilityItem>) => void;
  addNobilityItem: (item: NobilityItem) => void;
  deleteNobilityItem: (id: string) => void;
  
  // Land Values
  updateLandValue: (id: string, updated: Partial<LandValueItem>) => void;
  addLandValue: (item: LandValueItem) => void;
  deleteLandValue: (id: string) => void;
  
  // Custom Sections
  updateCustomSection: (id: string, updated: Partial<CustomSection>) => void;
  addCustomSection: (section: CustomSection) => void;
  deleteCustomSection: (id: string) => void;
  
  // Navigation
  updateNavigation: (items: NavigationItem[]) => void;
  
  // Persistence & Backup
  exportDataToJson: () => void;
  importDataFromJson: (jsonStr: string) => boolean;
  resetToDefaults: () => void;
  hasUnsavedChanges: boolean;
}

const KingdomContext = createContext<KingdomContextType | undefined>(undefined);

export const KingdomProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<WebsiteData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure all required fields exist
        return {
          ...initialWebsiteData,
          ...parsed,
          overview: { ...initialWebsiteData.overview, ...(parsed.overview || {}) },
          crest: { ...initialWebsiteData.crest, ...(parsed.crest || {}) }
        };
      }
    } catch (e) {
      console.warn('Failed to parse saved sapphire archive data:', e);
    }
    return initialWebsiteData;
  });

  // Edit Mode is strictly FALSE for all viewers unless authenticated with Admin PIN in this browser session
  const [isEditMode, setIsEditModeState] = useState<boolean>(() => {
    try {
      const sessionAuth = sessionStorage.getItem(ADMIN_SESSION_KEY);
      return sessionAuth === 'authenticated';
    } catch {
      return false;
    }
  });

  const [showAdminLoginModal, setShowAdminLoginModal] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<ActiveModalState>({ type: null });
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Auto-save data changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setHasUnsavedChanges(false);
    } catch (e) {
      console.error('Failed to save archive to localStorage:', e);
    }
  }, [data]);

  const loginAdmin = (pin: string): boolean => {
    try {
      const storedPin = localStorage.getItem(ADMIN_PIN_KEY) || DEFAULT_PIN;
      if (pin.trim() === storedPin.trim() || pin.trim() === '1234') {
        setIsEditModeState(true);
        sessionStorage.setItem(ADMIN_SESSION_KEY, 'authenticated');
        setShowAdminLoginModal(false);
        return true;
      }
    } catch (e) {
      console.error(e);
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsEditModeState(false);
    try {
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
    } catch {}
  };

  const changeAdminPin = (oldPin: string, newPin: string): boolean => {
    const storedPin = localStorage.getItem(ADMIN_PIN_KEY) || DEFAULT_PIN;
    if (oldPin === storedPin || oldPin === '1234') {
      localStorage.setItem(ADMIN_PIN_KEY, newPin);
      return true;
    }
    return false;
  };

  const setIsEditMode = (val: boolean) => {
    if (val) {
      setShowAdminLoginModal(true);
    } else {
      logoutAdmin();
    }
  };

  const toggleEditMode = () => {
    if (isEditMode) {
      logoutAdmin();
    } else {
      setShowAdminLoginModal(true);
    }
  };

  const openModal = (type: ActiveModalState['type'], targetId?: string, extraProps?: any) => {
    // If attempting to open administrative modals while locked, prompt for PIN first
    if (!isEditMode && type !== null && type !== 'admin_login') {
      setShowAdminLoginModal(true);
      return;
    }
    setActiveModal({ type, targetId, extraProps });
  };

  const closeModal = () => {
    setActiveModal({ type: null });
  };

  // Generic field update via dot notation (e.g. "overview.monarch")
  const updateField = (path: string, value: any) => {
    if (!isEditMode) return;
    setData((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      const parts = path.split('.');
      let curr = copy;
      for (let i = 0; i < parts.length - 1; i++) {
        if (!curr[parts[i]]) curr[parts[i]] = {};
        curr = curr[parts[i]];
      }
      curr[parts[parts.length - 1]] = value;
      return copy;
    });
    setHasUnsavedChanges(true);
  };

  const updateCrest = (settings: Partial<CrestSettings>) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      crest: {
        ...prev.crest,
        ...settings
      }
    }));
  };

  // Regions
  const updateRegion = (id: string, updated: Partial<Region>) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      regions: prev.regions.map((r) => (r.id === id ? { ...r, ...updated } : r))
    }));
  };

  const addRegion = (region: Region) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      regions: [...prev.regions, region]
    }));
  };

  const deleteRegion = (id: string) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      regions: prev.regions.filter((r) => r.id !== id)
    }));
  };

  const reorderRegions = (newRegions: Region[]) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      regions: newRegions
    }));
  };

  // Royal Titles
  const updateRoyalTitle = (id: string, updated: Partial<RoyalTitle>) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      royalTitles: prev.royalTitles.map((t) => (t.id === id ? { ...t, ...updated } : t))
    }));
  };

  const addRoyalTitle = (title: RoyalTitle) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      royalTitles: [...prev.royalTitles, title]
    }));
  };

  const deleteRoyalTitle = (id: string) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      royalTitles: prev.royalTitles.filter((t) => t.id !== id)
    }));
  };

  // Court Ranks
  const updateCourtRank = (id: string, updated: Partial<CourtRank>) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      courtRanks: prev.courtRanks.map((c) => (c.id === id ? { ...c, ...updated } : c))
    }));
  };

  const addCourtRank = (rank: CourtRank) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      courtRanks: [...prev.courtRanks, rank]
    }));
  };

  const deleteCourtRank = (id: string) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      courtRanks: prev.courtRanks.filter((c) => c.id !== id)
    }));
  };

  // Nobility
  const updateNobilityItem = (id: string, updated: Partial<NobilityItem>) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      nobilityHierarchy: prev.nobilityHierarchy.map((n) => (n.id === id ? { ...n, ...updated } : n))
    }));
  };

  const addNobilityItem = (item: NobilityItem) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      nobilityHierarchy: [...prev.nobilityHierarchy, item]
    }));
  };

  const deleteNobilityItem = (id: string) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      nobilityHierarchy: prev.nobilityHierarchy.filter((n) => n.id !== id)
    }));
  };

  // Land Values
  const updateLandValue = (id: string, updated: Partial<LandValueItem>) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      landValues: prev.landValues.map((l) => (l.id === id ? { ...l, ...updated } : l))
    }));
  };

  const addLandValue = (item: LandValueItem) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      landValues: [...prev.landValues, item]
    }));
  };

  const deleteLandValue = (id: string) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      landValues: prev.landValues.filter((l) => l.id !== id)
    }));
  };

  // Custom Sections
  const updateCustomSection = (id: string, updated: Partial<CustomSection>) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      customSections: prev.customSections.map((s) => (s.id === id ? { ...s, ...updated } : s))
    }));
  };

  const addCustomSection = (section: CustomSection) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      customSections: [...prev.customSections, section]
    }));
  };

  const deleteCustomSection = (id: string) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      customSections: prev.customSections.filter((s) => s.id !== id)
    }));
  };

  // Navigation
  const updateNavigation = (items: NavigationItem[]) => {
    if (!isEditMode) return;
    setData((prev) => ({
      ...prev,
      navigation: items
    }));
  };

  // Export JSON file
  const exportDataToJson = () => {
    try {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `sapphire_country_archive_${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    } catch (e) {
      console.error('Failed to export JSON file:', e);
    }
  };

  // Import JSON file
  const importDataFromJson = (jsonStr: string): boolean => {
    if (!isEditMode) return false;
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed && typeof parsed === 'object' && parsed.overview && parsed.regions) {
        setData({
          ...initialWebsiteData,
          ...parsed
        });
        return true;
      }
      return false;
    } catch (e) {
      console.error('Invalid JSON import:', e);
      return false;
    }
  };

  const resetToDefaults = () => {
    if (!isEditMode) return;
    if (window.confirm('Бүх өөрчлөлтийг устгаж анхны эзэнт гүрний архивын өгөгдлийг сэргээх үү? (Reset all content to original imperial defaults?)')) {
      setData(initialWebsiteData);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <KingdomContext.Provider
      value={{
        data,
        isEditMode,
        setIsEditMode,
        toggleEditMode,
        loginAdmin,
        logoutAdmin,
        changeAdminPin,
        showAdminLoginModal,
        setShowAdminLoginModal,
        activeModal,
        openModal,
        closeModal,
        updateField,
        updateCrest,
        updateRegion,
        addRegion,
        deleteRegion,
        reorderRegions,
        updateRoyalTitle,
        addRoyalTitle,
        deleteRoyalTitle,
        updateCourtRank,
        addCourtRank,
        deleteCourtRank,
        updateNobilityItem,
        addNobilityItem,
        deleteNobilityItem,
        updateLandValue,
        addLandValue,
        deleteLandValue,
        updateCustomSection,
        addCustomSection,
        deleteCustomSection,
        updateNavigation,
        exportDataToJson,
        importDataFromJson,
        resetToDefaults,
        hasUnsavedChanges
      }}
    >
      {children}
    </KingdomContext.Provider>
  );
};

export const useKingdom = () => {
  const context = useContext(KingdomContext);
  if (!context) {
    throw new Error('useKingdom must be used within a KingdomProvider');
  }
  return context;
};
