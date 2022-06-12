import {Button} from "../../UniversalComponents/Button";
import s from "./ButtonAreaOfSettings.module.css"
import {useDispatch, useSelector} from "react-redux";
import {setValueAC} from "../../../Redux/counter-reduser";
import {AppStateType} from "../../../Redux/store";

export function ButtonAreaOfSettings () {

    let buttonIndicator = useSelector<AppStateType,boolean>(state => state.counterState.buttonIndicator)
    let error = useSelector<AppStateType,boolean>(state => state.counterState.error)
    const dispatch = useDispatch()

    return (
        <div className={s.buttonArea}>
            <Button name={'set'} callBack={() => dispatch(setValueAC())} disabled={error || buttonIndicator}/>
        </div>
    )
}