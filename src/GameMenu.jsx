import {useState} from 'react';
import './App.css'; 

function GameMenu(props) {
    const {data, onChange} = props
    
    let options = []
    data.forEach((game) => {
        options.push(game.gameName)
    })

    const [gameName, setGameName] = useState(options[0])
    
    const onOptionChange = (event) => {
        setGameName(event.target.value)
        onChange(event);
    }

    return(
        <select onChange={onOptionChange} value={gameName}>
            {options.map(option => <GameMenuOption key={option} value={option}/>)}
        </select>
    )
}

export default GameMenu

function GameMenuOption(props) {
    return (
        <option key={props.value}> {props.value} </option>
    )
}