import './App.css';
import { useState } from 'react';
import gameData from './gameData.json';
import GameMenu from './GameMenu';
import ItemList from './ItemList';

function App() {
  let gameNames = []

  gameData.forEach((game => {
    gameNames.push(game.gameName)
  }))
  
  const [currentGame, setCurrentGame] = useState(gameNames[0])
  const [resetTrigger, setResetTrigger] = useState(0)

  const onChangeCurrentGame = (event) => {
    setCurrentGame(event.target.value)
  }

  const onReset = (event) => {
    setCurrentGame(gameNames[0])
    setResetTrigger(resetTrigger + 1)
  }

  return (
    <div> 
      <h1 className='App'> Homework 4 </h1>
      <p className='App'> Game Inventory Tracker </p>

      <div className='App'>
        <label for="game-menu"> Choose game: </label>
        <GameMenu 
          data={gameData} 
          onChange={onChangeCurrentGame} 
        />
      </div>
      <ItemList gameData={gameData.filter(game => game.gameName === currentGame)} 
      gameName = {currentGame}/>

      <div className='button-container'>
        <button 
          className="button" 
          onClick={onReset} 
          type ="submit"> 
          Reset 
        </button>

      </div>
    </div>
  );
}

export default App;
