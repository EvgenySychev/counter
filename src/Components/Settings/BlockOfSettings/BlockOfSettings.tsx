import s from "./BlockOfSettings.module.css"
import {Input} from "../../UniversalComponents/Input";

type BlockOfSettingsPropsType = {
    callBackMaxValue: (maxInputValue: string) => void
    callBackStartValue: (startInputValue: string) => void
    startInputValue: number
    maxInputValue: number
}

export function BlockOfSettings(props: BlockOfSettingsPropsType) {

    let strStartInputValue = JSON.stringify(props.startInputValue)
    let strMaxInputValue = JSON.stringify(props.maxInputValue)

    return (
        <div className={s.blockOfSettings}>
            <div >
                <span>
                    max value
                </span>
                <Input
                    callBack={props.callBackMaxValue}
                    inputClass={props.maxInputValue <= props.startInputValue ? `${s.error}` : `${s.input}`}
                    value={strMaxInputValue}
                />
            </div>
            <div >
                <span>
                    start value
                </span>
                <Input
                    callBack={props.callBackStartValue}
                    inputClass={props.startInputValue < 0 ? `${s.error}` : `${s.input}`}
                    value={strStartInputValue}
                />
            </div>
        </div>
    )
}