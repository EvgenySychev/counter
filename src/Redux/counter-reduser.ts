

const initialState = {
    counter:0,
    startInputValue:0,
    maxInputValue:0,
    buttonIndicator:false,
    error:true
}

type InitialStateType = typeof initialState

export const counterReducer = (state:InitialStateType = initialState,action:ActionType):InitialStateType => {
    switch (action.type) {
        case "INC-VALUE": {
            return {
                ...state, counter: state.counter + 1
            }
        }
        case "RESET-VALUE": {
            return {
                ... state, counter: action.startInputValue
            }
        }
        case "SET-MAX-INPUT-VALUE": {

            return {
                ...state, maxInputValue: Number(action.maxInputValue), buttonIndicator: false
            }
        }
        case "SET-START-INPUT-VALUE": {
            return {
                ...state, startInputValue: Number(action.startInputValue), buttonIndicator: false
            }
        }
        case "SET-VALUE": {
            return {
                ...state, buttonIndicator: true, counter: state.startInputValue
            }
        }
        case "SET-ERROR": {
            let err: boolean
            if (action.maxInputValue <= action.startInputValue) {
                err = true
            } else {
                err = action.startInputValue < 0;
            }
            return {
                ...state, error: err
            }
        }
        default:
            return state
    }
}

export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const resetValueAC = (startInputValue:number) => ({type:'RESET-VALUE', startInputValue} as const)
export const setMaxInputValueAC = (maxInputValue:string) => ({type: 'SET-MAX-INPUT-VALUE',maxInputValue} as const)
export const setStartInputValueAC = (startInputValue:string) => ({type: 'SET-START-INPUT-VALUE',startInputValue} as const)
export const setValueAC = () => ({type: 'SET-VALUE'} as const)
export const setErrorAC = (startInputValue:number,maxInputValue:number) => ({type: 'SET-ERROR',startInputValue,maxInputValue } as const)

export type incValueActionType = ReturnType<typeof incValueAC>
export type resetValueActionType = ReturnType<typeof resetValueAC>
export type setMaxInputValueActionType = ReturnType<typeof setMaxInputValueAC>
export type setStartInputValueActionType = ReturnType<typeof setStartInputValueAC>
export type setValueActionType = ReturnType<typeof setValueAC>
export type setErrorActionType = ReturnType<typeof setErrorAC>


export type ActionType = incValueActionType|resetValueActionType|setMaxInputValueActionType|setStartInputValueActionType|setValueActionType|setErrorActionType