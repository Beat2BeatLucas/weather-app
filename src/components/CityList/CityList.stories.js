import React from 'react';
import CityList from './CityList';
import { action } from '@storybook/addon-actions';

export default {
    title: "CityList",
    component: CityList,
}

const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
    { city: "Madrid", country: "España", countryCode: "ES" },
    { city: "Bogotá", country: "Colombia", countryCode: "CO" },
    { city: "Ciudad de México", country: "México", countryCode: "MX" },
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")} /> 
