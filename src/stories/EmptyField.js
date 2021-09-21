import './Cell.css';
import { Cell } from './Cell.js';
import './EmptyField.css';
import { createBattleField } from "../components/matrix";


// компонент отрисовки поля
export default function EmptyField({ matrix }) {
    matrix = createBattleField()
    return (
        <div className="matrix">
            {matrix.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {row.map((item, itemIndex) => (
                        <Cell status={ item } key={ itemIndex } />
                    ))}
                </div>
            ))}
        </div>
    );
};