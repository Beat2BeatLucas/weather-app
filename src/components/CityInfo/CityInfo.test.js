import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' // SUT: System under testing

test("CityInfo render", async () => {
    const city = "Buenos Aires"
    const country = "Argentina"

    //Arrange
    const { findAllByRole } = render(<CityInfo city={city} country={country} />)

    //Act
    const cityAndCountryComponents = await findAllByRole("heading")

    //Assert
    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})