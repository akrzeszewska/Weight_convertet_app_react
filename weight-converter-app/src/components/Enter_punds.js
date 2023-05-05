import { useState } from "react";
import React from "react";
import { Grams } from "./Grams";
import { Kilograms } from "./Kilograms";
import { Ounces } from "./Ounces";
import { WeightConverterHeader } from "./Weight_Converter";
import classes from "../mojeStyle.module.css";

const mojePropsy = (props) => {

}

export const EnterPunds = () => {
    const [myInput, setMyInput] = useState ("");

    return (
    <div className={classes.contener}>
        <WeightConverterHeader />
        <input
        className={classes.myInput}
        placeholder="Enter punds"
        type='text'
        value={myInput}
        onChange = {(event) => {
            setMyInput(event.target.value)
        }}
        />
        <Grams howManyGrams={myInput} /> 
        <Kilograms howManyKilograms={myInput} />
        <Ounces howManyOunces={myInput} />

    </div>
    );
}