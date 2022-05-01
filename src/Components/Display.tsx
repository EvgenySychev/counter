import React from 'react';
import s from "./Display.module.css"

type DisplayPropsType = {
    counter: number
}

export function Display(props: DisplayPropsType) {
    return (
        <div className={s.display}>
            <div className={props.counter === 5 ? s.error : ''}>{props.counter}</div>
        </div>
    )
}