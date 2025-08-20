import React, { useState } from "react";
import {
  FaUpload,
  FaFolderOpen,
  FaEllipsisV,
  FaFilePdf,
  FaFileImage,
  FaFileWord,
  FaFolderPlus,
} from "react-icons/fa";

const Uploads = () => {
  const [files, setFiles] = useState([]);

  // Handle file upload (only files)
  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files).map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      size: `${(file.size / 1024).toFixed(1)} KB`,
      type: file.type.includes("pdf")
        ? "pdf"
        : file.type.includes("image")
        ? "image"
        : "word",
    }));
    setFiles((prev) => [...prev, ...uploadedFiles]);
  };

  // Handle folder upload (only folder with files inside)
  const handleFolderUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files).map((file, index) => ({
      id: Date.now() + index,
      name: file.webkitRelativePath, // show folder path + filename
      size: `${(file.size / 1024).toFixed(1)} KB`,
      type: file.type.includes("pdf")
        ? "pdf"
        : file.type.includes("image")
        ? "image"
        : "word",
    }));
    setFiles((prev) => [...prev, ...uploadedFiles]);
  };

  return (
    <div className="p-6 bg-slate-100 h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">📤 Uploads</h1>
        <div className="flex gap-4">
          {/* Upload File Button */}
          <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 cursor-pointer">
            <FaUpload className="text-lg" />
            Upload File
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="hidden"
              // Only allow files
              webkitdirectory={undefined}
              directory={undefined}
            />
          </label>

          {/* Upload Folder Button */}
          <label className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 cursor-pointer">
            <FaFolderPlus className="text-lg" />
            Upload Folder
            <input
              type="file"
              multiple
              webkitdirectory="true"
              directory="true"
              onChange={handleFolderUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-lg shadow p-6 text-slate-700">
        {files.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  {file.type === "pdf" ? (
                    <FaFilePdf className="text-red-500 text-xl" />
                  ) : file.type === "image" ? (
                    <FaFileImage className="text-blue-500 text-xl" />
                  ) : (
                    <FaFileWord className="text-green-500 text-xl" />
                  )}
                  <div>
                    <p className="font-semibold">{file.name}</p>
                    <p className="text-sm text-slate-500">{file.size}</p>
                  </div>
                </div>
                <FaEllipsisV className="text-slate-500 cursor-pointer" />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-40 text-slate-500">
            <FaFolderOpen size={40} className="mb-2" />
            <p>No uploads yet. Start by uploading your files or folders.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Uploads;
