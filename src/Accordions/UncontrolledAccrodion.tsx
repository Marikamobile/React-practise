import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState<boolean>(false);
    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => {
            setCollapsed(!collapsed)
        }}/>
        {!collapsed && <AccordionBody/>}
    </div>


}

type AccordionTitleType = {
    title: string
    onClick: () => void
}

export function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={()=>{props.onClick()}}>--- {props.title} ---</h3>
    )
}

export function AccordionBody() {
    return (
        <ul>
            <li>123</li>
            <li>321</li>
            <li>213</li>
        </ul>
    )

}