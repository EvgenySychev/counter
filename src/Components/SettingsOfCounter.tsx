import {BlockOfSettings} from "./BlockOfSettings";
import {ButtonAreaOfSettings} from "./ButtonAreaOfSettings";
import s from "./SettingsOfCounter.module.css"

type SettingsOfCounterPropsType = {
    callBackMaxValue: (maxInputValue: string) => void
    startInputValue: (startInputValue: string) => void
    setValue: () => void
}

export function SettingsOfCounter(props: SettingsOfCounterPropsType) {

    return (
        <div className={s.settingsOfCounter}>
            <div>
                <BlockOfSettings
                    callBackMaxValue={props.callBackMaxValue}
                    callBackStartValue={props.startInputValue}
                />
            </div>
            <div className={s.buttonAreaOfSettings}>
                <ButtonAreaOfSettings setButton={props.setValue}/>
            </div>
        </div>
    )
}