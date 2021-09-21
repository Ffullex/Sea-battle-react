import logo from './logo.svg';
import './App.css';
import BattleField from "./stories/BattleField";

function App() {
  return (
      <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            Learn React
            <BattleField />
            </header>
      </div>
  );
}

export default App;
