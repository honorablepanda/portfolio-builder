import React, { useState, useEffect } from "react";

export default function ProjectUploader() {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : [];
  });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = () => {
    if (!title.trim() || !description.trim()) return;
    const newProject = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      url: url.trim(),
    };
    setProjects((prev) => [...prev, newProject]);
    setTitle("");
    setDescription("");
    setUrl("");
  };

  const removeProject = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="p-4 border rounded bg-gray-50" role="region" aria-labelledby="project-uploader-title">
      <h2 id="project-uploader-title" className="font-semibold mb-2">Upload Projects</h2>
      <input
        aria-label="Project title"
        type="text"
        placeholder="Project Title"
        className="border p-2 rounded w-full mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        aria-label="Project description"
        rows={3}
        placeholder="Project Description"
        className="border p-2 rounded w-full mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        aria-label="Project URL"
        type="url"
        placeholder="Project URL (optional)"
        className="border p-2 rounded w-full mb-2"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={addProject}
        className="bg-blue-700 text-white px-3 py-1 rounded"
        disabled={!title.trim() || !description.trim()}
      >
        Add Project
      </button>

      <ul className="mt-4 space-y-3" tabIndex={0}>
        {projects.length === 0 && <li>No projects added yet.</li>}
        {projects.map((p) => (
          <li key={p.id} className="border p-3 rounded bg-white flex justify-between items-start">
            <div>
              <strong>{p.title}</strong>
              <p className="text-sm">{p.description}</p>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm"
                >
                  View Project
                </a>
              )}
            </div>
            <button
              onClick={() => removeProject(p.id)}
              aria-label={`Remove project ${p.title}`}
              className="text-red-600 hover:underline ml-4"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
