import React from "react";
import Button from "./Button";

export default function ButtonsBar(props) {
    const {getPreviousMove, restartGame, getNextMove} = props.handlers
    return (
        <div className="history-bar">
            <Button 
                label={"Previous move"} 
                handleClick={getPreviousMove} 
            />
            <Button 
                label={"New game"} 
                handleClick={restartGame} 
            />
            <Button 
                label={"Next move"} 
                handleClick={getNextMove} 
            />
        </div>
    )
}