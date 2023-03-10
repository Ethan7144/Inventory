import { useState } from 'react'
import './Item.css'

function StackingItem(props)
{
    const [itemNum, setItemCount] = useState(0);

    function incrementItem(){
        setItemCount(itemNum + 1);
    }
    function decreaseItem(){
        if(itemNum - 1 >= 0)
        setItemCount(itemNum - 1);
    }

    const itemNameClass = itemNum === 0 ? "stacking-item-name-disabled" : "stacking-item-name";

    return (
      <div className="stacking-item-box">
        <p className={itemNameClass}>{props.name}</p>
        <p className="stacking-item-count">{itemNum}</p>
        <div>
          <button onClick={incrementItem}>+</button>
          <button onClick={decreaseItem}>-</button>
        </div>
      </div>
    );
  }
  

export default StackingItem