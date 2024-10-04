import React, { useEffect, useState } from 'react'
import DevicesBtn from '../components/DevicesBtn'
import aclogo from "../assets/ACLogo.png"
import Logo from '../components/Logo'

const Home = () => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div className='grid grid-cols-2 grid-rows-3'>
            <div className='flex justify-center items-center h-screen'>
                <Logo />
            </div>
            <DevicesBtn txt="AC" img={aclogo} />
        </div>
    )
}

export default Home;