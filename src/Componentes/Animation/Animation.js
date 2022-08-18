import { useState, useEffect, useRef } from "react"

// const useRef = (initialVal) => useState({ current: initialVal})[0] 

const Animation = () => {
    const [background, setBackground] = useState('green')

    const divRef = useRef()
    console.log(divRef)

    useEffect(() => {
        const handleScroll = () => {
            // const div = document.getElementById('scroll-color')
            console.log(divRef)
            const div = divRef.current
            const { y } = div.getBoundingClientRect()

            const backgroundColor = y <= 0 ? 'blue' : 'green'

            setBackground(backgroundColor)
        }


        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div>
            <div 
                ref={divRef}
                // id='scroll-color' 
                style={{ height: '180vh', background }}
            >
                <h1 style={{ color: 'white'}}>
                    Scrollear para cambiar el color de fondo
                </h1>
            </div>
        </div>
    )
}

export default Animation