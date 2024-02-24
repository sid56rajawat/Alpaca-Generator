import { ReactNode, createContext, useContext, useState } from "react";

interface AlpacaProps{
    background?: string;
    ears?: string;
    neck?: string;
    leg?: string;
    nose?: string;
    hair?: string;
    mouth?: string;
    eyes?: string;
    accessories?: string;
    setBackground?: React.Dispatch<React.SetStateAction<string>>;
    setEars?: React.Dispatch<React.SetStateAction<string>>;
    setNeck?: React.Dispatch<React.SetStateAction<string>>;
    setLeg?: React.Dispatch<React.SetStateAction<string>>;
    setNose?: React.Dispatch<React.SetStateAction<string>>;
    setHair?: React.Dispatch<React.SetStateAction<string>>;
    setMouth?: React.Dispatch<React.SetStateAction<string>>;
    setEyes?: React.Dispatch<React.SetStateAction<string>>;
    setAccessories?: React.Dispatch<React.SetStateAction<string>>;
}
const defaultValue:AlpacaProps = {};
export const AlpacaContext = createContext(defaultValue);

interface AlpacaProviderProps{
    children?: ReactNode;
}

export const AlpacaProvider = ({children}: AlpacaProviderProps) => {
    const [background, setBackground] = useState<string>("src/assets/alpaca/backgrounds/darkblue70.png");
    const [ears, setEars] = useState<string>("src/assets/alpaca/ears/default.png");
    const [neck, setNeck] = useState<string>("src/assets/alpaca/neck/default.png");
    const [leg, setLeg] = useState<string>("src/assets/alpaca/leg/default.png");
    const [nose, setNose] = useState<string>("src/assets/alpaca/nose.png");
    const [hair, setHair] = useState<string>("src/assets/alpaca/hair/default.png");
    const [mouth, setMouth] = useState<string>("src/assets/alpaca/mouth/default.png");
    const [eyes, setEyes] = useState<string>("src/assets/alpaca/eyes/default.png");
    const [accessories, setAccessories] = useState<string>("");

    const values = { 
        background,
        ears,
        neck,
        leg,
        nose,
        hair,
        mouth,
        eyes,
        accessories,
        setBackground,
        setEars,
        setNeck,
        setLeg,
        setNose,
        setHair,
        setMouth,
        setEyes,
        setAccessories
    };

    return (
        <AlpacaContext.Provider value={values}>
            {children}
        </AlpacaContext.Provider>
    );
}

export const useAlpacaContext = () => {
    const context = useContext(AlpacaContext);

    if(!context){
        console.error("useAlpacaContext must be used inside the AlpacaProvider");
    }

    return context;
}