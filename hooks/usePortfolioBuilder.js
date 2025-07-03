import { useState, useCallback } from "react";

/**
 * Dummy hook for AI content suggestions and state management.
 */
export const usePortfolioBuilder = () => {
  const [loading, setLoading] = useState(false);

  /**
   * Simulate AI content improvement suggestions.
   */
  const suggestContent = useCallback(async () => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve([
          "Add measurable results to your project descriptions.",
          "Use action verbs to describe your contributions.",
          "Include links to live projects or demos.",
          "Highlight technologies used in each project.",
        ]);
      }, 1500);
    });
  }, []);

  return { loading, suggestContent };
};
