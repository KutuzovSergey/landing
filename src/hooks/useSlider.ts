import { useState, useEffect } from "react";
import { SliderType } from "../type/typesMain.ts";

export const useSlider = (block): SliderType => {

    const onClickLeft = (): void => {
        console.log(block.current)
        console.log(getComputedStyle(block.current).width);
     }
    const onClickRight = (): void => { }
    
    return [
        onClickLeft,
        onClickRight,
    ]
}