import { useState, useEffect } from "react";
// import { findingValueInArray } from "../utils/filters";
import { listModelsSelectType, useSearchType } from "../type/typesMain.ts";

export const useSearch = (): useSearchType => {

    const [listModels, setListModels] = useState<listModelsSelectType>([
        {
            id: 1,
            value: '20 Pro 8/256Gb Phantom Blue',
            name: '20 Pro 8/256Gb Phantom Blue'
        },
        {
            id: 2,
            value: '20 Pro 8/256Gb Phantom Blue',
            name: '20 Pro 8/256Gb Phantom Blue'
        },
        {
            id: 3,
            value: '20 Pro 8/256Gb Phantom Blue',
            name: '20 Pro 8/256Gb Phantom Blue'
        },
        {
            id: 4,
            value: '20 Pro 8/256Gb Phantom Blue',
            name: '20 Pro 8/256Gb Phantom Blue'
        },
        {
            id: 5,
            value: '20 Pro 8/256Gb Phantom Blue',
            name: '20 Pro 8/256Gb Phantom Blue'
        },
        {
            id: 6,
            value: '20 Pro 8/256Gb Phantom Blue',
            name: '20 Pro 8/256Gb Phantom Blue'
        },
        {
            id: 7,
            value: '20 Pro 8/256Gb Phantom Blue',
            name: '20 Pro 8/256Gb Phantom Blue'
        },
        {
            id: 8,
            value: '20 Pro 8/256Gb Phantom Blue',
            name: '20 Pro 8/256Gb Phantom Blue'
        },
        {
            id: 9,
            value: '20 Pro 8/256Gb Phantom Blue',
            name: '20 Pro 8/256Gb Phantom Blue'
        },
        {
            id: 10,
            value: '20 Pro 8/256Gb Phantom Blue',
            name: '20 Pro 8/256Gb Phantom Blue'
        },
    ]);

    return [
        listModels,
    ]
}