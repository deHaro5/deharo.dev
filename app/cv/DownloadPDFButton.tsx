'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';

export default function DownloadPDFButton() {
  const { t } = useLanguage();
  
  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <button 
      onClick={handlePrintPDF}
      className="btn btn-primary no-print"
      type="button"
    >
      {t('downloadPDF')}
    </button>
  );
}

