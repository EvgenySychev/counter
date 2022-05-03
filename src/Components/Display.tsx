import React from 'react';
import s from "./Display.module.css"

type DisplayPropsType = {
    counter: number
    maxValue:number
    setButtonIndicator:boolean
}

export function Display(props: DisplayPropsType) {

    return (
        <div className={s.display}>
            <div className={props.counter === props.maxValue ? s.error : ''}>
                {props.counter}

            </div>
        </div>
    )
}
