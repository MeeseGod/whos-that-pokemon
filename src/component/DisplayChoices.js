import { useEffect, useState } from "react";
import "../style/displayChoices.css";

export default function DisplayChoices(props){

    const [randomPokemon, setRandomPokemon] = useState([]);

    function checkForBorder(){
        // Change x and y values for display only IF the numbers would push the choice display over the border
    }

    function checkChoice(){

    }

    function mapPokemon(){
        if(props.randomPokemon){
            let tempArray = []
            props.randomPokemon.forEach(element => {
                tempArray.push(element.data());
            });
            return tempArray.map(pokemon => {
                return <div key={pokemon.name}>
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