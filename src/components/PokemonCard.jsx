import PropTypes from "prop-types";

//Ajout de données : listes pokémon
const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },

  {
    name: "Dracofeu",
    imgSrc:
      "https://www.pokepedia.fr/images/thumb/1/17/Dracaufeu-RFVF.png/800px-Dracaufeu-RFVF.png",
  }
];
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,

  }).isRequired,
}

function PokemonCard() {
  const pokemonTrainer = "Laura";
  const pokemon = pokemonList[2];

  return (
    <>
      <h3>
        Hello <strong>{pokemonTrainer}</strong> trainer !

      </h3>
      <figure>
        {pokemon.imgSrc != null ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}

        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </>
  );
}

export default PokemonCard;
