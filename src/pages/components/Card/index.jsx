import './style.css'
import React from 'react'

export function Card({title,avatar, text }){


return(
    <div className='card'>
        <div>
        <img src={avatar}></img>
        </div>
        <div>
            <h3>{title}</h3>
        </div>
        <div>
            <p>{text}</p>
        </div>
    </div>
)

}