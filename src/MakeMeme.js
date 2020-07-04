import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddCaption from './AddCaption'
import Footer from './Footer'

export default function MakeMeme (props) {
    let [borderColor, updateBorder] = useState("")
    let [filter, updateFilter] = useState("")
    let [style, updateStyle] = useState("")

    const animalMeme = props.history.location.pathname
    console.log(animalMeme.substring(10, animalMeme.length))
    const animalLink = animalMeme.substring(10, animalMeme.length)

    const handleClickColor = (color) => {
        updateBorder(color)
    }

    const handleClickFilter = (filter) => {
        updateFilter(filter)
    }

    const handleClickStyle = (style) => {
        updateStyle(style)
    }

    const handleClickReset = () => {
        updateFilter("")
        updateStyle("")
        updateBorder("")
    }

    return (<>
    <div className="custom-header">
        <h2><Link to='/' style={{textDecoration: 'none', color: 'black'}}>Meme-ix </Link></h2>
    </div>

         <div className={`pic-select ${borderColor} ${style}`}>
             <div className= {`${filter}`}><img src={animalLink} alt="animalimage"></img></div>
         </div>

         <AddCaption />

    
    <div className="style-buttons">
        <button onClick={() => handleClickStyle('solid')}>Solid</button>
        <button onClick={() => handleClickStyle('dotted')}>Dotted</button>
        <button onClick={() => handleClickStyle('dashed')}>Dashed</button>
        <button onClick={() => handleClickStyle('double')}>Double</button>
    </div>
        <br/>
    <div className="border-buttons">
         <button onClick={() => handleClickColor('orange')}>Orange</button>
         <button onClick={() => handleClickColor('blue')}>Blue</button>
         <button onClick={() => handleClickColor('green')}>Green</button>
         <button onClick={() => handleClickColor('black')}>Black</button>
    </div>
        <br/>
    <div className="filter-buttons">
         <button onClick={() => handleClickFilter('greyscale')}>grey</button>
         <button onClick={() => handleClickFilter('invert')}>scary</button>
         <button onClick={() => handleClickFilter('sepia')}>sepia</button>
         <button onClick={() => handleClickFilter('blur')}>blur</button>
    </div>
        <br/>

    <div className="reset-button">
            <button onClick={() => handleClickReset()}>reset</button>
    </div>

   
     
    <div className="space-needed"></div>   
     <Footer />
    </>)
}   