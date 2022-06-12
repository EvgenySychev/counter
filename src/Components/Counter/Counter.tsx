import React from "react";
import s from "./Counter.module.css"
import {Display} from "./Display/Display";
import {ButtonAreaOfCounter} from "./ButtonAreaOfCounter/ButtonAreaOfCounter";

export function Counter() {

    return (
        <div className={s.counter}>
            <div>
                <Display/>
            </div>
            <div>
                <ButtonAreaOfCounter/>
            </div>

        </div>
    )
}