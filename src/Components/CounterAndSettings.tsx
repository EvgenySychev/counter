import {Settings} from "./Settings/Settings";
import {Counter} from "./Counter/Counter";
import React from "react";
import s from "./CounterAndSettings.module.css"

export function CounterAndSettings() {

    return (
        <div className={s.counterAndSettings}>
            <Settings/>
            <Counter/>
        </div>
    )
}