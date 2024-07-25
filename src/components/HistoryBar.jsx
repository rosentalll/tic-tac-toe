import React from "react";
import HistoryButton from "./HistoryButton";

export default function HestoryBar(props) {
    
    return (
        <div className="history-bar">
            <HistoryButton label={"Previous move"} moveThroughtHistory={props.getPreviousMove} />
            <HistoryButton label={"Next move"} moveThroughtHistory={props.getNextMove} />
        </div>
    )
}