import React from "react";

export default function Cell(props) {
    return (
        <button className="cell" onClick={props.setMove}>
            {props.move}
        </button>
    )
}