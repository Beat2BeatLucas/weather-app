import React from 'react'
import PropTypes from 'prop-types'
import { WiDayCloudy,
    WiDaySunny,
    WiRain,
    WiSnow,
    WiRaindrop,
    WiThunderstorm,
    WiDayHaze,
    WiSmoke,
    WiFog } from 'react-icons/wi'

// Thunderstorm Drizzle Rain Snow Clear Clouds (valores válidos de la API)
export const validValues = [ "clouds",  
                             "clear", 
                             "rain", 
                             "snow",
                             "drizzle",
                             "thunderstorm",
                             "haze",
                             "smoke",
                             "mist"]

const stateByName = {
    clouds: WiDayCloudy,
    clear: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm,
    haze: WiDayHaze,
    smoke: WiSmoke,
    mist: WiFog,
}

const IconState = ({ state }) => {
    const StateByName = stateByName[state]
    return (
        <StateByName />
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired, 
}

export default IconState
