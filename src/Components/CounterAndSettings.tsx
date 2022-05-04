import {SettingsOfCounter} from "./SettingsOfCounter";
import {Counter} from "./Counter";
import React, {useEffect, useState} from "react";
import s from "./CounterAndSettings.module.css"


export function CounterAndSettings() {

    /*let maxValue = 0
    let startValue = 0*/
    const [counter, setCounter] = useState<number>(0)
    const [maxInputValue, setMaxInputValue] = useState<number>(0)
    const [startInputValue, setStartInputValue] = useState<number>(0)
    const [buttonIndicator,setButtonIndicator] = useState<boolean> (false)

    useEffect(()=>{
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
    },[])

    useEffect(()=>{
        localStorage.setItem('maxValue',JSON.stringify(maxInputValue))
        localStorage.setItem('startValue',JSON.stringify(startInputValue))
    },[startInputValue,maxInputValue])

    const callBackMaxValue = (max: string) => {
        let maxValue = Number(max)
        setMaxInputValue(maxValue)
        setButtonIndicator(false)
        }
    const callBackStartInputValue = (start: string) => {
        let startValue = Number(start)
        setStartInputValue(startValue)
        setButtonIndicator(false)
        }
    const setValue = () => {
        /*setMaxInputValue(maxValue)
        setStartInputValue(startValue)*/
        setButtonIndicator(true)
        setCounter(startInputValue)
        }
    const setCounterHandler = (c:number) => {
        setCounter(c)
    }

    return (
        <div className={s.counterAndSettings}>
            <SettingsOfCounter
                setValue={setValue}
                callBackMaxValue={callBackMaxValue}
                callBackStartValue={callBackStartInputValue}
                buttonIndicator={buttonIndicator}
                startInputValue={startInputValue}
                maxInputValue={maxInputValue}
            />
            ============================
            <Counter
                counter={counter}
                maxValue={maxInputValue}
                startValue={startInputValue}
                setCounter={setCounterHandler}
                buttonIndicator ={buttonIndicator}
            />
        </div>
    )
}