import React from "react";
import classes from "../mojeStyle.module.css";


export const Kilograms = (props) => {
    return (
        <div className={classes.kilograms}>
        <b>Kilograms:</b>
        <span className={classes.howMany}> {(Number(props.howManyKilograms) * 0.4536).toFixed(4)} </span>
        </div>
    );
}