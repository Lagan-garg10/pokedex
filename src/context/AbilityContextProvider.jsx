import React, { useState } from 'react'
import AbilityContext from './AbilityContext'

export default function AbilityContextProvider({children}) {
    const [abilityId, setAbilityId] = useState()
    const [selectedAbilityTab, setSelectedAbilityTab] = useState('description')
    var fullData = {abilityId, setAbilityId, selectedAbilityTab, setSelectedAbilityTab}
  return (
    <AbilityContext.Provider value={fullData}>
        {children}
    </AbilityContext.Provider>
  )
}
