
import {ChangeEvent} from "react";

type InputPropsType = {
    inputClass?: string
    callBack: (inputValue: string) => void
}

export function Input (props:InputPropsType) {
    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.callBack (e.currentTarget.value)
    }

    return (
        <input type={"number"} className={props.inputClass} onChange={onChangeInputHandler}/>
    )
}