
import { createContext, useContext, useState } from "react";
import { assert } from "tsafe/assert";

const context = createContext<{
    foo: string;
    setFoo: (foo: string) => void;
} | undefined>(undefined);

type DarkModeProviderProps = {
    children: React.ReactNode;
    fooDefaultValue: string;
};

export function FooProvider(props: DarkModeProviderProps) {
    const { children, fooDefaultValue } = props;

    const [foo, setFoo] = useState(fooDefaultValue);

    return (
        <context.Provider value={{
            foo,
            setFoo,
        }}>
            {children}
        </context.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFoo() {

    const contextValue = useContext(context);

    assert(contextValue !== undefined, "You must use Foo provider");

    const { foo, setFoo } = contextValue;

    return { foo, setFoo };

}