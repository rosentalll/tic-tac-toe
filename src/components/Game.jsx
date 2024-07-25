import React, { useState } from "react";

import Board from "./Board";
import HistoryBar from "./HistoryBar";
import Scoreboard from "./Scoreboard";

export default function Game() {

    const [moves, setMoves] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true)
    const [winner, setWinner] = useState(null)
    const [history, setHistory] = useState([moves])
    const [currentMove, setCurrentMove] = useState(0)
    const [phrase, setPhrase] = useState(null)

    const setMove = function(i) {  
       
        if (moves[i] || winner) return

        const newMoves = moves.slice();
        if (isX) {
            newMoves[i] = "X"
        } else {
            newMoves[i] = "O"
        }
        setMoves((p) => p = newMoves)

        defineWinner(newMoves)

        setCurrentMove(history.length)
        setIsX(!isX)
        setHistory([...history, newMoves])
    }

    function defineWinner(arr) {
        if (
            (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] !== null) 
                || 
            (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] !== null)
                || 
            (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] !== null)
                || 
            (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] !== null)
                || 
            (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== null)
                || 
            (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !== null)
                || 
            (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] !== null)
                || 
            (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== null)
        ) {
            setWinner(isX ? "X" : "O")
        }
    }

    function getNextMove() {
        if (currentMove === history.length - 1) {
            return
        } else {
            setCurrentMove(currentMove + 1)
        }
    }

    function getPreviousMove() {
        if (!currentMove) {
            return
        } else {
            setCurrentMove(currentMove - 1)
        }
    }

    function restartGame() {
        setMoves(p => p = Array(9).fill(null))
        setHistory([Array(9).fill(null)])
        setCurrentMove(p => p = 0)
        setWinner(p => p = null)
        console.clear()
    }

    return (
        <section className="game">
            <Board moves={history[currentMove]} setMove={setMove} history={history} winner={winner} isX={isX} />
            <Scoreboard winner={winner} isX={isX} phrase={`${winner} wins`} />
            <HistoryBar history={history} currentMove={currentMove} getPreviousMove={getPreviousMove} getNextMove={getNextMove} />
            <button onClick={restartGame} className="history-button">{"New game"}</button>
        </section>
    )

}