import {Button} from "./Button";
import s from "./ButtonAreaOfSettings.module.css"


export function ButtonAreaOfSettings () {
    const setButtonHandler= () => {
        console.log('set was pushed')
    }

    return (
        <div className={s.buttonArea}>
            <Button name={'set'} callBack={setButtonHandler}/>
        </div>
    )
}