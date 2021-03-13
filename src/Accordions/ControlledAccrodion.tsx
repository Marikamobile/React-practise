import React, {useState} from "react";

type ItemType= {
    title: string
    value: any
}
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    color?: string
    items: ItemType[]
    onClick:(value:any)=>void
}


export function ControlledAccordion(props: AccordionPropsType ) {

    return <div>
        <AccordionTitle title={props.titleValue} color={props.color} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
    </div>


}

type AccordionTitleType = {
    title: string
    onChange: () => void
    color?: string
}

export function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 style={{color: props.color? props.color: 'black'}}
            onClick={(e) => {
            props.onChange()
        }}>--- {props.title} ---</h3>
    )
}
type AccordionBodyPropsType={
    items: ItemType[]
    onClick:(value:any)=>void
}
export function AccordionBody(props:AccordionBodyPropsType) {
    return <ul>
            {props.items.map((it,index)=><li
                onClick={()=>{props.onClick(it.value)}}
                key={index}>{it.title}</li>)}
        </ul>

}