import {BlockOfSettings} from "./BlockOfSettings/BlockOfSettings";
import {ButtonAreaOfSettings} from "./ButtonAreaOfSettings/ButtonAreaOfSettings";
import s from "./Settings.module.css"

type SettingsPropsType = {
    callBackMaxValue: (maxInputValue: string) => void
    callBackStartValue: (startInputValue: string) => void
    setValue: () => void
    buttonIndicator: boolean
    startInputValue: number
    maxInputValue: number
}

export function Settings(props: SettingsPropsType) {

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
                <ButtonAreaOfSettings
                    setButton={props.setValue}
                    buttonIndicator={props.buttonIndicator}/>
            </div>
        </div>
    )
}