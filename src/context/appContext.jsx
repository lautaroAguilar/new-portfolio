"use client";
import { createContext, useState, useContext, useEffect} from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [sectionState, setSectionState] = useState("Inicio");
  const [isExiting, setIsExiting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  
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
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);
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
        isMobile
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
