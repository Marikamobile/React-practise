import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";

import {UncontrolledAccordion} from "../Accordions/UncontrolledAccrodion";

export default {
    title: 'UncontrolledAccrodion',
    component: UncontrolledAccordion
}
const callback = action('accordion is clicked')
export const Accordion = () => <UncontrolledAccordion   titleValue="Collapsed Accordion"/>

