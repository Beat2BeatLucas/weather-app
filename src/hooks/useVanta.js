import { useState, useRef, useEffect } from 'react'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const useVanta = () => {
    const myRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0)

    useEffect(() => {
        console.log("myRefDiv.current (en useEffect)", myRefDiv.current)

        if(!vanta) {
            //Activamos el efecto de Clouds
            setVanta(Clouds({
                THREE,
                el: myRefDiv.current
            }))
        }

        return () => {
            //Destruimos los recursos tomados por "vanta"
            if (vanta) {
                vanta.destroy()
            }
        }

    }, [vanta])

    return myRefDiv 
}

export default useVanta