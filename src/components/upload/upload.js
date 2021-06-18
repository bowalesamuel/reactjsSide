import React, { useRef } from "react";
import { UploadIcon } from "../../assets/svg";
import styles from "./style.module.scss";

const Upload = ({ handleFile, file }) => {
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const onChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    handleFile(file);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;
    handleFile(file);
  };

  return (
    <div
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
      className={`${styles.body} ${file && styles.active} `}
    >
      <UploadIcon />
      <div className={`${styles.name} ${file && styles.active}`}>
        {file ? file.name : "Drop your images and receipts here"}
      </div>
      <div
        className={`${styles.upload} ${file && styles.active}`}
        onClick={handleClick}
      >
        Or upload a file
      </div>
      <input
        onChange={onChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
        type="file"
        accept="image/jpeg,image/png"
      />
    </div>
  );
};

export default Upload;
