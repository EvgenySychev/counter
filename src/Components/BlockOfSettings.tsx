import s from "./BlockOfSettings.module.css"
import {Input} from "./Input";
import {useState} from "react";

type BlockOfSettingsPropsType = {
    callBackMaxValue: (maxInputValue: string) => void
    callBackStartValue: (startInputValue: string) => void
    startInputValue: number
    maxInputValue: number
}

export function BlockOfSettings(props: BlockOfSettingsPropsType) {

    let [error, setError] = useState<string>('error')

    //props.startInputValue < 0 ? setError("error") : setError('')
    //props.startInputValue >= props.maxInputValue && props.maxInputValue < 0 ? setError("error") : setError('')

    return (
        <div className={s.display}>
            <div>
                <span>
                    max value
                </span>
                <Input callBack={props.callBackMaxValue} inputClass={error}/>
            </div>
            <div>
                <span>
                    start value
                </span>
                <Input callBack={props.callBackStartValue} inputClass={error}/>
            </div>
        </div>
    )
}