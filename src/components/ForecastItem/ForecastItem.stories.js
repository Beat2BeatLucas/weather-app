import React from 'react'
import ForecastItem from './ForecastItem'

export default {
    title: "ForecastItem",
    component: ForecastItem
}

export const LunesSoleado = () => 
    <ForecastItem weekDay="Lunes" hour={10} state="clear" temperature={23} />