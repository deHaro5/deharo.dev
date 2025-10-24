'use client';

export default function DownloadPDFButton() {
  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <button 
      onClick={handlePrintPDF}
      className="btn btn-primary no-print"
      type="button"
    >
      Descargar PDF
    </button>
  );
}

