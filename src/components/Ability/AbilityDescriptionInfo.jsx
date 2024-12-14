import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function AbilityDescriptionInfo({abilityId}) {
    const [abilityName, setAbilityName] = useState('');
    const [abilityEffect, setAbilityEffect] = useState('');
    const [abilityGeneration, setAbilityGeneration] = useState('');
    const [generationDescription, setGenerationDescription] = useState([]);
    async function fetchData() {
        var full_flavor_text_entries_arr = [];
        var url = `https://pokeapi.co/api/v2/ability/${abilityId}`;
        var res = await axios.get(url);
        setAbilityName(res.data.name);
        setAbilityEffect(res.data.effect_entries[1].effect);
        setAbilityGeneration(res.data.generation.name);
        res.data.flavor_text_entries.forEach(element => {
            if (element.language.name === 'en') {
                var flavor_text_entriesObject = {
                    flavor_text: element.flavor_text,
                    version_name: element.version_group.name
                };
                full_flavor_text_entries_arr.push(flavor_text_entriesObject);
            }
        });
        setGenerationDescription(full_flavor_text_entries_arr);
    }

    useEffect(() => {
        fetchData();
    }, [abilityId]);
    return (
        <div className="max-h-[80vh] overflow-y-scroll text-white p-6 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-yellow-400 mb-4">{abilityName}</h1>
            <h4 className="text-lg font-semibold text-gray-300 mb-6">{abilityEffect}</h4>
            <h2 className="text-xl font-medium text-gray-200 mb-4">{abilityGeneration}</h2>

            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Game Descriptions</h2>
            <ul className="space-y-4">
                {generationDescription.map((element, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out"
                    >
                        <span className="text-yellow-300 font-semibold text-lg">{element.version_name}</span>
                        <span className="text-sm text-gray-100 italic">{element.flavor_text}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
