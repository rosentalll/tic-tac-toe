import './App.css';
import Game from './components/Game';
import Title from './components/Title';

export default function App() {
  return (
    <div className="App">
      <Title title="Tic-Tac-Toe Game" />
      <Game/>
    </div>
  );
}


