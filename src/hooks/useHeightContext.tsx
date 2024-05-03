import { createContext, useState, useContext } from 'react';
import { assert } from "tsafe/assert";

// Type pour le contexte
type HeightContextType = {
    height: number;
    setHeight: (height: number) => void;
};


// Création du contexte avec des valeurs par défaut qui seront écrasées par le provider
const HeightContext = createContext<HeightContextType | undefined>(undefined);


// Provider qui rendra le contexte disponible aux composants enfants
type HeightProviderProps = {
    children: React.ReactNode;
};

export function HeightProvider(props : HeightProviderProps) {
    const { children } = props;

    const [height, setHeight] = useState(0);

    return (
        <HeightContext.Provider value={{ height, setHeight }}>
            {children}
        </HeightContext.Provider>
    );
}


// Hook pour accéder au contexte
export function useHeight() {
    const context = useContext(HeightContext);

    assert(
        context !== undefined, 
        "useHeight must be used within a HeightProvider"
    );

    return context;
}