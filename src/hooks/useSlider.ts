import { useState, useEffect, RefObject } from "react";
import { useSliderType } from "../type/typesMain.ts";

export const useSlider = (myBlock: RefObject<HTMLInputElement>, myWrapper: RefObject<HTMLInputElement>, numberSlides: number): useSliderType => {

    const [sliderSize, setSliderSize] = useState<number>(0);
    const [numberSlide, setNumberSlide] = useState<0>(0);

    const removeLetters = (description: string): number => {
        return +(description.split('').filter(item => +item || +item === 0).join(''))
    }

    
    const calculateSlider = (blockSize: string): void => {
        setSliderSize( Math.round(removeLetters(blockSize) / numberSlides));
    }
    
    const onClickLeft = (): void => {
        const blockSize: string = getComputedStyle(myBlock.current).width;
        const wrapperSize: string = getComputedStyle(myWrapper.current).width;
        const blockStyleLeft: number = removeLetters(getComputedStyle(myBlock.current).left);

        calculateSlider(blockSize);

        let stepLeft = blockStyleLeft - sliderSize;
        console.log(numberSlide);
        console.log(Math.abs(numberSlides));

        if (Math.abs(numberSlide) >= Math.abs(numberSlides) ) {
            console.log(numberSlides);
            return
        } else {
            myBlock.current.style.left = stepLeft + "px";
            setNumberSlide(numberSlide - 1);
        }
        
    }

    const onClickRight = (): void => {
        const blockSize: string = getComputedStyle(myBlock.current).width;
        const wrapperSize: string = getComputedStyle(myWrapper.current).width;
        const blockStyleLeft: number = removeLetters(getComputedStyle(myBlock.current).left);

        calculateSlider(blockSize);
        
        let stepRight = blockStyleLeft + sliderSize;
        console.log(blockStyleLeft);

        if (numberSlide === 0 || numberSlide === numberSlides) {
            console.log(numberSlides);
            return
        } else {
            console.log(blockStyleLeft + sliderSize);
            myBlock.current.style.left = stepRight + "px";
            setNumberSlide(numberSlide + 1);
        }
    }
    
    return [
        onClickLeft,
        onClickRight,
    ]
}