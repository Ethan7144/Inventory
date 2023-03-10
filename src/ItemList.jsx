import { useState } from 'react'
import StackingItem from './StackingItem'
import ExclusiveItem from './ExclusiveItem'
import BinaryItem from './BinaryItem'
import { set } from 'mongoose'

function ItemList({ gameData, gameName }) {
  const [selectedGame, setSelectedGame] = useState(gameName)

  const handleGameChange = (event) => {
    setSelectedGame(event.target.value)
  }

  const itemData = gameData.find(game => game.gameName === gameName).items
  console.log(itemData);
  const itemComponents = itemData.map((item, index) => {
    console.log(gameData);
    switch(item.type) {
      case 'stacking':
        return <StackingItem key={index} name={item.name} />
      case 'exclusive':
        return <ExclusiveItem key={index} name={item.name} data={item.options} />
      case 'binary':
        return <BinaryItem key={index} name={item.name} />
      default:
        return null
    }
  })

  const rows = []
  for (let i = 0; i < itemComponents.length; i += 5) {
    rows.push(itemComponents.slice(i, i + 5))
  }

  const itemRows = rows.map((row, index) => (
    <div key={index} className="item-row">
      {row}
    </div>
  ))

  return (
    <div>
      {itemRows}
    </div>
  )
}

export default ItemList