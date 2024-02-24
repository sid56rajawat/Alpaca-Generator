import { ReactNode, createContext, useContext } from "react";

export enum AlpacaCustomizations {
    BACKGROUND = "Background",
    EARS = "Ears",
    NECK = "Neck",
    LEG = "Leg",
    NOSE = "Nose",
    HAIR = "Hair",
    MOUTH = "Mouth",
    EYES = "Eyes",
    ACCESSORIES = "Accessories"
}
interface AlpacaProps{
    alpacaLook:Record<string,string>;
    choices: Record<string,string[]>;
}
const defaultValue:AlpacaProps = {
    alpacaLook: {},
    choices: {}
};
export const AlpacaContext = createContext(defaultValue);

interface AlpacaProviderProps{
    children?: ReactNode;
}

export const AlpacaProvider = ({children}: AlpacaProviderProps) => {
    const baseURL = "src/assets/alpaca/";
    const alpacaLook:Record<string,string> = {
        "Background" : baseURL + "backgrounds/darkblue70.png",
        "Ears": baseURL + "ears/default.png",
        "Neck": baseURL + "neck/default.png",
        "Leg": baseURL + "leg/default.png",
        "Nose": baseURL + "nose.png",
        "Hair": baseURL + "hair/default.png",
        "Mouth": baseURL + "mouth/default.png",
        "Eyes": baseURL + "eyes/default.png",
        "Accessories" : baseURL + "accessories/headphone.png"
    }

    const choices:Record<string,string[]> = {
        "Hair" : ["Default", "Curls", "Short", "Bang", "Elegant", "Quiff" ]
    }

    const values = { 
        alpacaLook,
        choices
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