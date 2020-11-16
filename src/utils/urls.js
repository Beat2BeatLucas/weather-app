const appid = "831c1b565274780d04fb54bf890a8571"

export const getWeatherUrl = ({ city, countryCode }) => 
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`


export const getForecastUrl = ({ city, countryCode }) => 
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`