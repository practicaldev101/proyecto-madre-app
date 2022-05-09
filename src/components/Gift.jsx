import React from 'react';
import {BsHeartHalf} from 'react-icons/bs'
import './Gift.css';

const Gift = ()=>{
    return (
        <div className='Gift'>
            <h1>¡Feliz Día, Madre!</h1>
            <div className='Gift__primary Gift--circle'>
                <div className='Gift__secondary Gift--circle'>
                <div className='Gift__third Gift--circle'>
                <BsHeartHalf className='Gift__icon' size={60}/>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Gift;