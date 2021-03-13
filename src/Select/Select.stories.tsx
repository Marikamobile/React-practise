import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react/types-6-0";
import {Selectik, SelectPropsType} from "./Select";

const callback = action('accordion is clicked')

export default {
    title: 'Select',
    component: Selectik,

}

const Template: Story<SelectPropsType> = (args) => <Selectik {...args}/>

/*export const CollapsedAccordion2 = Template.bind({});
CollapsedAccordion2.args = {

}*/


export const SelWthValue: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState<string>('2')
    return <Selectik {...args} value={value} onChange={setValue}/>

}

SelWthValue.args = {
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Madrid'},
    ],
    value: '1'
}
export const SelNOTwthValue: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState<string|null>(null)
    return <Selectik {...args} value={value} onChange={setValue}/>

}
SelNOTwthValue.args = {
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Madrid'},
    ],
}





