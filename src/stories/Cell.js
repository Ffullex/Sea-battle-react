import './Cell.css';
import {EMPTY_FIELD} from "../omponents/matrix";

// компонент отрисовки пустого поля
export const Cell = ({status = EMPTY_FIELD}) => {
    return <div className={'box empty'}> </div>;
};