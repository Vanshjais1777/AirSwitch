import React from 'react'
import { Link, Router } from 'react-router-dom'

const DevicesBtn = (img, txt) => {
    return (
        <button className='p-3 m-2'>
            <img src={img} alt="" />
            {txt}
        </button>

    )
}

export default DevicesBtn