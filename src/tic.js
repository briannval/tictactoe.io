import { useState } from "react";
import React from "react";
import { useEffect } from "react";


let game = ['0','1','2','3','4','5','6','7','8']




function Board(){
    return(
        <>
        <div className="r1">
            <div className="e"></div>
            <div className="e"></div>
            <div className="e"></div>
        </div>
        <div className="r2">
            <div className="e"></div>
            <div className="e"></div>
            <div className="e"></div>
        </div>
        <div className="r3">
            <div className="e"></div>
            <div className="e"></div>
            <div className="e"></div>
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