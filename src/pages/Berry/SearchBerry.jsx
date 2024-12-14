import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import BerryCardGrid from '../../components/Berry/BerryCardGrid'
import berryContext from '../../context/BerryContext'
export default function SearchBerry() {
    const [fullData, setFullData] = useState([])
    const {setSelectedBerryId} = useContext(berryContext)
    async function fetchAllData(url) {
        var fullDataObj = {
            name: '',
            image: '',
            flavours: [],
            id: ''
        }
        var res = await axios.get(url)
        fullDataObj.name = res.data.name
        res.data.flavors.forEach(element => {
            if (element.potency > 0) {
                fullDataObj.flavours.push(element.flavor.name)
            }
        })
        var res1 = await axios.get(res.data.item.url)
        fullDataObj.image = res1.data.sprites.default
        fullDataObj.id = res.data.id
        setFullData(prev => [...prev, fullDataObj])
    }
    function BerryIdSet(id){
        setSelectedBerryId(id)
    }
    async function fetchUrl() {
        var res = await axios.get('https://pokeapi.co/api/v2/berry?offset=0&limit=64')
        res.data.results.forEach(element => {
            fetchAllData(element.url)
        })
    }
    useEffect(() => {
        fetchUrl()
    }, [])
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 p-4 max-h-[80vh] text-white overflow-y-scroll'>
            {
                fullData.map((element, index) => (
                    <BerryCardGrid BerryIdSet={BerryIdSet} data={element} key={index} value={element.id} />
                ))
            }
        </div>
    )
}
