import {SettingsOfCounter} from "./SettingsOfCounter";
import {Counter} from "./Counter";
import React, {useState} from "react";
import s from "./CounterAndSettings.module.css"


export function CounterAndSettings() {

    let maxValue = 0
    let startValue = 0
    let setButtonIndicator = false
    const [counter, setCounter] = useState<number>(startValue)
    const [maxInputValue, setMaxInputValue] = useState(0)
    const [startInputValue, setStartInputValue] = useState(0)

    /*const setToLocalStorage = () => {
        localStorage.setItem('startValue',JSON.stringify(startInputValue))
        localStorage.setItem('maxValue',JSON.stringify(maxInputValue))
    }
    const getToLocalStorage = () => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            let newValue = JSON.parse(startValueAsString)
            setStartInputValue(newValue)
        }
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newValue = JSON.parse(maxValueAsString)
            setMaxInputValue(newValue)
        }
    }*/
    const callBackMaxValue = (max: string) => {
        maxValue = Number(max)
        console.log('max' + max)
    }
    const callBackStartInputValue = (start: string) => {
        startValue = Number(start)
        console.log('start' + start)
    }
    const setValue = () => {
        setMaxInputValue(maxValue)
        setStartInputValue(startValue)
        setButtonIndicator = true
        setCounter(startValue)
        //setToLocalStorage()
    }
    const setCounterHandler = (c:number) => {
        setCounter(c)
    }
    //getToLocalStorage()

    return (
        <div className={s.counterAndSettings}>
            <SettingsOfCounter
                setValue={setValue}
                callBackMaxValue={callBackMaxValue}
                startInputValue={callBackStartInputValue}/>
            ============================
            <Counter
                counter={counter}
                maxValue={maxInputValue}
                startValue={startInputValue}
                setCounter={setCounterHandler}
                setButtonIndicator ={setButtonIndicator}
            />
        </div>
    )
}