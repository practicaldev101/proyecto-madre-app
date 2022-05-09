import React from 'react';
import {FaGithub, FaInstagram, FaYoutube} from 'react-icons/fa'
import './Board.css';

const Board = (props)=>{
    return(
        <div className="Board">
            <div className='Board__body'>
                {props.children}
            </div>
            <div className='Board__footer'>
                <ul>
                    <li>By:</li>
                    <li>Practical Programmer</li>
                </ul>
                <ul>
                    <li><a href="https://github.com/practicaldev101"><FaGithub size={25}/></a></li>
                    <li><a href="https://www.instagram.com/practical_dev/"><FaInstagram size={25}/></a></li>
                    <li><a href="https://www.youtube.com/channel/UCk6a5c-G9dIpBDwrBTATgBw"><FaYoutube size={25}/></a></li>
                </ul>
            </div>
        </div>
    )
}
export default Board;