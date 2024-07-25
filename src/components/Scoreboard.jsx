import React from "react";

export default function Scoreboard(props) {
    return (
        <p style={{textAlign: "center"}}>
            {props.winner ? props.phrase : `Is's ${props.isX ? "X" : "O"} move`}
        </p>
    )
}