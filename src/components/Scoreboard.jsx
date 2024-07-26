import React from "react";

export default function Scoreboard({winner, isX}) {
    return (
        <p className="scoreboard">
            {winner ? `${winner} wins` : `Is's ${isX ? "X" : "O"} move`}
        </p>
    )
}