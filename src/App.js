import {db} from "./firebase"
import {collection, getDocs} from "firebase/firestore"
import { useEffect, useState } from "react"

import PokemonDisplay from "../src/component/PokemonDisplay";


export default function App() {
  const [randomPokemon, setRandomPokemon] = useState([]);

  function randomizePokemon(pokemon){
    setRandomPokemon(pokemon)
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
      <PokemonDisplay randomPokemon = {randomPokemon}/>
    </div>
  );
}