import React, { useState } from 'react';
import { supabase } from './supabaseClient';

const PdfUploader = () => {
  const [file, setFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError('');
    } else {
      setError('Please upload a valid PDF file.');
      setFile(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('No file selected.');
      return;
    }

    const filePath = `uploads/${Date.now()}_${file.name}`;

    // Upload the file to Supabase Storage
    const { data, error } = await supabase.storage
      .from('pdf-bucket') // Replace with your bucket name
      .upload(filePath, file);

    if (error) {
      setError('Error uploading file: ' + error.message);
      return;
    }

    // Get the public URL of the uploaded file
    const { data: urlData } = supabase.storage
      .from('pdf-bucket')
      .getPublicUrl(filePath);

    setPdfUrl(urlData.publicUrl);
    setError('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">PDF Uploader</h1>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upload PDF
      </button>
      {pdfUrl && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Uploaded PDF:</h2>
          <iframe
            src={pdfUrl}
            width="100%"
            height="500px"
            title="Uploaded PDF"
            className="mt-2"
          />
        </div>
      )}
    </div>
  );
};

export default PdfUploader;