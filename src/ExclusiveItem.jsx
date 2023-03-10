import { useEffect, useState } from 'react'
import './Item.css'

import React from "react";

function ExclusiveItem(props) {
    const itemName = props.name
    const [variant, setVariant] = useState(itemName)

    const listEX = props.data

    const onVariationChange = (event) => {
        setVariant(event.target.value)
        if(event.target.value === "None"){
            setVariant(itemName)
            event.target.parentNode.classList.add("none-selected");
        } else {
            event.target.parentNode.classList.remove("none-selected");
        }
    }


    return(
        <div className='item exclusive-item'>
            <h1>{variant}</h1>
            <ExclusiveSelect onChange = {onVariationChange}  options = {listEX}/>
        </div>
    )
}

export default ExclusiveItem;

function ExclusiveSelect(props){
    return(
        <select onChange = {props.onChange}>
            {props.options.map(option => <option key={option} value={option}> {option} </option>)}
            <option> None </option>
        </select>
    )
}