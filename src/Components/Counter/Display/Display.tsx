import React from 'react';
import s from "./Display.module.css"
import {useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/store";

/*type DisplayPropsType = {
    counter: number
    maxValue: number
    buttonIndicator: boolean
    error: boolean
}*/

export function Display(/*props: DisplayPropsType*/) {
    let error = useSelector<AppStateType,boolean>(state => state.counterState.error)
    let buttonIndicator = useSelector<AppStateType,boolean>(state => state.counterState.buttonIndicator)
    let counter = useSelector<AppStateType,number>(state => state.counterState.counter)
    let maxValue = useSelector<AppStateType,number>(state => state.counterState.maxInputValue)

    return (
        <div className={s.display}>
            {buttonIndicator
                ? <div className={counter === maxValue ? s.error : ''}>
                    {counter}
                </div>
                :
                <div>
                    {error
                        ? <div className={s.errorMessage}> "Incorrect value!"</div>
                        : <div className={s.startMessage}> "enter values and press 'set'"</div>
                    }
                </div>

            }
        </div>
    )
}
