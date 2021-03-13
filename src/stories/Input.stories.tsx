import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";
//import {Simulate} from "react-dom/test-utils";
//import input = Simulate.input;

export default {
    title: 'Input',
    //component: input,
}
export const UncontrolledInput = () => <input/>;
export const UncontrolledInputWithTrackValue = () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }
    return <><input value={value} onChange={onChange}/> - {value}</>
};
export const UncontrolledInputWithGetValue = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual
        value : {
            value
        }
    </>
};
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange =
        (event: ChangeEvent<HTMLInputElement>) => {
            setParentValue(event.currentTarget.value)
        }
    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true)
    const onChange =
        (event: ChangeEvent<HTMLInputElement>) => {
            setParentValue(event.currentTarget.checked)
        }
    return <input type='checkbox' checked={parentValue} onChange={onChange}/>
}
 export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined >('2')
     const onChange =
         (event: ChangeEvent<HTMLSelectElement>) => {
             setParentValue(event.currentTarget.value)
         }
     return <select value ={parentValue} onChange={onChange}>
         <option value={'1'}>none</option>
         <option value={'2'}>Minsk</option>
         <option value={'3'}>Moscow</option>
         <option value={'4'}>Kiev</option>
     </select>
 }
export const ControlledInputWithFixedValue = () => <input value={"It-incubator"}/>;