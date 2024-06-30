import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react'; // Ensure you have lucide-react installed

const FileUploader = ({ register, name }:any) => {
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 4,
    maxSize: 4 * 1024 * 1024,
    onDrop: acceptedFiles => {
      console.log(acceptedFiles);
    }
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps({ className: 'dropzone' })}
        className="flex items-center justify-center h-64 bg-gray-100 border-2 border-dashed border-yellow-400 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors duration-200 ease-in-out"
      >
        <input
          id={`file-input-${name}`}
          {...register(name)}
          {...getInputProps()}
          className="hidden"
        />
        <div className="flex flex-col items-center justify-center text-gray-500">
          <Upload size={38} />
          <span className="mt-2 text-sm px-3 text-center">Drag 'n' drop files here, or click to select files</span>
          <p className="mt-1 text-xs px-3 text-center text-gray-400">You can upload 4 files (up to 4 MB each)</p>
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
