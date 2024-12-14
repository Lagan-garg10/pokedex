import React, { useContext} from 'react';
import abilityContext from '../../context/AbilityContext';
import AbilityDescriptionInfo from '../../components/Ability/AbilityDescriptionInfo';
import AbilityPokemonList from '../../components/Ability/AbilityPokemonList';

export default function AbilityDescription() {
    const {abilityId, selectedAbilityTab} = useContext(abilityContext);
    const AbilityTabs = {
        description:"description",
        pokemon:"pokemon"
      }

    return (
        <>
            {selectedAbilityTab===AbilityTabs.description&&<AbilityDescriptionInfo abilityId={abilityId}/>}
            {selectedAbilityTab===AbilityTabs.pokemon&&<AbilityPokemonList abilityId={abilityId}/>}
        </>
    )
}
