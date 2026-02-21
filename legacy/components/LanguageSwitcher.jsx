import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <Button 
        variant="ghost" 
        size="icon" 
        className="rounded-full w-9 h-9 text-slate-600 hover:text-blue-600 hover:bg-blue-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="h-4 w-4" />
        <span className="sr-only">Switch Language</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 border border-slate-200">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full text-left px-4 py-2 text-sm flex items-center hover:bg-slate-100 transition-colors ${
                  i18n.language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-slate-700'
                }`}
                role="menuitem"
              >
                <span className="mr-2 text-lg">{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;