const downloadPdf = (url, name) => {
  if (!url) {
    console.error("No URL provided for PDF download.");
    return;
  }

  const link = document.createElement('a');
  link.href = url; // Use the URL prop
  link.download = name ?? 'sample.pdf'; // Suggest a default name for downloading
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


export default downloadPdf;
