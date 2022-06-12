import React from "react";
import s from "./Counter.module.css"
import {Display} from "./Display/Display";
import {ButtonAreaOfCounter} from "./ButtonAreaOfCounter/ButtonAreaOfCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/store";
import {incValueAC, resetValueAC} from "../../Redux/counter-reduser";

/*type CounterPropsType = {
    maxValue: number
    startValue: number
    counter: number
    //setCounter: (counter: number) => void
    buttonIndicator: boolean
    error: boolean
}*/

export function Counter() {

    let counter = useSelector<AppStateType,number>(state => state.counterState.counter)
    const dispatch = useDispatch()
    let maxValue = useSelector<AppStateType,number>(state => state.counterState.maxInputValue)
    let startValue = useSelector<AppStateType,number>(state => state.counterState.startInputValue)

    const callBack = (nameOfButton: 'inc' | 'reset') => {

        if (counter < maxValue && nameOfButton === 'inc') {
            dispatch(incValueAC())
        }

        if (nameOfButton === 'reset') {
            dispatch(resetValueAC(startValue))
        }
        //props.setCounter(counter)
    }

    return (
        <div className={s.counter}>
            <div>
                <Display
                    //counter={counter}
                    //maxValue={props.maxValue}
                    //buttonIndicator={props.buttonIndicator}
                    //error={props.error}
                />
            </div>
            <div>
                <ButtonAreaOfCounter
                    //counter={counter}
                   // maxValue={maxValue}
                    //startValue={startValue}
                    callBack={callBack}
                    //buttonIndicator={buttonIndicator}
                />
            </div>

        </div>
    )
}