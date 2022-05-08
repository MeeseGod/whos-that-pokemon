import { useEffect, useState } from "react";
import "../style/displayChoices.css";

export default function DisplayChoices(props){

    const [randomPokemon, setRandomPokemon] = useState([]);

    function checkForBorder(){
        // Change x and y values for display only IF the numbers would push the choice display over the border
    }

    function checkChoice(pokemon){
        console.log(pokemon)
        props.changeChoiceVisibility()
    }

    function mapPokemon(){
        if(props.randomPokemon){
            return props.randomPokemon.map(pokemon => {
                return <div key={pokemon.name} className="pokemonChoice" onClick={() => {checkChoice(pokemon)}}>
                    {pokemon.name}
                </div>
            })
        }
        else return null
    }

    return (
        <div className="displayChoicesContainer" style={{left: `${props.xyValues[0]}%`, top: `${props.xyValues[1]}%`, visibility: props.choiceVisibility}}>
        {mapPokemon()}
        </div>
    )
}