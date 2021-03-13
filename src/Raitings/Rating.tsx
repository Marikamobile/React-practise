import React, {useState} from 'react';

export type RaitingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RaitingValueType
    onCLick: (value: RaitingValueType) => void
}

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value > 0} onCLick={props.onCLick} value={1}/>
            <Star selected={props.value > 1} onCLick={props.onCLick} value={2}/>
            <Star selected={props.value > 2} onCLick={props.onCLick} value={3}/>
            <Star selected={props.value > 3} onCLick={props.onCLick} value={4}/>
            <Star selected={props.value > 4} onCLick={props.onCLick} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onCLick: (value: RaitingValueType) => void
    value: RaitingValueType
}

export function Star(props: StarPropsType) {
    return <span onClick={()=>{props.onCLick(props.value)}}>{props.selected ? <b>star </b> : "star "}</span>
}