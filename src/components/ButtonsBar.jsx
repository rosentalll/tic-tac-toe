import React from "react";
import Button from "./Button";

export default function ButtonsBar(props) {
    const {getPreviousMove, restartGame, getNextMove} = props.handlers
    return (
        <ul className="buttons-bar">
            <li>
                <Button 
                    label={"Previous move"} 
                    handleClick={getPreviousMove} 
                    key={0}
                />
            </li>
            <li>
                <Button 
                    label={"New game"} 
                    handleClick={restartGame} 
                    key={1}
                />
            </li>
            <li>
                <Button 
                    label={"Next move"} 
                    handleClick={getNextMove} 
                    key={2}
                />
            </li>
        </ul>
    )
}