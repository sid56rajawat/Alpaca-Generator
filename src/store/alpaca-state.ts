import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AlpacaState{
    alpacaLook:Record<string,string>;
    choices: Record<string,string[]>;
}

const baseURL = "src/assets/alpaca/";
const initialState: AlpacaState = {
    alpacaLook: {
        "Background" : baseURL + "backgrounds/darkblue.png",
        "Ears": baseURL + "ears/default.png",
        "Neck": baseURL + "neck/default.png",
        "Leg": baseURL + "leg/default.png",
        "Nose": baseURL + "nose.png",
        "Hair": baseURL + "hair/default.png",
        "Mouth": baseURL + "mouth/default.png",
        "Eyes": baseURL + "eyes/default.png",
        "Accessories" : ""
    },
    choices: {
        "Background": ["Darkblue", "Blue", "Green", "Grey", "Red", "Yellow"], // TODO: color intensity
        "Ears": ["Default","Tilt Backward", "Tilt Forward"],
        "Neck": ["Default","Bend Backward", "Bend Forward", "Thick"],
        "Leg": ["Default", "Tilt Backward", "Tilt Forward", "Game Console", "Cookie", "Bubble Tea"],
        "Hair" : ["Default", "Curls", "Short", "Bang", "Elegant", "Quiff" ],
        "Mouth": ["Default", "Astonished", "Eating", "Laugh", "Tongue"],
        "Eyes": ["Default", "Angry", "Naughty", "Panda", "Smart", "Star"],
        "Accessories": ["Headphone", "Glasses", "Flower", "Earings"],
    }
}

const alpacaSlice = createSlice({
    name: 'alpaca',
    initialState,
    reducers: {
        updateLook: (state, action: PayloadAction<{key: string, val:string}>) => {
            let {key , val} = action.payload;
            val = val.toLowerCase().replace(' ','-');
            const path = baseURL + (key === "Background" ? "backgrounds" : key.toLowerCase()) + "/" + val + ".png";
            state.alpacaLook[key] = path;
        }
    }
});

export const {updateLook} = alpacaSlice.actions;
export default alpacaSlice.reducer