import React, { useState } from "react";
import styles from "./ImageModal.module.css";
import Link from "next/link";
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
        {images[currentImage] ? (
          images[currentImage].endsWith(".mp4") ? (
            <video
              className={styles.image}
              controls
              onError={() => alert("Hubo un error al cargar las imágenes, lo siento. De ser posible, házmelo saber.")}
            >
              <source src={images[currentImage]} type="video/mp4" />
            </video>
          ) : (
            <img
              src={images[currentImage]}
              alt="Project Image"
              className={styles.image}
              onError={() => alert("Hubo un error al cargar las imágenes, lo siento. De ser posible, házmelo saber.")}
            />
          )
        ) : (
          <div className={styles.errorContainer}>
            <p>
              Lo siento, hubo un error con las imágenes, por favor hazmelo saber al siguiente email.
            </p>
            <Link
              href={"mailto:lautaroaramisaguilar@gmail.com"}
              target="_blank"
              className={styles.button}
            >
              Contacto
            </Link>
          </div>
        )}
        {images.length > 1 && (
          <>
            <FaArrowLeft onClick={prevImage} className={styles.btn} />
            <FaArrowRight onClick={nextImage} className={styles.btn} />
          </>
        )}
        <IoIosClose onClick={onClose} className={styles.closeBtn} />
      </div>
    </div>
  );
};

export default ImageModal;
