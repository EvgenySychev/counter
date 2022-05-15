import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    name:string
    callBack: () => void
    disabled?: boolean
}

export const Button = (props:ButtonPropsType) => {

const onClickHandler = () => {
    props.callBack()
}
        return (
        <span>
            <button className={s.button} disabled={props.disabled} name={props.name} onClick={onClickHandler}> {props.name}</button>
        </span>

    )
}