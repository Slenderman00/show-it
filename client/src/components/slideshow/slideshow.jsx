import { useState } from 'react'
import './slideshowStyle.css'

export default function Slideshow(props) {

    const [bgIndex, setBgIndex] = useState(0)
    const [background, setBackground] = useState(`url('${props.slides[bgIndex]}')`)

    const updateBackground = () => {
        setBackground(`url('${props.slides[bgIndex]}')`)
    }

    const upBgIndex = () => {
        setBgIndex(bgIndex + 1)

        if(bgIndex >= props.slides.length - 1) {
            setBgIndex(0)
        }

        updateBackground()
    }

    const downBgIndex = () => {
        setBgIndex(bgIndex - 1)

        if(bgIndex <= 0) {
            setBgIndex(props.slides.length - 1)
        }

        updateBackground()
    }

    return(
        <div className="slideshow" style={{backgroundImage: background}}>
            <button className='slide-button left' onClick={() => {downBgIndex()}}>
                &lt;
            </button>
            <button className='slide-button right' onClick={() => {upBgIndex()}}>
                &gt;
            </button>
        </div>
    )
}