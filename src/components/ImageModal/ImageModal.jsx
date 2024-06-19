import React, { useState } from "react";
import styles from "./ImageModal.module.css"; // Asegúrate de crear este archivo CSS para estilos
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
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
        {images[currentImage].endsWith(".mp4") ? (
          <video className={styles.image} controls>
            <source src={images[currentImage]} type="video/mp4" />
          </video>
        ) : (
          <img
            src={images[currentImage]}
            alt="Project Image"
            className={styles.image}
          />
        )}
        <FaArrowLeft onClick={prevImage} className={styles.btn} />
        <FaArrowRight onClick={nextImage} className={styles.btn} />
        <IoIosClose onClick={onClose} className={styles.btn} />
      </div>
    </div>
  );
};

export default ImageModal;
