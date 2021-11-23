import styles from './Cell.module.css';
import { EMPTY_FIELD } from '../components/matrix';

// компонент отрисовки пустого поля
export default function Cell({ status, row, column }) {
    console.log(status);
    function onClick(x, y) {
        console.log(x, y);
    }

    return (
        <div
            className={`${styles.box} ${status !== EMPTY_FIELD ? styles.ship : null}`}
            onClick={() => onClick(row, column)}
        >
            {' '}
        </div>
    );
}
