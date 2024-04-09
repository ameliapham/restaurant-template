import { createContext, useContext, useState } from "react";
import { assert } from "tsafe/assert";
import { getIsDarkModeEnabledByDefault } from "tools/getIsDarkModeEnabledByDefault";



type DarkModeContextType = {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
};

const darkModeContext = createContext<DarkModeContextType | undefined>(undefined);



type DarkModeProviderProps = {
    children: React.ReactNode;
};

export function DarkModeProvider(props: DarkModeProviderProps) {
    const { children } = props;

    const [isDarkMode, setIsDarkMode] = useState(() => getIsDarkModeEnabledByDefault());

    const contextValue = {
        isDarkMode,
        setIsDarkMode,
    };

    return (
        <darkModeContext.Provider value={contextValue}>
            {children}
        </darkModeContext.Provider>
    );
}



export function useDarkMode() {
    const contextValue = useContext(darkModeContext);

    assert(contextValue !== undefined, "You must provide DarkModeProvider to use useDarkMode");

    const { isDarkMode, setIsDarkMode } = contextValue;

    return { isDarkMode, setIsDarkMode };
}