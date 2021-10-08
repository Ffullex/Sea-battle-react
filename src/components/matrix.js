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
    let flag = false;
    for (let shipLength of allShips) {
        do {
            const coordinates = getRandomCoordinates();
            const direction = getRandomDirection();
            flag = checkLocality(coordinates, shipLength, matrix, direction);
            if (flag) {
                matrix = putShip(coordinates, shipLength, matrix, direction);
            }
        } while (!flag);
    }
    return matrix;
}

export function checkLocality(coordinates, shipLength, matrix, direction) {
    switch (direction) {
        case HORIZONTAL:
            const startX = coordinates.newX;
            return true;
        case VERTICAL:
            const startY = coordinates.newY;
            return true;
    }
}

export function putShip(coordinates, shipLength, matrix, direction) {
    return 0;
}

export function getRandomCoordinates() {
    const newX = Math.ceil(Math.random() * FIELD_SIZE);
    const newY = Math.ceil(Math.random() * FIELD_SIZE);
    return { newX, newY };
}

export function getRandomDirection() {
    if (Math.floor(Math.random() * 2) === 1) {
        return VERTICAL;
    } else {
        return HORIZONTAL;
    }
}

export function checkCell(matrix, coordinates) {
    const y = coordinates.X;
    const x = coordinates.Y;
    if (matrix[x][y] === EMPTY_FIELD) {
        return true;
    } else if (0 > x || 10 < x || 0 > y || 10 < y) {
        return true;
    } else {
        return false;
    }
}

export function shoot() {
    return 0;
}
