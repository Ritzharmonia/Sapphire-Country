import React, { useState, useEffect, useRef } from 'react';
import { Edit2, Check, X } from 'lucide-react';
import { useKingdom } from '../../context/KingdomContext';

interface EditableTextProps {
  value: string;
  onSave: (newValue: string) => void;
  className?: string;
  inputClassName?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  multiline?: boolean;
  placeholder?: string;
  label?: string;
  suffix?: string;
}

export const EditableText: React.FC<EditableTextProps> = ({
  value,
  onSave,
  className = '',
  inputClassName = '',
  as: Component = 'span',
  multiline = false,
  placeholder = 'Утга оруулах...',
  label,
  suffix = ''
}) => {
  const { isEditMode } = useKingdom();
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value || '');
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setCurrentValue(value || '');
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    onSave(currentValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setCurrentValue(value || '');
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  // If in active edit mode for this specific field
  if (isEditing && isEditMode) {
    return (
      <div className="inline-flex flex-col gap-1.5 z-20 relative my-1 w-full max-w-full">
        {label && <span className="text-xs uppercase tracking-wider text-[#C9A85C] font-mono">{label}</span>}
        <div className="flex items-center gap-1.5 w-full">
          {multiline ? (
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              value={currentValue}
              onChange={(e) => setCurrentValue(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={3}
              placeholder={placeholder}
              className={`w-full bg-[#0C1421]/95 text-[#FFF0CA] border border-[#C9A85C] rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#C9A85C] shadow-lg ${inputClassName}`}
            />
          ) : (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type="text"
              value={currentValue}
              onChange={(e) => setCurrentValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className={`w-full bg-[#0C1421]/95 text-[#FFF0CA] border border-[#C9A85C] rounded px-2.5 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[#C9A85C] shadow-lg ${inputClassName}`}
            />
          )}
          <button
            type="button"
            onClick={handleSave}
            title="Хадгалах (Save)"
            className="p-1.5 bg-[#1F4E79] hover:bg-[#C9A85C] text-[#FFF0CA] hover:text-[#0C1421] rounded border border-[#C9A85C]/60 transition-colors shadow"
          >
            <Check className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleCancel}
            title="Болих (Cancel)"
            className="p-1.5 bg-[#142B4A]/80 hover:bg-red-950 text-[#D9DEE5] rounded border border-red-500/40 transition-colors shadow"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Normal / visitor view (plus pen trigger if in admin edit mode)
  return (
    <Component className={`group/editable relative inline-flex items-center flex-wrap gap-1 ${className}`}>
      <span>{value || placeholder}</span>
      {suffix && <span className="opacity-80">{suffix}</span>}
      {isEditMode && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsEditing(true);
          }}
          title="Засварлах (Edit ✎)"
          aria-label="Засварлах"
          className="edit-trigger inline-flex items-center justify-center w-5 h-5 rounded bg-[#142B4A]/90 hover:bg-[#C9A85C] text-[#C9A85C] hover:text-[#0C1421] border border-[#C9A85C]/40 text-[10px] transition-all transform hover:scale-110 shadow-sm ml-1.5"
        >
          <Edit2 className="w-2.5 h-2.5" />
        </button>
      )}
    </Component>
  );
};
