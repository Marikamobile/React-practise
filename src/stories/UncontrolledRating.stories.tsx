import React from 'react';
import {UncontrolledRating} from "../Raitings/UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
}

const callback = action('rating changed inside component')
export const UncontrRating = () => <UncontrolledRating defaultValue={0} onChange={callback}/>
