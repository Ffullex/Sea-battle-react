import { Cell } from './Cell.js';
import styles from './BattleField.module.css';
import { createBattleField } from "../components/matrix";


// компонент отрисовки поля
export default function BattleField({ matrix, cellField }) {
    matrix = createBattleField()
    cellField = createBattleField()
    return (
        <div className={styles["gameSurface"]}>
            <div className={styles["myMatrix"]}>
                {matrix.map((row, rowIndex) => (
                    <div className={styles["row"]} key={rowIndex}>
                        {row.map((item, itemIndex) => (
                            <Cell status={ item } key={ itemIndex } />
                        ))}
                    </div>
                ))}
            </div>
            <div className={styles["enemyMatrix"]}>
                {cellField.map((row, rowIndex) => (
                    <div className={styles["row"]} key={rowIndex}>
                        {row.map((item, itemIndex) => (
                            <Cell status={ item } key={ itemIndex } />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};