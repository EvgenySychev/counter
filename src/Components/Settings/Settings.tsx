import {BlockOfSettings} from "./BlockOfSettings/BlockOfSettings";
import {ButtonAreaOfSettings} from "./ButtonAreaOfSettings/ButtonAreaOfSettings";
import s from "./Settings.module.css"

export function Settings() {

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