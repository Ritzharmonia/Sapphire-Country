import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Upload, 
  Copy, 
  Check, 
  RotateCcw, 
  FileJson, 
  AlertTriangle 
} from 'lucide-react';
import { useKingdom } from '../../context/KingdomContext';
import { OrnateFrame } from '../ui/OrnateFrame';

export const ExportImportModal: React.FC = () => {
  const { activeModal, closeModal, exportDataToJson, importDataFromJson, resetToDefaults, data } = useKingdom();
  const [jsonText, setJsonText] = useState('');
  const [copied, setCopied] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  if (activeModal.type !== 'export_import') return null;

  const currentJson = JSON.stringify(data, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([currentJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sapphire-country-archive-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setJsonText(event.target.result as string);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleApplyImport = () => {
    if (!jsonText.trim()) {
      setImportStatus('JSON өгөгдөл оруулна уу.');
      return;
    }
    const success = importDataFromJson(jsonText);
    if (success) {
      setImportStatus('Амжилттай шинэчлэгдлээ!');
      setTimeout(() => {
        closeModal();
      }, 1000);
    } else {
      setImportStatus('Алдаа: JSON формат буруу байна.');
    }
  };

  const handleReset = () => {
    resetToDefaults();
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-3xl">
        <OrnateFrame variant="gold" glow padding="p-6 sm:p-8" className="max-h-[90vh] overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#C9A85C]/30 pb-4 mb-6">
            <div className="flex items-center gap-2.5">
              <FileJson className="w-5 h-5 text-[#C9A85C]" />
              <h3 className="font-royal text-lg font-bold text-[#FFF0CA]">
                АРХИВ ТАТАХ / ХУУЛАХ (EXPORT / IMPORT JSON)
              </h3>
            </div>
            <button
              type="button"
              onClick={closeModal}
              className="p-1 text-[#D9DEE5]/60 hover:text-[#FFF0CA] rounded-full hover:bg-[#142B4A]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            
            {/* Export Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-royal text-sm font-bold text-[#FFF0CA]">
                  1. Архивын Файл Татах (Export)
                </span>
                <span className="text-[10px] text-[#C9A85C] font-mono">BACKUP</span>
              </div>
              <p className="text-[#D9DEE5]/70 font-serif leading-relaxed">
                Саффир улсын бүх мэдээлэл, хааны хэргэм, бүс нутаг, газрын үнэлгээг бүрэн JSON файл хэлбэрээр хадгалж авна уу.
              </p>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 px-3 py-2 bg-[#1F4E79] hover:bg-[#2A75D3] text-[#FFF0CA] rounded font-royal border border-[#C9A85C] shadow"
                >
                  <Download className="w-3.5 h-3.5 text-[#C9A85C]" />
                  <span>.JSON Татах (Download)</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-2 bg-[#142B4A] hover:bg-[#1F4E79] text-[#FFF0CA] rounded font-royal border border-[#C9A85C]/40"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 text-[#C9A85C]" />}
                  <span>{copied ? 'Хуулагдлаа!' : 'JSON Хуулах (Copy)'}</span>
                </button>
              </div>

              <div className="pt-4 border-t border-[#C9A85C]/20">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-red-950/50 hover:bg-red-900 text-red-300 border border-red-500/40 rounded font-serif text-[11px]"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Анхны өгөгдөл рүү буцаах (Factory Reset)</span>
                </button>
              </div>
            </div>

            {/* Import Column */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-royal text-sm font-bold text-[#FFF0CA]">
                  2. Архив Сэргээх (Import / Restore)
                </span>
                <span className="text-[10px] text-[#C9A85C] font-mono">RESTORE</span>
              </div>

              <div>
                <label className="block text-[11px] font-serif text-[#C9A85C] mb-1">
                  JSON текст наах эсвэл файл оруулах:
                </label>
                <textarea
                  value={jsonText}
                  onChange={(e) => setJsonText(e.target.value)}
                  placeholder='{"overview": {...}, "royalTitles": [...]}'
                  rows={6}
                  className="w-full bg-[#0C1421] text-[#FFF0CA] border border-[#C9A85C]/40 rounded p-2 text-[10px] font-mono focus:outline-none focus:ring-1 focus:ring-[#C9A85C]"
                />
              </div>

              <div className="flex items-center justify-between gap-2">
                <label className="cursor-pointer px-3 py-1.5 bg-[#142B4A] hover:bg-[#1F4E79] text-[#D9DEE5] rounded border border-[#C9A85C]/40 text-xs font-serif flex items-center gap-1.5">
                  <Upload className="w-3.5 h-3.5 text-[#C9A85C]" />
                  <span>Файл Сонгох</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>

                <button
                  type="button"
                  onClick={handleApplyImport}
                  className="px-4 py-1.5 bg-[#C9A85C] hover:bg-[#E8C87A] text-[#0C1421] font-bold rounded font-royal text-xs flex items-center gap-1.5 shadow"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Шинэчлэх (Apply)</span>
                </button>
              </div>

              {importStatus && (
                <div className={`p-2 rounded text-[11px] font-mono ${importStatus.includes('Алдаа') ? 'bg-red-950 text-red-300' : 'bg-green-950 text-green-300'}`}>
                  {importStatus}
                </div>
              )}
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-[#C9A85C]/30 flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-[#142B4A] text-[#D9DEE5] rounded text-xs font-royal border border-[#C9A85C]/30"
            >
              Хаах (Close)
            </button>
          </div>

        </OrnateFrame>
      </div>
    </div>
  );
};
