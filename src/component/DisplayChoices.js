import { useEffect, useState } from "react";
import "../style/displayChoices.css";

export default function DisplayChoices(props){

    const [randomPokemon, setRandomPokemon] = useState([]);

    function checkForBorder(){
        // Change x and y values for display only IF the numbers would push the choice display over the border
    }

    function checkChoice(){

    }

    function test(){
        if(props.randomPokemon){
            return <div> Ahhh </div>
        }
        else return <div> Nope</div>
    }

    useEffect(() => {
        if(props.randomPokemon){
          props.randomPokemon.forEach(element => {
              console.log(element.data())
          });
        }
      })



    return (
        <div className="displayChoicesContainer" style={{left: `${props.xyValues[0]}%`, top: `${props.xyValues[1]}%`, visibility: props.choiceVisibility}}>
        {test()}
        </div>
    )
}