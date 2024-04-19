import { createContext, useContext, useState, useEffect } from "react";
import { assert } from "tsafe/assert";
import { useConstCallback } from "powerhooks/useConstCallback";

const selectedPages = ["home", "menu", "about", "reservation", "404"] as const;

export type SelectedPage = typeof selectedPages[number];


type ContextValue = {
    selectedPage: SelectedPage;
    setSelectedPage: (selectedPage: SelectedPage) => void;
} | undefined;

const context = createContext<ContextValue>(undefined);

type SelectedPageProviderProps = {
    children: React.ReactNode;
};

function getSelectedPageFromUrlPath(): SelectedPage {

        //Remove the slash at the beginning of the path
        const locationWithoutSlash = window.location.pathname.slice(1);

        const selectedPage =
            locationWithoutSlash === "" ? 
                "home" : 
                locationWithoutSlash as SelectedPage;
            
        if( !selectedPages.includes(selectedPage) ){
            return "404";
        }

        return selectedPage;

}

export function SelectedPageProvider(props: SelectedPageProviderProps) {
    const { children } = props;

    const [selectedPage, setSelectedPage_real ] = useState(getSelectedPageFromUrlPath);

    const setSelectedPage = useConstCallback((selectedPage: SelectedPage) => {
        history.pushState(null, '', `/${selectedPage}`);
        setSelectedPage_real(selectedPage);
    });

    useEffect(()=> {

        const eventListener = ()=>{
            setSelectedPage_real(getSelectedPageFromUrlPath());
        };

        window.addEventListener("popstate", eventListener);

        return ()=> {
            window.removeEventListener("popstate", eventListener);
        }

    }, []);

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