import { createContext, useContext, useState, useEffect } from "react";
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

    useEffect(()=>{

        const id = "root-color-scheme";

        remove_existing_element: {
            const element = document.getElementById(id);

            if (element === null) {
                break remove_existing_element;
            }

            element.remove();
        }

        const element = document.createElement("style");

        element.id = id;

        element.innerHTML = `
			:root {
				color-scheme: ${isDarkMode ? "dark" : "light"}
			}
		`;

        document.getElementsByTagName("head")[0].appendChild(element);

    },[isDarkMode]);

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