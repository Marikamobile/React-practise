import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";

import {AccordionPropsType, ControlledAccordion} from "../Accordions/ControlledAccrodion";
import {Story} from "@storybook/react/types-6-0";

const callback = action('accordion is clicked')

export default {
    title: 'ControlledAccrodion',
    component: ControlledAccordion,
    argTypes: {
        color: {
            control: 'color'
        },
        onChange: {
            table: {
                category: 'Events'
            }
        },
    },
    args: {
        items: [
            {title:'Dimych', value:1},
            {title:'Olya', value:2},
            {title:'Artem', value:3},
            {title:'Victor', value:4},
        ]

    }


}

const Template: Story<AccordionPropsType> = (args) => <ControlledAccordion {...args}/>

export const CollapsedAccordion2 = Template.bind({});
const callbacksProps = {
    onChange: callback,

}
CollapsedAccordion2.args = {
    ...callbacksProps,
    collapsed: true,
    titleValue: "Collapsed Accordion",

}
export const UncollapsedAccordion = Template.bind({});
UncollapsedAccordion.args = {
    ...callbacksProps,
    collapsed: false,
    titleValue: "Uncollapsed Accordion",

}


export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <ControlledAccordion {...args} collapsed={value} onChange={() => {
        setValue(!value)
    }}/>

}
ModeChanging.args = {
    titleValue: 'ModeChanging',


}





