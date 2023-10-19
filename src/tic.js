import React from "react";
import { useState } from "react";


let game = ['0','1','2',
            '3','4','5',
            '6','7','8']

let wincon = [[0,1,2],
              [3,4,5],
              [6,7,8],
              [0,3,6],
              [1,4,7],
              [2,5,8],
              [0,4,8],
              [2,4,6]]


function CheckWin(){
    for (let i = 0 ; i < wincon.length ; i++){
        const [a,b,c] = wincon[i];
        if((game[a]==game[b]) && (game[b]==game[c])){
            return true;
        }
    }
    return false;
}



function Board(){

    const [ turn, setTurn ] = useState(0);

    const clicked = (event) => {
        console.log(event);
    }

    return(
        <>
        <div className="container">
        <div className="b">
            <div className="box" onClick={(e)=>clicked(e)}></div>
            <div className="box" onClick={(e)=>clicked(e)}></div>
            <div className="box" onClick={(e)=>clicked(e)}></div>
            <div className="box" onClick={(e)=>clicked(e)}></div>
            <div className="box" onClick={(e)=>clicked(e)}></div>
            <div className="box" onClick={(e)=>clicked(e)}></div>
            <div className="box" onClick={(e)=>clicked(e)}></div>
            <div className="box" onClick={(e)=>clicked(e)}></div>
            <div className="box" onClick={(e)=>clicked(e)}></div>
        </div>
        </div>
        <button className="reset"><h2 className="textreset">Reset</h2></button>
        </>
    )
}

function TicTacToe(){
    return(
        <>
        <h1 className="top">Welcome to <span>Tic Tac Toe!</span></h1>
        <Board />
        </>
    )
}

export default TicTacToe;