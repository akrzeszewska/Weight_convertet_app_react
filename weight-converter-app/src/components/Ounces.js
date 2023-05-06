import React from "react";
import classes from "../mojeStyle.module.css";


export const Ounces = (props) => {
    return (
    <div className={classes.ounces}>
    <b>Ounces: </b>
    <span className={classes.howMany}> {(Number(props.howManyOunces) * 16).toFixed(4)} </span>
    </div> 
    );
}