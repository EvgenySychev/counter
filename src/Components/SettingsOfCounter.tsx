import {BlockOfSettings} from "./BlockOfSettings";
import {ButtonAreaOfSettings} from "./ButtonAreaOfSettings";
import s from "./SettingsOfCounter.module.css"

type SettingsOfCounterPropsType = {
    callBackMaxValue: (maxInputValue: string) => void
    callBackStartValue: (startInputValue: string) => void
    setValue: () => void
    buttonIndicator:boolean
    startInputValue:number
    maxInputValue:number
}

export function SettingsOfCounter(props: SettingsOfCounterPropsType) {

    return (
        <div className={s.settingsOfCounter}>
            <div>
                <BlockOfSettings
                    callBackMaxValue={props.callBackMaxValue}
                    callBackStartValue={props.callBackStartValue}
                    startInputValue={props.startInputValue}
                    maxInputValue={props.maxInputValue}
                />
            </div>
            <div className={s.buttonAreaOfSettings}>
                <ButtonAreaOfSettings setButton={props.setValue}
                                      buttonIndicator={props.buttonIndicator}/>
            </div>
        </div>
    )
}