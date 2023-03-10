import { useEffect, useState } from 'react'
import './Item.css'

function BinaryItem(props)
{
    const ACTIVE = "binary-item-active"
    const DISABLED = "binary-item-disabled"
    const [toggleClass, setToggleClass] = useState(DISABLED)

    const onReset = () => {
        setToggleClass(DISABLED)
    }

    useEffect(() => {
        if(props.trigger) {
            onReset()
        }
    }, [props.trigger])
    
    const toggleBinaryItem = (event) => {
        if(toggleClass === DISABLED) {
            setToggleClass(ACTIVE)
        } else {
            setToggleClass(DISABLED)
        }
    }

    return(
       <div onClick={toggleBinaryItem} className = {toggleClass}>
        <p> {props.name} </p>
       </div>
    )
}

export default BinaryItem