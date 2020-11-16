import { getCityCode, toCelsius } from '../utils'

const getAllWeather = (response, city, countryCode) => {
    const { data } = response
    const temperature = toCelsius(data.main.temp)
    const humidity = data.main.humidity
    const wind = data.wind.speed
    const state = data.weather[0].main.toLowerCase()
    const propName = getCityCode(city, countryCode) //Ej: [Buenos Aires-Argentina]
    const propValue = { temperature, state, humidity, wind } //Ej: { temperature: 10, state: "clear" }
    
    return {[propName]: propValue }
}

export default getAllWeather