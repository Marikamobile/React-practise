import React, {useState} from "react";

type OnOff = {
    on: boolean
    onChange?: () => void
}

export const ControledOnOff = (props: OnOff) => {

    const On = {
        width: "60px",
        height: "20px",
        paddingBottom: "5px",
        margin: "10px",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "white",
        border: "1px solid black"
    }
    const Off = {
        width: "60px",
        height: "20px",
        paddingBottom: "5px",
        margin: "10px",
        display: "inline-block",
        backgroundColor: !props.on ? "red" : "white",
        border: "1px solid black"
    }


    return (
        <div>
            <div style={On} onClick={
                props.onChange
            }>On
            </div>
            <div style={Off} onClick={
                props.onChange}>Off
            </div>
        </div>
    )
}
