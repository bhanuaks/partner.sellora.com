"use client"
import { useRef, useState } from 'react';

const FileUpload = ({heading}) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  return (
    <div className="form-group">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <label htmlFor="listing-status">{heading}:</label>
        </div>
        <div className="col-lg-8">
          <div className="form-group">
            <input
              type="file"
              ref={fileInputRef}
              name="img[]"
              onChange={handleFileChange}
              className="d-none"
            />
            <input
              type="text"
              className="form-control form-control-lg"
              value={fileName}
              readOnly
              style={{ float: 'left', width: '70%', marginRight: '-5px' }}
            />
            <button
              className="browse btn-primary bg_orange"
              type="button"
              onClick={handleButtonClick}
              style={{ float: 'left', width: '30%', height: '40px' }}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
