import React from 'react';
import bug from "../../assets/types/bug.png";
import dark from "../../assets/types/dark.svg";
import dragon from "../../assets/types/dragon.png";
import electric from "../../assets/types/electric.svg";
import fairy from "../../assets/types/fairy.svg";
import fighting from "../../assets/types/fighting.svg";
import fire from "../../assets/types/fire.png";
import flying from "../../assets/types/flying.png";
import ghost from "../../assets/types/ghost.png";
import grass from "../../assets/types/grass.png";
import ground from "../../assets/types/ground.svg";
import ice from "../../assets/types/ice.svg";
import normal from "../../assets/types/normal.svg";
import poison from "../../assets/types/poison.svg";
import psychic from "../../assets/types/psychic.svg";
import rock from "../../assets/types/rock.svg";
import steel from "../../assets/types/steel.svg";
import water from "../../assets/types/water.svg";

// Mapping type names to their respective image paths
const typeImages = {
    bug,
    dark,
    dragon,
    electric,
    fairy,
    fighting,
    fire,
    flying,
    ghost,
    grass,
    ground,
    ice,
    normal,
    poison,
    psychic,
    rock,
    steel,
    water
};

export const pokemonTypesData = {
    bug: {
        image: [bug],
        strength: [grass, psychic, dark],
        weakness: [fighting, flying, poison, ghost, steel, fire, fairy],
        resistance: [fighting, ground, grass],
        vulnerable: [flying, rock, fire],
    },
    dark: {
        image: [dark],
        strength: [ghost, psychic],
        weakness: [fighting, dark, fairy],
        resistance: [ghost, psychic, dark],
        vulnerable: [fighting, bug, fairy],
    },
    dragon: {
        image: [dragon],
        strength: [dragon],
        weakness: [steel, fairy],
        resistance: [fire, water, grass, electric],
        vulnerable: [ice, dragon, fairy],
    },
    electric: {
        image: [electric],
        strength: [flying, water],
        weakness: [ground, grass, electric, dragon],
        resistance: [flying, steel, electric],
        vulnerable: [ground],
    },
    fairy: {
        image: [fairy],
        strength: [fighting, dragon, dark],
        weakness: [poison, steel, fire],
        resistance: [fighting, bug, dragon, dark],
        vulnerable: [poison, steel],
    },
    fighting: {
        image: [fighting],
        strength: [normal, rock, steel, ice, dark],
        weakness: [flying, poison, psychic, bug, ghost, fairy],
        resistance: [rock, bug, dark],
        vulnerable: [flying, psychic, fairy],
    },
    fire: {
        image: [fire],
        strength: [bug, steel, grass, ice],
        weakness: [rock, fire, water, dragon],
        resistance: [bug, steel, fire, grass, ice],
        vulnerable: [ground, rock, water],
    },
    flying: {
        image: [flying],
        strength: [fighting, bug, grass],
        weakness: [rock, steel, electric],
        resistance: [fighting, ground, bug, grass],
        vulnerable: [rock, electric, ice],
    },
    ghost: {
        image: [ghost],
        strength: [ghost, psychic],
        weakness: [normal, dark],
        resistance: [normal, fighting, poison, bug],
        vulnerable: [ghost, dark],
    },
    grass: {
        image: [grass],
        strength: [ground, rock, water],
        weakness: [flying, poison, bug, steel, fire, grass, dragon],
        resistance: [ground, water, grass, electric],
        vulnerable: [flying, poison, bug, fire, ice],
    },
    ground: {
        image: [ground],
        strength: [poison, rock, steel, fire, electric],
        weakness: [flying, bug, grass],
        resistance: [poison, rock, electric],
        vulnerable: [water, grass, ice],
    },
    ice: {
        image: [ice],
        strength: [flying, ground, grass, dragon],
        weakness: [steel, fire, water, ice],
        resistance: [ice],
        vulnerable: [fighting, rock, steel, fire],
    },
    normal: {
        image: [normal],
        strength: [],
        weakness: [rock, ghost, steel],
        resistance: [ghost],
        vulnerable: [fighting],
    },
    poison: {
        image: [poison],
        strength: [grass, fairy],
        weakness: [poison, ground, rock, ghost, steel],
        resistance: [fighting, poison, grass, fairy],
        vulnerable: [ground, psychic],
    },
    psychic: {
        image: [psychic],
        strength: [fighting, poison],
        weakness: [steel, psychic, dark],
        resistance: [fighting, psychic],
        vulnerable: [bug, ghost, dark],
    },
    rock: {
        image: [rock],
        strength: [flying, bug, fire, ice],
        weakness: [fighting, ground, steel],
        resistance: [normal, flying, poison, fire],
        vulnerable: [fighting, ground, steel, water, grass],
    },
    steel: {
        image: [steel],
        strength: [rock, ice, fairy],
        weakness: [steel, fire, water, electric],
        resistance: [
            normal, flying, poison, rock, bug, steel, grass, psychic, ice, dragon, fairy,
        ],
        vulnerable: [fighting, ground, fire],
    },
    water: {
        image: [water],
        strength: [ground, rock, fire],
        weakness: [water, grass, dragon],
        resistance: [steel, fire, water, ice],
        vulnerable: [grass, electric],
    },
};



function PokemonTypes({ type }) {
    const image = typeImages[type]

    return (
        <div>
            {image ? (
                <img className='h-12' src={image} alt={type} />
            ) : (
                <p>Type not found</p>
            )}
        </div>
    );
}

export default PokemonTypes;
