import React, { useState } from 'react';
import styles from './ImageModal.module.css'; // Asegúrate de crear este archivo CSS para estilos

const ImageModal = ({ images, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <img src={images[currentImage]} alt="Project Image" className={styles.image}/>
        <button onClick={prevImage} className={styles.btn}>Prev</button>
        <button onClick={nextImage} className={styles.btn}>Next</button>
        <button onClick={onClose} className={styles.btn}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;