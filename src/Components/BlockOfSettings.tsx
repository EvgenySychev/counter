import s from "./BlockOfSettings.module.css"
import {Input} from "./Input";

type BlockOfSettingsPropsType = {
    callBackMaxValue: (maxInputValue:string) => void
    callBackStartValue: (startInputValue:string) => void
}

export function BlockOfSettings(props:BlockOfSettingsPropsType) {
    return (
        <div className={s.display}>
            <div>
                <span>
                    max value
                </span>
                <Input callBack={props.callBackMaxValue}/>
            </div>
            <div>
                <span>
                    start value
                </span>
                <Input callBack={props.callBackStartValue}/>
            </div>
        </div>
    )
}