import { useState } from "react";
import PokemonCard from "./components/PokemonCard"



function App() {
  const [pokemonIndex,setPokemonIndex] = useState(0);

  const handleClickPast = () => {
    if (pokemonIndex > 0){
      setPokemonIndex(pokemonIndex -1);
    }
  };

  const handleClickNext = () => {
    if (pokemonIndex < pokemonList.length - 1){
      setPokemonIndex(pokemonIndex +1);
    }
    
  };
    
  console.log(pokemonIndex)

return (
  <div>
    <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    <button onClick={handleClickPast}>Précédent</button>
    <button onClick={handleClickNext}>Suivant</button>

  </div>
);

}
export default App;

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

