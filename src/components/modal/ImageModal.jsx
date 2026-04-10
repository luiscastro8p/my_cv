import React from "react";
import "./ImageModal.css";

const ImageModal = ({ isOpen, image, title, onClose }) => {
  React.useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <div className="modal-body">
          <img src={image} alt={title} className="modal-image" />
          <h2 className="modal-title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
