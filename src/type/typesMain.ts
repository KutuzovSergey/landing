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

export type listModelsSelectType = {
   value: string,
   name: string
}[]

export type SearchType = [
   listModels: listModelsType,
]

export type StateType = {
   listModels: listModelsType,
   services: ServicesType
}


export type listModelsActionType = {
   type: string,
   payload: listModelsType
}