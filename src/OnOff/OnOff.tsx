import React, {useState} from "react";

type OnOff = {
   // on: boolean
}

export const OnOff = (props: OnOff) => {

    let [on, setOn] = useState(true)

    const On = {
        width: "60px",
        height: "20px",
        paddingBottom: "5px",
        margin: "10px",
        display: "inline-block",
        backgroundColor: on ? "green" : "white",
        border: "1px solid black"
    }
    const Off = {
        width: "60px",
        height: "20px",
        paddingBottom: "5px",
        margin: "10px",
        display: "inline-block",
        backgroundColor: !on ? "red" : "white",
        border: "1px solid black"
    }


    const onClicked = ()=> {
        setOn(true)
    }
    const offClicked = ()=> {
        setOn( false)
    }

    return (
        <div>
            <div style={On} onClick={onClicked}>On
            </div>
            <div style={Off} onClick={offClicked}>Off
            </div>
        </div>
    )
}
