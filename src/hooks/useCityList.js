import { useState, useEffect } from 'react'
import axios from 'axios'
import { getWeatherUrl } from '../utils/urls'
import { getCityCode } from '../utils/utils'
import getAllWeather from '../utils/transform/getAllWeather'

const useCityList = (cities, allWeather, onSetAllWeather) => {
    //const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            
            const url = getWeatherUrl({city, countryCode})

            try {
                const propName = getCityCode(city, countryCode)

                onSetAllWeather({ [propName]: {} })

                const response = await axios.get(url)
                
                const allWeatherAux = getAllWeather(response, city, countryCode)
                
                onSetAllWeather(allWeatherAux)
            } catch (error) {
                if (error.response) {
                    setError("Ha ocurrido un error en el servidor del clima")
                } else if (error.request) {
                    setError("Verifique la conexión a internet")
                } else {
                    setError("Error al cargar los datos")
                }
            }
        }

        cities.forEach(({ city, countryCode }) => {
            if(!allWeather[getCityCode(city, countryCode)]) {
                setWeather(city, countryCode)
            }
        })
        

    }, [cities, onSetAllWeather, allWeather])

    return { error, setError }
}

export default useCityList
