import React from 'react';
import { Trash } from 'lucide-react';

interface FileListProps {
  files: File[];
  onRemove: (index: number) => void;
}

const FileList: React.FC<FileListProps> = ({ files, onRemove }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium">Uploaded Files:</h3>
      <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-2">
        {files.map((file, index) => (
          <li
            key={index}
            className="flex items-center justify-between text-sm bg-gray-100 p-2 rounded-lg"
          >
            <span>
              {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </span>
            <button
              type="button"
              className="flex items-center text-red-600 hover:text-red-800 transition"
              onClick={() => onRemove(index)}
            >
              <Trash className="w-4 h-4 mr-1" />
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
