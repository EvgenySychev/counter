import React from "react";
import s from "./Counter.module.css"
import {Display} from "./Display/Display";
import {ButtonAreaOfCounter} from "./ButtonAreaOfCounter/ButtonAreaOfCounter";

type CounterPropsType = {
    maxValue: number
    startValue: number
    counter: number
    setCounter: (counter: number) => void
    buttonIndicator: boolean
    error: boolean
}

export function Counter(props: CounterPropsType) {

    let counter = props.counter

    const callBack = (nameOfButton: 'inc' | 'reset') => {

        if (counter < props.maxValue) {
            nameOfButton === 'inc' ? counter++ : counter = props.startValue
        }

        if (nameOfButton === 'reset') {
            counter = props.startValue
        }
        props.setCounter(counter)
    }
//props.maxValue <= props.startValue ? setError(true) : ''
    //props.startValue <0 ? setError(true) : setError(false)

    return (
        <div className={s.counter}>
            <div>
                <Display
                    counter={props.counter}
                    maxValue={props.maxValue}
                    buttonIndicator={props.buttonIndicator}
                    error={props.error}
                />
            </div>
            <div>
                <ButtonAreaOfCounter
                    counter={props.counter}
                    maxValue={props.maxValue}
                    startValue={props.startValue}
                    callBack={callBack}
                    buttonIndicator={props.buttonIndicator}
                />
            </div>

        </div>
    )
}