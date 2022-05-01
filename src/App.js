import {db} from "./firebase"
import {collection, getDocs} from "firebase/firestore"
import { useEffect, useState } from "react"

import PokemonDisplay from "../src/component/PokemonDisplay";


export default function App() {
  const [pokemonDocs, setPokemonDocs] = useState();

  useEffect(() => {
    const pokemonCollection = collection(db, "pokemon")
    const getPokemon = async () => {
      const pokemon = await getDocs(pokemonCollection);
      setPokemonDocs(pokemon.docs)
    }
    getPokemon()
  }, [])

  return (
    <div className="App">
      <h1>Where's That Pokemon?</h1>
      <PokemonDisplay pokemonDocs = {pokemonDocs}/>
    </div>
  );
}