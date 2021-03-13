import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {ControledOnOff} from "../OnOff/ControledOnOff";

export default {
    title: 'OnOff',
    component: ControledOnOff
}
const callback = action('on or off clicked')
export const OnMode = () => <ControledOnOff on={true} onChange={callback}/>
export const OffMode = () => <ControledOnOff on={false} onChange={callback} />
export const ModeChanging = () => {
   const [value, setValue] = useState<boolean>(true)
   return <ControledOnOff on={value} onChange={()=>{setValue(!value)}}/>
}