import Cell from "./Cell";

export default function Board({ moves, setMove }) {
     return (
        <div className="board">
           <div className="board-inner">
                {moves.map((move, index) => {
                    return (
                        <Cell 
                            move={move}
                            setMove={() => setMove(index)}
                        />
                    )
                })}
           </div>
      </div>
     )
}