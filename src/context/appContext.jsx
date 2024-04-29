"use client"
import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [sectionState, setSectionState] = useState('Inicio');

    const changeSection = (newSection) => {
        setSectionState(newSection);
    };

    return (
        <AppContext.Provider value={{
            sectionState,
            changeSection
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext debe usarse dentro de un AppProvider');
    }
    return context;
}
