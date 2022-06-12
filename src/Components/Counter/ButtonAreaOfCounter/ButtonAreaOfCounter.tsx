import s from "../Counter.module.css";
import {Button} from "../../UniversalComponents/Button";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/store";
import {incValueAC, resetValueAC} from "../../../Redux/counter-reduser";

export function ButtonAreaOfCounter() {

    let buttonIndicator = useSelector<AppStateType,boolean>(state => state.counterState.buttonIndicator)
    let counter = useSelector<AppStateType,number>(state => state.counterState.counter)
    let maxValue = useSelector<AppStateType,number>(state => state.counterState.maxInputValue)
    let startValue = useSelector<AppStateType,number>(state => state.counterState.startInputValue)
    const dispatch = useDispatch()

    return (
        <div className={s.buttonBlock}>
            <Button
                name={'inc'}
                callBack={() => dispatch(incValueAC())}
                disabled={counter === maxValue ? true : !buttonIndicator}
            />
            <Button
                name={'reset'}
                callBack={() => dispatch(resetValueAC(startValue))}
                disabled={!buttonIndicator}
            />
        </div>
    )
}