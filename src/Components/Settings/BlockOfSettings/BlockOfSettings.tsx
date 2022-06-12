import s from "./BlockOfSettings.module.css"
import {Input} from "../../UniversalComponents/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/store";
import {setMaxInputValueAC, setStartInputValueAC} from "../../../Redux/counter-reduser";

type BlockOfSettingsPropsType = {
    //callBackMaxValue: (maxInputValue: string) => void
    //callBackStartValue: (startInputValue: string) => void
    //startInputValue: number
    //maxInputValue: number
}

export function BlockOfSettings(props: BlockOfSettingsPropsType) {

    let startInputValue = useSelector<AppStateType,number>(state => state.counterState.startInputValue)
    let maxInputValue = useSelector<AppStateType,number>(state => state.counterState.maxInputValue)
    const dispatch = useDispatch()


    let strStartInputValue = JSON.stringify(startInputValue)
    let strMaxInputValue = JSON.stringify(maxInputValue)

    return (
        <div className={s.blockOfSettings}>
            <div >
                <span>
                    max value
                </span>
                <Input
                    callBack={(inputValue: string) => dispatch(setMaxInputValueAC(inputValue))}
                    inputClass={maxInputValue <= startInputValue ? `${s.error}` : `${s.input}`}
                    value={strMaxInputValue}
                />
            </div>
            <div >
                <span>
                    start value
                </span>
                <Input
                    callBack={(inputValue: string) => dispatch(setStartInputValueAC(inputValue))}
                    inputClass={startInputValue < 0 ? `${s.error}` : `${s.input}`}
                    value={strStartInputValue}
                />
            </div>
        </div>
    )
}