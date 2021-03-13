import React, {useState, KeyboardEvent, useEffect} from "react";
import c from './Select.module.css';

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Selectik(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hovered, setHovered] = useState(props.value)
    const selecItem = (value: any) => {
        props.onChange(value);
        toggleItems();
    }
    const toggleItems = () => setActive(!active)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hovered)
    useEffect(() => {
        setHovered(props.value)
    }, [props.value])
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        debugger
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItem) {
                    const pretendentEl = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1];
                     if (pretendentEl) {
                         props.onChange(pretendentEl.value)
                         return;
                     }
                }

            }
            if(!selectedItem) {
                props.onChange(props.items[0].value)
            }

        }
        else if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false);
        }
    }


    return (

        <div className={`${c.select}`} onKeyDown={onKeyUp} tabIndex={0}>
            <span className={c.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {active &&
            <div className={`${c.items}`}>
                {props.items.map(it => <div
                    onMouseEnter={() => {
                        setHovered(it.value)
                    }}
                    className={`${c.item} ${hoveredItem === it ? c.selected : ''}`}
                    key={it.value}
                    onClick={() => {
                        selecItem(it.value)
                    }}>
                    {it.title}
                </div>)}
            </div>}
        </div>
    )
}