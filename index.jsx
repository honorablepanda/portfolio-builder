import React from "react";
import ProjectUploader from "./components/ProjectUploader";
import PortfolioPreview from "./components/PortfolioPreview";
import ContentSuggestions from "./components/ContentSuggestions";

export default function PortfolioBuilder() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">🎨 Portfolio Builder</h1>
      <ProjectUploader />
      <ContentSuggestions />
      <PortfolioPreview />
    </div>
  );
}
