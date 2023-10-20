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

let enabledboard = true;

function Reset(){
    game = ['0','1','2',
            '3','4','5',
            '6','7','8'];
    enabledboard = true;
    const item = document.getElementById("headertext");
    const boxes = document.getElementsByClassName("box");
    for (let i = 0 ; i < game.length ; i++){
        boxes[i].innerHTML = " ";
        boxes[i].style["background-color"] = "#282c34";
    }
    item.innerHTML = `Welcome to <span>Tic Tac Toe!`;
}


function CheckWin(){
    for (let i = 0 ; i < wincon.length ; i++){
        const [a,b,c] = wincon[i];
        if((game[a]===game[b]) && (game[b]===game[c])){
            return wincon[i];
        }
    }
    return false;
}

function checkfilled(i){
    return ((game[i]!=='O') && (game[i]!=='X'));
}

function ReviewWin(t,arr){
    const item = document.getElementById("headertext");
    const boxes = document.getElementsByClassName("box");
    if(t%2===0){
        item.innerHTML = `<span>Player 2</span> is the winner!`;
    }
    else{
        item.innerHTML = `<span>Player 1</span> is the winner!`
    }
    for (var i = 0 ; i < arr.length ; i++){
        boxes[arr[i]].style["background-color"] = "#61dafb";
    }

}

function HandleKey(k){
    if(k===' '){
        Reset();
    }
}


function Board(){

    const [ turn, setTurn ] = useState(0);
    document.addEventListener("keydown",(e) => {
        HandleKey(e.key);
    })
    const clicked = (event,index) => {
        if (checkfilled(index) && enabledboard){
            if(turn%2===0){
                event.target.innerHTML = `<h3>X</h3>`;
                game[index] = "X";
                setTurn(turn+1);
            }
            else{
                event.target.innerHTML = `<h3>O</h3>`;
                game[index] = "O";
                setTurn(turn+1);
            }
        }
    }

    if(CheckWin()){
        let arr = CheckWin();
        enabledboard = false;
        ReviewWin(turn,arr);
    };


    return(
        <>
        <div className="container">
        <div className="b">
            <div className="box b0" onClick={(e)=>clicked(e,0)}>
            </div>
            <div className="box b1" onClick={(e)=>clicked(e,1)}>
            </div>
            <div className="box b2" onClick={(e)=>clicked(e,2)}>
            </div>
            <div className="box b3" onClick={(e)=>clicked(e,3)}>
            </div>
            <div className="box b4" onClick={(e)=>clicked(e,4)}>
            </div>
            <div className="box b5" onClick={(e)=>clicked(e,5)}>
            </div>
            <div className="box b6" onClick={(e)=>clicked(e,6)}>
            </div>
            <div className="box b7" onClick={(e)=>clicked(e,7)}>
            </div>
            <div className="box b8" onClick={(e)=>clicked(e,8)}>
            </div>
        </div>
        </div>
        </>
    )
}

function TicTacToe(){
    return(
        <>
        <h1 className="top" id="headertext">Welcome to <span>Tic Tac Toe!</span></h1>
        <Board />
        <button onClick={Reset} className="reset"><h2 className="textreset">Reset</h2></button>
        </>
    )
}

export default TicTacToe;