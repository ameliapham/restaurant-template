
import { createContext, useContext, useState } from "react";
import { assert } from "tsafe/assert";
import { getIsDarkModeEnabledByDefault } from "tools/getIsDarkModeEnabledByDefault";

const darkModeContext = createContext<{
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
} | undefined>(undefined);

type DarkModeProviderProps = {
    children: React.ReactNode;
};

export function DarkModeProvider(props: DarkModeProviderProps){
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

// eslint-disable-next-line react-refresh/only-export-components
export function useDarkMode(){

    const contextValue = useContext(darkModeContext);

    assert(contextValue !== undefined, "You must provide DarkModeProvider to useDarkMode()");  

    const { isDarkMode, setIsDarkMode } = contextValue;

    return { isDarkMode, setIsDarkMode};

}