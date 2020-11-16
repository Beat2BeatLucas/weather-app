const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
    { city: "Madrid", country: "España", countryCode: "ES" },
    { city: "Bogotá", country: "Colombia", countryCode: "CO" },
    { city: "Ciudad de México", country: "México", countryCode: "MX" },
]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => 
    cities.filter(city => city.countryCode === countryCode)[0].country
