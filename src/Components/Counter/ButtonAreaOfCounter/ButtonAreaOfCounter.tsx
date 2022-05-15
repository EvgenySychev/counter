import s from "../Counter.module.css";
import {Button} from "../../UniversalComponents/Button";
import React from "react";


type ButtonAreaOfCounterPropsType = {
    counter: number
    maxValue: number
    startValue:number
    buttonIndicator:boolean
    callBack: (nameOfButton:'inc'|'reset')=> void
    }

export function ButtonAreaOfCounter (props:ButtonAreaOfCounterPropsType) {



    return (
        <div className={s.buttonBlock}>
            <Button name={'inc'} callBack={() => props.callBack('inc')} disabled={props.counter===props.maxValue? true:  !props.buttonIndicator}/>
            <Button name={'reset'} callBack={() => props.callBack('reset')} disabled={!props.buttonIndicator}/>
        </div>
    )
}