import {db} from "./firebase"
import {collection, getDocs} from "firebase/firestore"
import { useEffect, useState } from "react"

import PokemonDisplay from "../src/component/PokemonDisplay";


export default function App() {
  const [randomPokemon, setRandomPokemon] = useState([]);

  function randomizePokemon(pokemon){
    let tempArray = [];
    pokemon.forEach(element => {
      tempArray.push(element.data());
    });

    for (let i = tempArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
    }
    tempArray = tempArray.slice(0, 3);
    // console.log(tempArray)
    setRandomPokemon(tempArray)
  }

  useEffect(() => {
    const pokemonCollection = collection(db, "pokemon")
    const getPokemon = async () => {
      const pokemon = await getDocs(pokemonCollection);
      randomizePokemon(pokemon);
    }
    getPokemon()
  }, [])

  return (
    <div className="App">
      <h1>Where's That Pokemon?</h1>
      <button onClick={()=>{console.log(randomPokemon)}}></button>
      <PokemonDisplay randomPokemon = {randomPokemon}/>
    </div>
  );
}