import { useEffect, useState } from "react";
import DisplayChoices from "./DisplayChoices";
import "../style/pokemonDisplay.css";

export default function PokemonDisplay(props){

    const [xyValues, setxyValues] = useState([0, 0]);
    const [choiceVisibility, setChoiceVisibility] = useState("hidden");

    function changeChoiceVisibility(){
        if(choiceVisibility === "hidden"){setChoiceVisibility("visible")}
        else if(choiceVisibility === "visible"){setChoiceVisibility("hidden")}
    }

    function handleClick(event){
        // Calculating x and y by getting the percentage point of the click against the axis
        // So if the point were halfway through the x axis of the image, we calculate that its "50" every time regardless of what the width is set to
        // This means that pokemon are always in the same percentage position regardless of size change so long as image ratio is maintained
        const x = Math.round((event.nativeEvent.offsetX / event.target.width) * 100);
        const y = Math.round((event.nativeEvent.offsetY / event.target.height) * 100);
        setxyValues([x, y])
        changeChoiceVisibility();
        console.log(x, y)
      }

      useEffect(() => {
        if(props.randomPokemon){
          props.randomPokemon.forEach(element => {
              console.log(element.data())
          });
        }
      })


    return (
        <div className="pokemonDisplayContainer">
            <div className="mainImageContainer">
                <DisplayChoices xyValues = {xyValues} choiceVisibility = {choiceVisibility} randomPokemon = {props.randomPokemon}/>
                <img className="pokemonImage" alt="A large collage of Pokemon" src={require("../images/pokemonCollage.jpg")} onClick={(e) => {handleClick(e)}}/>
            </div>
        </div>
    )
}