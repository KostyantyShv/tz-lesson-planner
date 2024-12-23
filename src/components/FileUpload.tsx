import React, { useState, useCallback } from 'react';
import { toast } from 'react-hot-toast'; // Імпортуємо toast
import { FileRejection } from 'react-dropzone';
import FileDropzone from './FileDropzone';
import FileList from './FileList';

const FileUpload: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      console.log('Accepted files:', acceptedFiles);
      console.log('Rejected files:', fileRejections);

      if (acceptedFiles.length > 0) {
        setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
        toast.success(`${acceptedFiles.length} file(s) uploaded successfully!`); // Успішне завантаження
      }

      if (fileRejections.length > 0) {
        toast.error(`Failed to upload ${fileRejections.length} file(s). Please check the file format.`); // Помилка при завантаженні
      }
    },
    []
  );

  const removeFile = (fileIndex: number) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, index) => index !== fileIndex));
    toast.success("File removed successfully!"); 
  };

  return (
    <div className="space-y-4">
      <FileDropzone onDrop={onDrop} />
      {uploadedFiles.length > 0 && <FileList files={uploadedFiles} onRemove={removeFile} />}
    </div>
  );
};

export default FileUpload;
