import { createStore } from 'redux';
import Pro8256Gb from '../images/content/goods/20Pro8256Gb.png';

import { StateType, listModelsActionType, listModelsType} from "../type/typesMain.ts";


const defaultState: StateType = {
    listModels: [
        {
            value: '8/256Gb',
            name: '20 Pro 8/256Gb Phantom Blue',
            image: Pro8256Gb,
        },
        {
            value: '7/256Gb',
            name: '20 Pro 8/256Gb Phantom Blue',
            image: Pro8256Gb,
        },
        {
            value: '6/256Gb',
            name: '20 Pro 8/256Gb Phantom Blue',
            image: Pro8256Gb,
        },
        {
            value: '5/256Gb',
            name: '20 Pro 8/256Gb Phantom Blue',
            image: Pro8256Gb,
        },
        {
            value: '4/256Gb',
            name: '20 Pro 8/256Gb Phantom Blue',
            image: Pro8256Gb,
        },
        {
            value: '3/256Gb',
            name: '20 Pro 8/256Gb Phantom Blue',
            image: Pro8256Gb,
        },
        {
            value: '2/256Gb',
            name: '20 Pro 8/256Gb Phantom Blue',
            image: Pro8256Gb,
        },
        {
            value: '1/256Gb',
            name: '20 Pro 8/256Gb Phantom Blue',
            image: Pro8256Gb,
        },
    ],
    services: [
        {
            id: '1',
            nameService: 'Замена light сенсора',
            deadline: '1-3 дня',
            price: '1 000 - 3 000 ₽'
        },
        {
            id: '2',
            nameService: 'Замена light сенсора',
            deadline: '1-3 дня',
            price: '1 000 - 3 000 ₽'
        },
        {
            id: '3',
            nameService: 'Замена light сенсора',
            deadline: '1-3 дня',
            price: '1 000 - 3 000 ₽'
        },
        {
            id: '4',
            nameService: 'Замена light сенсора',
            deadline: '1-3 дня',
            price: '1 000 - 3 000 ₽'
        },
        {
            id: '5',
            nameService: 'Замена light сенсора',
            deadline: '1-3 дня',
            price: '1 000 - 3 000 ₽'
        },
        {
            id: '6',
            nameService: 'Замена light сенсора',
            deadline: '1-3 дня',
            price: '1 000 - 3 000 ₽'
        },
        {
            id: '7',
            nameService: 'Замена light сенсора',
            deadline: '1-3 дня',
            price: '1 000 - 3 000 ₽'
        },
        {
            id: '8',
            nameService: 'Замена light сенсора',
            deadline: '1-3 дня',
            price: '1 000 - 3 000 ₽'
        },
        {
            id: '9',
            nameService: 'Замена light сенсора',
            deadline: '1-3 дня',
            price: '1 000 - 3 000 ₽'
        },
        {
            id: '10',
            nameService: 'Замена light сенсора',
            deadline: '1-3 дня',
            price: '1 000 - 3 000 ₽'
        },
    ],
    userReviews: [
        {
            userName: 'Владимир',
            userOpinion: 'Чинят не только мобильную технику, что очень порадовало! Перепаяли порт на midi-контроллере, все качественно и быстро! Очень выручили :)',
        },
        {
            userName: 'Константин',
            userOpinion: 'Сломалось гнездо зарядки у планшета. В других мастерских просили несколько тысяч за полную замену детали, а местный мастер смог перепаять и теперь все работает.',
        },
        {
            userName: 'Артём',
            userOpinion: 'Узнал что почти все сервисы покупают тут запчасти для ремонта и решил обратиться напрямую за запчастью и ремонтом. Вышло ДЕШЕВО!!',
        },
       {
            userName: 'Владимир',
            userOpinion: 'Чинят не только мобильную технику, что очень порадовало! Перепаяли порт на midi-контроллере, все качественно и быстро! Очень выручили :)',
        },
        {
            userName: 'Константин',
            userOpinion: 'Сломалось гнездо зарядки у планшета. В других мастерских просили несколько тысяч за полную замену детали, а местный мастер смог перепаять и теперь все работает.',
        },
        {
            userName: 'Артём',
            userOpinion: 'Узнал что почти все сервисы покупают тут запчасти для ремонта и решил обратиться напрямую за запчастью и ремонтом. Вышло ДЕШЕВО!!',
        },
    ],
}

const GET_LIST_MODELS: string = 'GET_LIST_MODELS';
const ADD_LIST_MODELS: string = 'ADD_LIST_MODELS';

const addListModels = (models: listModelsType): listModelsActionType => {
    return {
        type: ADD_LIST_MODELS,
        models: models
    }
}

function reducer(state = defaultState, action: listModelsActionType) {
    switch (action.type){
        case GET_LIST_MODELS:
            return state
         case ADD_LIST_MODELS:
            return { ...state, listModels: action.generalApp } 
        default:
            return state
    }
}

const store = createStore(reducer);

export default store;