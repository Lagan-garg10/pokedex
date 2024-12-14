import React, { useContext, useEffect, useState } from 'react'
import berryContext from '../../context/BerryContext'
import axios from 'axios'

export default function BerryDescription() {
  const { selectedBerryId } = useContext(berryContext)
  const [berryFirmness, setBerryFirmness] = useState('')
  const [growthTime, setGrowthTime] = useState()
  const [maxHarvest, setMaxHarvest] = useState()
  const [naturalGiftPower, setNaturalGiftPower] = useState()
  const [naturalGiftType, setNaturalGiftType] = useState('')
  const [size, setSize] = useState()
  const [smoothness, setSmoothness] = useState()
  const [soilDryness, setSoilDryness] = useState()
  const [berryImage, setBerryImage] = useState('')

  async function fetchData() {
    var res = await axios.get(`https://pokeapi.co/api/v2/berry/${selectedBerryId}`)
    setBerryFirmness(res.data.firmness.name)
    setGrowthTime(res.data.growth_time)
    setMaxHarvest(res.data.max_harvest)
    setNaturalGiftPower(res.data.natural_gift_power)
    setNaturalGiftType(res.data.natural_gift_type.name)
    setSize(res.data.size)
    setSmoothness(res.data.smoothness)
    setSoilDryness(res.data.soil_dryness)
    var res1 = await axios.get(res.data.item.url)
    setBerryImage(res1.data.sprites.default)
  }

  useEffect(() => {
    fetchData()
  }, [selectedBerryId])

  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="flex justify-between items-center w-full max-w-6xl px-4">

        <div className="w-1/3 shadow-lg p-6 rounded-lg bg-custom1">
          <h2 className="text-xl font-bold text-accent mb-4 text-center">Berry Details 1</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Firmness:</h3>
              <p className="text-md text-yellow-200">{berryFirmness}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Growth Time:</h3>
              <p className="text-md text-yellow-200">{growthTime} hours</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Max Harvest:</h3>
              <p className="text-md text-yellow-200">{maxHarvest}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Size:</h3>
              <p className="text-md text-yellow-200">{size} mm</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center h-80 w-80 border-[0.2rem] border-solid border-accent rounded-full relative">
          <div className="h-72 w-72 border-[0.3rem] border-solid border-accent rounded-full flex justify-center items-center">
            <img
              className="h-[15rem] z-[100]"
              src={berryImage}
              alt="Berry"
              crossOrigin="anonymous"
            />
          </div>
          <div className="absolute flex gap-12">
            <div className="h-[24rem] w-[0.3rem] bg-accent rotate-45"></div>
            <div className="h-[24rem] w-[0.3rem] bg-accent rotate-45"></div>
          </div>
        </div>

        <div className="w-1/3 bg-custom1 shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-bold text-accent mb-4 text-center">Berry Details 2</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Natural Gift Power:</h3>
              <p className="text-md text-yellow-200">{naturalGiftPower}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Natural Gift Type:</h3>
              <p className="text-md text-yellow-200">{naturalGiftType}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Smoothness:</h3>
              <p className="text-md text-yellow-200">{smoothness}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Soil Dryness:</h3>
              <p className="text-md text-yellow-200">{soilDryness}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
