import styles from './Cell.module.css';

// компонент отрисовки пустого поля
export default function Cell({row, column}) {
    function onClick(x, y){
        console.log(x, y)
    }

    return <div className={styles['box']} onClick={() => onClick(row, column)}> </div>
};