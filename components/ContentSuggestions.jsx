import React, { useState } from "react";
import { usePortfolioBuilder } from "../hooks/usePortfolioBuilder";

export default function ContentSuggestions() {
  const { suggestContent, loading } = usePortfolioBuilder();
  const [suggestions, setSuggestions] = useState([]);

  const handleSuggest = async () => {
    const result = await suggestContent();
    setSuggestions(result);
  };

  return (
    <div className="p-4 border rounded bg-blue-50" role="region" aria-labelledby="content-suggestions-title">
      <h2 id="content-suggestions-title" className="font-semibold mb-2">AI Content Improvement Suggestions</h2>
      <button
        onClick={handleSuggest}
        disabled={loading}
        className="bg-blue-700 text-white px-3 py-1 rounded"
      >
        {loading ? "Generating..." : "Generate Suggestions"}
      </button>
      {suggestions.length > 0 && (
        <ul className="mt-3 list-disc list-inside text-sm max-h-48 overflow-auto">
          {suggestions.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
