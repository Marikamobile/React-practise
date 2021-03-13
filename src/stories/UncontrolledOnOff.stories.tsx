import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {OnOff} from "../OnOff/OnOff";

export default {
    title: 'UncontrolledOnOff',
    component: OnOff
}
export const UncontrolledOnOffMode = () => <OnOff />
