import { Upload } from 'lucide-react';
import React, { useCallback } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';

interface FileUploadProps {
  onFileUpload?: (files: File[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      console.log('Accepted files:', acceptedFiles);
      console.log('Rejected files:', fileRejections);

      if (onFileUpload) {
        onFileUpload(acceptedFiles);
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop, 
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'text/plain': ['.txt'],
      'text/html': ['.html'],
    },
    maxSize: 50 * 1024 * 1024, 
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center ${
        isDragActive ? 'border-black bg-gray-100' : 'border-gray-300'
      }`}
    >
      <input {...getInputProps()} />
      <button
        type="button"
        className="flex gap-2 bg-black text-white px-3.5 py-3.5 rounded-lg hover:bg-gray-800 transition"
      >
        <Upload/>
        Upload a file
      </button>
      <p className="text-gray-500 mt-2">Max. file size 50 MB</p>
      <p className="text-gray-400">(PDF, DOCX, PPTX, TXT, HTML)</p>
    </div>
  );
};

export default FileUpload;
