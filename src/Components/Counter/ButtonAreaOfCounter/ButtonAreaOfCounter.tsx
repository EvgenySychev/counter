import s from "../Counter.module.css";
import {Button} from "../../UniversalComponents/Button";
import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/store";

type ButtonAreaOfCounterPropsType = {
    //counter: number
    //maxValue: number
    //startValue: number
    //buttonIndicator: boolean
    callBack: (nameOfButton: 'inc' | 'reset') => void
}

export function ButtonAreaOfCounter(props: ButtonAreaOfCounterPropsType) {

     let buttonIndicator = useSelector<AppStateType,boolean>(state => state.counterState.buttonIndicator)
    let counter = useSelector<AppStateType,number>(state => state.counterState.counter)
    let maxValue = useSelector<AppStateType,number>(state => state.counterState.maxInputValue)

    return (
        <div className={s.buttonBlock}>
            <Button
                name={'inc'}
                callBack={() => props.callBack('inc')}
                disabled={counter === maxValue ? true : !buttonIndicator}
            />
            <Button
                name={'reset'}
                callBack={() => props.callBack('reset')}
                disabled={!buttonIndicator}
            />
        </div>
    )
}