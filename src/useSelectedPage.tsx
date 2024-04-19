import { createContext, useContext, useState } from "react";
import { assert } from "tsafe/assert";


type SelectedPage = "home" | "menu" | "about" | "reservation"

type ContextValue = {
    selectedPage: SelectedPage;
    setSelectedPage: (selectedPage: SelectedPage) => void;
} | undefined;

const context = createContext<ContextValue>(undefined);

type SelectedPageProviderProps = {
    defaultSelectedPage: SelectedPage;
    children: React.ReactNode;
};

export function SelectedPageProvider(props: SelectedPageProviderProps) {
    const { children, defaultSelectedPage } = props;

    const [selectedPage, setSelectedPage] = useState(defaultSelectedPage);

    return (
        <context.Provider value={{ selectedPage, setSelectedPage }}>
            {children}
        </context.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSelectedPage() {

    const contextValue = useContext(context);

    assert(
        contextValue !== undefined, 
        "This hook must be called in a descendant of SelectedPageProvider"
    );

    const { selectedPage, setSelectedPage } = contextValue;

    return { selectedPage, setSelectedPage };

}