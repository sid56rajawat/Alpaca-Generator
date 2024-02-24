import { ReactNode, createContext, useContext, useState } from "react";

interface AlpacaProps{
    background?: string;
    setBackground?: React.Dispatch<React.SetStateAction<string>>;
}
const temp:AlpacaProps = {};
export const AlpacaContext = createContext(temp);

interface AlpacaProviderProps{
    children?: ReactNode;
}

export const AlpacaProvider = ({children}: AlpacaProviderProps) => {
    const [background, setBackground] = useState<string>('@alpaca-assets/backgrounds/darkblue70');

    const values = { background, setBackground};

    return (
        <AlpacaContext.Provider value={values}>
            {children}
        </AlpacaContext.Provider>
    );
}

export const useAlpacaContext = () => {
    const context = useContext(AlpacaContext);

    if(!context){
        throw new Error("useAlpacaContext must be used inside the AlpacaProvider");
    }

    return context;
}