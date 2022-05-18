import {Settings} from "./Settings/Settings";
import {Counter} from "./Counter/Counter";
import React, {useEffect, useState} from "react";
import s from "./CounterAndSettings.module.css"


export function CounterAndSettings() {

    const [maxInputValue, setMaxInputValue] = useState<number>(0)
    const [startInputValue, setStartInputValue] = useState<number>(0)
    const [counter, setCounter] = useState<number>(0)
    const [buttonIndicator, setButtonIndicator] = useState<boolean>(true)

    useEffect(() => {
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
        let counterAsString = localStorage.getItem('startValue')
        if (counterAsString) {
            let newValue = JSON.parse(counterAsString)
            setCounter(newValue)
        }
    }, [])

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
        setButtonIndicator(true)
        setCounter(startInputValue)
        localStorage.setItem('maxValue', JSON.stringify(maxInputValue))
        localStorage.setItem('startValue', JSON.stringify(startInputValue))
    }
    const setCounterHandler = (c: number) => {
        setCounter(c)
    }

    const noticeMessage = (start: number, max: number) => {
        let err: boolean
        if (max <= start) {
            err = true
        } else {
            err = start < 0;
        }

        return err
    }
    let error = noticeMessage(startInputValue, maxInputValue)


    return (
        <div className={s.counterAndSettings}>
            <Settings
                setValue={setValue}
                callBackMaxValue={callBackMaxValue}
                callBackStartValue={callBackStartInputValue}
                buttonIndicator={buttonIndicator}
                startInputValue={startInputValue}
                maxInputValue={maxInputValue}
                error={error}
            />
            <Counter
                counter={counter}
                maxValue={maxInputValue}
                startValue={startInputValue}
                setCounter={setCounterHandler}
                buttonIndicator={buttonIndicator}
                error={error}
            />
        </div>
    )
}