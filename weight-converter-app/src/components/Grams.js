import React from "react";
import classes from "../mojeStyle.module.css";


export const Grams = (props) => {
    return (
        <div className={classes.grams}>  
            <b>Grams:</b>
            <span className={classes.howMany}>{(Number(props.howManyGrams) * 453.6).toFixed(4)}</span>
        </div>
    )
}