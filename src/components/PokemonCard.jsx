import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {

    return (
        <figure>{pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={"pokemon.name"} />) : (<p>???</p>)}
            <figcaption>{pokemon.name}</figcaption>
        </figure>

    );
}

PokemonCard.propType = {
    pokemon: PropTypes.shape.is.Required({
    name: PropTypes.string,
    imgSrc: PropTypes.string, 
   
    })is.Required
}

export default PokemonCard;