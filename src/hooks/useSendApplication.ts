import { ChangeEvent, useState } from "react";
import { UseSendApplicationType, inputValueType } from "../type/typesMain.ts";

export const useSendApplication = (): UseSendApplicationType => {

    const [inputValue, setInputValue] = useState<inputValueType>({
        inputName: '',
        inputPhone: '',
    });

    const changeInputName = (e: ChangeEvent): void => {
        setInputValue({ ...inputValue, inputName: e.target.value })
    }

    const changeInputPhone = (e: ChangeEvent): void => {
        setInputValue({ ...inputValue, inputPhone: e.target.value })
    }

    return [
        inputValue,
        changeInputName,
        changeInputPhone,
    ]
}