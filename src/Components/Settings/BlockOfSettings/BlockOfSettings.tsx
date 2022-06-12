import s from "./BlockOfSettings.module.css"
import {Input} from "../../UniversalComponents/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/store";
import {setErrorAC, setMaxInputValueAC, setStartInputValueAC, setToggleAC} from "../../../Redux/counter-reduser";

export function BlockOfSettings() {

    let startInputValue = useSelector<AppStateType,number>(state => state.counterState.startInputValue)
    let maxInputValue = useSelector<AppStateType,number>(state => state.counterState.maxInputValue)
    let toggle = useSelector<AppStateType,boolean>(state => state.counterState.toggle)
    const dispatch = useDispatch()

    let strStartInputValue = JSON.stringify(startInputValue)
    let strMaxInputValue = JSON.stringify(maxInputValue)

    dispatch(setErrorAC(startInputValue,maxInputValue,toggle))

    let inputClass:string = (maxInputValue <= startInputValue || startInputValue < 0) && toggle ? s.error : s.input

    return (
        <div className={s.blockOfSettings}>
            <div >
                <span>
                    max value
                </span>
                <Input
                    callBack={(inputValue: string) => {
                        dispatch(setMaxInputValueAC(inputValue))
                        dispatch(setToggleAC())}
                    }
                    inputClass={inputClass}
                    value={strMaxInputValue}
                />
            </div>
            <div >
                <span>
                    start value
                </span>
                <Input
                    callBack={(inputValue: string) => {
                        dispatch(setStartInputValueAC(inputValue))
                        dispatch(setToggleAC())}
                    }
                    inputClass={inputClass}
                    value={strStartInputValue}
                />
            </div>
        </div>
    )
}