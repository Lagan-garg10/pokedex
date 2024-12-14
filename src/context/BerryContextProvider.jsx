import React,{useState} from 'react'
import berryContext from './BerryContext'
export default function BerryContextProvider({children}) {
const [selectedBerryId, setSelectedBerryId] = useState(1)
const data = {
    selectedBerryId,
    setSelectedBerryId
}
  return (
    <berryContext.Provider value={data}>
        {children}
    </berryContext.Provider>
  )
}
