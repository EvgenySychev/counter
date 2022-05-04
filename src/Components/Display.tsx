import React from 'react';
import s from "./Display.module.css"

type DisplayPropsType = {
    counter: number
    maxValue:number
    buttonIndicator:boolean
}

export function Display(props: DisplayPropsType) {

    return (
        <div className={s.display}>
            {props.buttonIndicator
                ? <div className={props.counter === props.maxValue ? s.error : ''}>
                    {props.counter}
                  </div>
                : <div className={s.startMessage}> "enter values and press 'set'" </div>
            }
         </div>
    )
}
