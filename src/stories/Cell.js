import styles from './Cell.css';

// компонент отрисовки пустого поля
export const Cell = () => {
    return <div className={styles['box empty']}> </div>;
};