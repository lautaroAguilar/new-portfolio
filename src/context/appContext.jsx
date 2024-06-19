"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [sectionState, setSectionState] = useState("Inicio");
  const [isExiting, setIsExiting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);

  const openModal = (images) => {
    setImages(images);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setImages([]);
  };
  const changeSection = (newSection) => {
    setIsExiting(true);
    setTimeout(() => {
      setSectionState(newSection);
      setIsExiting(false);
    }, 500);
  };

  return (
    <AppContext.Provider
      value={{
        sectionState,
        changeSection,
        isExiting,
        setIsExiting,
        isOpen,
        images,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext debe usarse dentro de un AppProvider");
  }
  return context;
}
