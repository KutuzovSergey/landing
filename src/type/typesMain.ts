import { ChangeEvent } from "react";

export type JobCardsArrType = {
	number: string,
   image: any,
   text: string,
}[]

export type StateListType = {
	textPost: string[],
}

export type ChangeListActionType = {
   type: string,
   textPost: string
}

export type listModelsSelectType = {
   id: number,
   value: string,
   name: string
}[]

export type useSearchType = {
   listModels: listModelsSelectType
}[]

//  types state
export type UserReviewsType = {
   id: number,
   userName: string,
   userOpinion: string
} []

export type listModelsType = {
   value: string,
   name: string,
   image: any
}[]

export type ServicesType = {
   id: string,
   nameService: string,
   deadline: string,
   price: string
}[]

export type StateType = {
   listModels: listModelsType,
   services: ServicesType,
   userReviews: UserReviewsType,
}
//  types state

export type listModelsActionType = {
   type: string,
   payload: listModelsType
}

export type inputValueType = [
   inputName: string,
   inputPhone: string,
]

export type UseSendApplicationType = [
   inputValue: string,
   changeInputName: (e: ChangeEvent) => void,
   changeInputPhone: (e: ChangeEvent) => void
]

// hooks

export type SearchType = [
   listModels: listModelsType,
]

export type useSliderType = [
   onClickLeft: () => void,
   onClickRight: () => void,
]