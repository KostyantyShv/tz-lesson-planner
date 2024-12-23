export const handleDownloadPdfAPI = async (markdownText: string): Promise<void> => {
    try {
      const response = await fetch("https://md-to-pdf.fly.dev", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          markdown: markdownText,
          engine: "pdflatex",
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to generate PDF");
      }
  
      const pdfBlob = await response.blob();
      const url = URL.createObjectURL(pdfBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "LessonPlan.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Failed to download PDF.");
    }
  };
  