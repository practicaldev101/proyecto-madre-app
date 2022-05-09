import React, {useState } from 'react';
import Board from "./components/Board"
import Button from './components/Button';
import Gift from './components/Gift'
import {HiGift} from "react-icons/hi";
import './App.css';

function App() {

  const [showGift,setShowGift] = useState(0);

  const onClickButton = ()=>{
    setShowGift(true);
  }


    if (!showGift){
      return (
      <Board>
        <Button text={<HiGift size={50}/>} onClick={onClickButton} />
      </Board>)
    }
    else{
      return (
        <Board>
          <Gift/>
        </Board>)
    }
  ;
}

export default App;
