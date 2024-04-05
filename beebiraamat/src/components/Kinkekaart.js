import React from 'react'
import './Kinkekaart.css'
import {Link} from 'react-router-dom'; 


const Hero = () => {
    return (
        <div className='kinkekaart' id='kinkekaart'>
            <div className='content'>
                <p>DigiBeebi</p>
                <p>Ideaalne kingitus katsikuks, lihtsusta värskete vanemate esimest aasta beebiga ja kingi neile DigiBeebi kinkekaart!</p> 
                <br />
                <p></p>
                <p>Soetades kinkekaarti on vanematele raamatu täitmine ja füüsilisel kujul raamatu tellimine tasuta.</p>
                <Link to={"/kinkekaartiOst"}>
                     <button className='button'>Osta kinkekaart</button>
                </Link>

            </div>
        </div>
    )
}

export default Hero