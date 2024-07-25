
import Cell from "./Cell";

export default function Board(props) {
     return (
        <div className="board">
            <div className="board-row">
                <Cell move={props.moves[0]} setMove={() => props.setMove(0)}/>
                <Cell move={props.moves[1]} setMove={() => props.setMove(1)}/>
                <Cell move={props.moves[2]} setMove={() => props.setMove(2)}/>
            </div>
            <div className="board-row">
                <Cell move={props.moves[3]} setMove={() => props.setMove(3)}/>
                <Cell move={props.moves[4]} setMove={() => props.setMove(4)}/>
                <Cell move={props.moves[5]} setMove={() => props.setMove(5)}/>
            </div>
            <div className="board-row">
                <Cell move={props.moves[6]} setMove={() => props.setMove(6)}/>
                <Cell move={props.moves[7]} setMove={() => props.setMove(7)}/>
                <Cell move={props.moves[8]} setMove={() => props.setMove(8)}/>
            </div>
      </div>
     )

}