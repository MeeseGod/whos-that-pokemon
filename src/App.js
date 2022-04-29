import {db} from "./firebase"
import {collection, getDocs} from "firebase/firestore"
import { useEffect } from "react"

import PokemonDisplay from "../src/component/PokemonDisplay";


function App() {

  const pokemonCollection = collection(db, "pokemon")

  useEffect(() => {
    const getPokemon = async () => {
      const pokemon = await getDocs(pokemonCollection);
      console.log(pokemon.docs[0].data())
    }
    getPokemon();
  }, [])

  function getClick(event){
    console.log(event.screenX, event.screenY)
  }

  return (
    <div className="App" onClick={(e) => getClick(e)}>
      Pokemon Project
      <PokemonDisplay/>
    </div>
  );
}

export default App;
