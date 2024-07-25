import React from "react";

export default function Scoreboard(props) {
    return (
        <p className="scoreboard">
            {props.winner ? `${props.winner} wins` : `Is's ${props.isX ? "X" : "O"} move`}
        </p>
    )
}