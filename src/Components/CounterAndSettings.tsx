import {SettingsOfCounter} from "./SettingsOfCounter";
import {Counter} from "./Counter";
import React from "react";
import s from "./CounterAndSettings.module.css"


export function CounterAndSettings () {
    return (
        <div className={s.counterAndSettings}>
            <SettingsOfCounter/>
            ============================
            <Counter/>
        </div>
    )
}