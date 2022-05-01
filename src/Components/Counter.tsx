import React, {useState} from "react";
import {Button} from "./Button";
import s from "./Counter.module.css"
import {Display} from "./Display";

export function Counter() {

    let [counter, setCounter] = useState<number>(0)

    const callBack = (nameOfButton: 'inc' | 'reset') => {

        if (counter < 5) {
            nameOfButton === 'inc' ? counter++ : counter = 0
           }

        if (nameOfButton === 'reset') {
            counter = 0
           }
        setCounter(counter)
    }
    return (
        <div className={s.counter}>
            <div>
                <Display counter={counter}/>
            </div>
            <div className={s.buttonBlock}>
                <Button name={'inc'} callBack={() => callBack('inc')} disabled={counter === 5}/>
                <Button name={'reset'} callBack={() => callBack('reset')} disabled={counter === 0}/>
            </div>
        </div>
    )
}