import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList';

const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
    { city: "Madrid", country: "España", countryCode: "ES" },
    { city: "Bogotá", country: "Colombia", countryCode: "CO" },
    { city: "Ciudad de México", country: "México", countryCode: "MX" },
]

test("CityList render", async () => {
    
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={() => {}} />);

    const items = await findAllByRole("button");

    expect(items).toHaveLength(4);
})

test("CityList click on item", async () => {
    //Simulamos la acción del usuario: click sobre un item
    //Para eso vamos a utilizar una función "mock"
    const fnClickOnItem = jest.fn();

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    //Simulamos la acción con fireEvent

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})