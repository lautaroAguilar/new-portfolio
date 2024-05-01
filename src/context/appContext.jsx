"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [sectionState, setSectionState] = useState("Inicio");
  const [isExiting, setIsExiting] = useState(false);
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
