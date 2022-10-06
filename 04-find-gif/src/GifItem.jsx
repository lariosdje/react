import React from 'react'

export const GifItem = ({ key, title, url }) => {
    return (
        <div className='card' key={key}>
            <img src={url }></img>
            <p>{title}</p>
        </div>
    )
}
