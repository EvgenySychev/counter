import {BlockOfSettings} from "./BlockOfSettings";
import {ButtonAreaOfSettings} from "./ButtonAreaOfSettings";
import s from "./SettingsOfCounter.module.css"

export function SettingsOfCounter() {
    return (
            <div className={s.settingsOfCounter}>
                <div>
                    <BlockOfSettings/>
                </div>
                <div className={s.buttonAreaOfSettings}>
                    <ButtonAreaOfSettings/>
                </div>
            </div>
    )
}