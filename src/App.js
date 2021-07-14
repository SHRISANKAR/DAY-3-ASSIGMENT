import React,{useState} from "react"
import Icon from "./Components/Icon"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"

const tiktacArray = new Array(9).fill("")
const  App = () => {
    let [isCross,setIsCross] =  useState(true)
    let [winMessage , setWinMessage] = useState("")

    const playAgain =() =>{
        setIsCross(true)
        setWinMessage("")
        tiktacArray.fill("")
    }

    const findWinner=()=>{
      const lines = {
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

      }; 

      for(let i=0;i<lines.length;i++)
      {
          const [a,b,c] = lines[i];
          if(squares[a] && squares[a]=== squares[b] && squares[b] === squares[c]){
               return squares[a];
          }
      }

      return null;

    }



    return(
        <div>
            <Icon choice = "circle" />
        </div>
    )
}
export default App