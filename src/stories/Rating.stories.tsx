import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {RaitingValueType, Rating} from "../Raitings/Rating";

export default {
    title: 'Rating stories',
    component: Rating
}
export const EmptyRating = () => <Rating value={0} onCLick={x=>x}/>
export const Rating1 = () => <Rating value={1} onCLick={x=>x}/>
export const Rating2 = () => <Rating value={2} onCLick={x=>x}/>
export const Rating3 = () => <Rating value={3} onCLick={x=>x}/>
export const Rating4 = () => <Rating value={4} onCLick={x=>x}/>
export const Rating5 = () => <Rating value={5} onCLick={x=>x}/>
export const RatingChanging = () => {
   const [rating, setRating] = useState<RaitingValueType>(5)
   return <Rating value={rating} onCLick={setRating}/>
}