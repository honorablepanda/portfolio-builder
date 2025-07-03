import React, { useState, useEffect } from "react";

export default function PortfolioPreview() {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : [];
  });

  // Update on localStorage change
  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem("projects");
      if (saved) setProjects(JSON.parse(saved));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  if (projects.length === 0) {
    return (
      <div className="p-4 border rounded bg-gray-100 text-center text-gray-500">
        No projects to preview.
      </div>
    );
  }

  return (
    <div className="p-4 border rounded bg-gray-50" role="region" aria-labelledby="portfolio-preview-title">
      <h2 id="portfolio-preview-title" className="font-semibold mb-2">Portfolio Preview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.id} className="border rounded p-3 bg-white shadow-sm">
            <h3 className="font-bold">{p.title}</h3>
            <p className="text-sm">{p.description}</p>
            {p.url && (
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
