import React from "react";

export default function Cell({ setMove, move }) {
    return (
        <button className="cell" onClick={setMove}>
            {move}
        </button>
    )
}