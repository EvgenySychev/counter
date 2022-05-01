import s from "./BlockOfSettings.module.css"

export function BlockOfSettings() {
    return (
        <div className={s.display}>
            <div>
            <span>
                max value
                </span>
                <input type={"number"}/>
            </div>
            <div>
                <span>
                start value
                </span>
                <input type={"number"}/>
            </div>
        </div>
    )
}