import React, {useState} from 'react';
import './App.css';
import {RaitingValueType, Rating} from "./Raitings/Rating";
import {UncontrolledRating} from "./Raitings/UncontrolledRating";
import {UncontrolledAccordion} from "./Accordions/UncontrolledAccrodion";
import {OnOff} from "./OnOff/OnOff";
import {ControledOnOff} from "./OnOff/ControledOnOff";
import {ControlledAccordion} from "./Accordions/ControlledAccrodion";

function App() {
    return (
        <div className="App">
            <Star/>
        </div>
    );
}

function Star() {
    let [raitingValue, setRatingValue] = useState<RaitingValueType>(0);
    let [on, setOn] = useState<boolean>(true)
    let [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <div>
            <Rating value={raitingValue} onCLick={setRatingValue}/>
           <OnOff />
           <ControledOnOff onChange={()=>{setOn(!on)}} on={on}/>
        <UncontrolledAccordion titleValue={"Dunno"}/>
{/*        <ControlledAccordion  titleValue={"Dunno"} collapsed={collapsed} onChange={()=>{setCollapsed(!collapsed)}}/>*/}
        </div>
    )
}

function StarMenu() {
    console.log("StarMenu is rendering")
    return (
        <div>
            <div>There shoud be start</div>
            <div>There shoud be start</div>
            <div>There shoud be start</div>
            <div>There shoud be start</div>
        </div>
    )
}

function StarTitle() {
    console.log("StarTitle is rendering")
    return <h1>Menu</h1>
}

export default App;
