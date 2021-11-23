import logo from './logo.svg';
import './App.css';
import BattleField from './stories/BattleField';
import { disposalShips } from './components/matrix';

function App() {
    const computerField = disposalShips();
    const userField = disposalShips();
    console.table(computerField);
    console.table(userField);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                Learn React
                <br />
                SEA BATTLE
                <BattleField computerField={computerField} userField={userField} />
            </header>
        </div>
    );
}

export default App;
