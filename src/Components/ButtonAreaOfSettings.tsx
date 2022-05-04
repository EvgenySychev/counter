import {Button} from "./Button";
import s from "./ButtonAreaOfSettings.module.css"

type ButtonAreaOfSettingsPropsType = {
    setButton: () => void
    buttonIndicator:boolean
}

export function ButtonAreaOfSettings (props:ButtonAreaOfSettingsPropsType) {
    const setButtonHandler= () => {
        props.setButton()
    }

    return (
        <div className={s.buttonArea}>
            <Button name={'set'} callBack={setButtonHandler} disabled={props.buttonIndicator}/>
        </div>
    )
}