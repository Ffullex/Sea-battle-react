export const FIELD_SIZE = 10;
export const EMPTY_FIELD = 0;
export const SHIP_UNO = 1;
export const SHIP_DUO = 2;
export const SHIP_TRES = 3;
export const SHIP_QUARTO = 4;
export const VERTICAL = true;
export const HORIZONTAL = false;
export function createBattleField() {
    let field = [[]];
    for (let i = 0; i < FIELD_SIZE; i++) {
        if (field[i] === undefined) {
            field[i] = [];
        }
        for (let j = 0; j < FIELD_SIZE; j++) {
            field[i][j] = EMPTY_FIELD;
        }
    }
    return field;
}

export function disposalShips(matrix) {
    const allShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    for (let shipLength of allShips) {
        const coordinates = getRandomCoordinates();
        const direction = getRandomDirection();
        if (!checkLocality(coordinates, shipLength, matrix, direction)) {
            // итерация ещё раз
        } else {
            // располагает корабль на матрице в соответствии с координатами, длиной и направлением
        }
    }
    return 0;
}

export function checkLocality(coordinates, shipLength, matrix, direction) {
    return false;
}

export function getRandomCoordinates() {
    const newX = Math.ceil(Math.random() * FIELD_SIZE);
    const newY = Math.ceil(Math.random() * FIELD_SIZE);
    return { newX, newY };
}

export function shoot() {
    return 0;
}

export function getRandomDirection() {
    if (Math.floor(Math.random() * 2) === 1) {
        return VERTICAL;
    } else {
        return HORIZONTAL;
    }
}
