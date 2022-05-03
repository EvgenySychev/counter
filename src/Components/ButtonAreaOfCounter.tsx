import s from "./Counter.module.css";
import {Button} from "./Button";
import React from "react";


type ButtonAreaOfCounterPropsType = {
    counter: number
    maxValue: number
    startValue:number
    callBack: (nameOfButton:'inc'|'reset')=> void
    }

export function ButtonAreaOfCounter (props:ButtonAreaOfCounterPropsType) {



    return (
        <div className={s.buttonBlock}>
            <Button name={'inc'} callBack={() => props.callBack('inc')} disabled={props.counter === props.maxValue}/>
            <Button name={'reset'} callBack={() => props.callBack('reset')} disabled={props.counter === props.startValue}/>
        </div>
    )
}