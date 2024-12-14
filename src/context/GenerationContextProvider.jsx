import React, {useState} from 'react'
import generationContext from './GenerationContext'
export default function GenerationContextProvider({children}) {
    const [generationId, setGenerationId] = useState()
    const [selectedGenerationTab, setSelectedGenerationTab] = useState('pokemon')
    var fullData = {generationId, setGenerationId, selectedGenerationTab, setSelectedGenerationTab}
  return (
    <generationContext.Provider value={fullData}>
        {children}
    </generationContext.Provider>
  )
}
