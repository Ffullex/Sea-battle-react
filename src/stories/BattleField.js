import Cell from './Cell.js';
import styles from './BattleField.module.css';

// компонент отрисовки поля
export default function BattleField({ computerField, userField }) {
    return (
        <div className={styles['gameSurface']}>
            <div className={styles['myMatrix']}>
                {computerField.map((row, rowIndex) => (
                    <div className={styles['row']} key={rowIndex}>
                        {row.map((item, itemIndex) => (
                            <Cell status={item} row={rowIndex} column={itemIndex} key={itemIndex} />
                        ))}
                    </div>
                ))}
            </div>
            <div className={styles['enemyMatrix']}>
                {userField.map((row, rowIndex) => (
                    <div className={styles['row']} key={rowIndex}>
                        {row.map((item, itemIndex) => (
                            <Cell status={item} row={rowIndex} column={itemIndex} key={itemIndex} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
