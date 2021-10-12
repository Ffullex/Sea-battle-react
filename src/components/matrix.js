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
    // i - столбцы, j = строки
    for (let y = 0; y < FIELD_SIZE; y++) {
        if (field[y] === undefined) {
            field[y] = [];
        }
        for (let x = 0; x < FIELD_SIZE; x++) {
            field[y][x] = EMPTY_FIELD;
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

/**
 * метод проверяет окрестности координат случайной точки, проверяя, можно ли поставить корабль
 * @param {} coordinates
 * @param shipLength
 * @param matrix
 * @param direction
 * @returns {boolean}
 */
export function checkLocality(coordinates, shipLength, matrix, direction) {
    const startX = coordinates.newX - 1;
    const startY = coordinates.newY - 1;
    switch (direction) {
        case HORIZONTAL:
            for (let i = 0; i < shipLength; i++) {
                if (0 > startY - 1 || startY - 1 > 10) {
                    break;
                }
                if (!checkCell(matrix, { newY: startY - 1, newX: startX })) {
                    return false;
                }
                if (!checkCell(matrix, { newY: startY - 1, newX: startX + 1 + i })) {
                    return false;
                }
            }
            for (let i = 0; i < shipLength; i++) {
                if (!checkCell(matrix, { newY: startY + 1, newX: startX })) {
                    return false;
                }
                if (!checkCell(matrix, { newY: startY + 1, newX: startX + 1 + i })) {
                    return false;
                }
                if (!checkCell(matrix, { newY: startY + 1, newX: startX + 1 + i })) {
                    return false;
                }
            }
            for (let i = 0; i < shipLength; i++) {
                if (!checkCell(matrix, { newY: startY + 2, newX: startX })) {
                    return false;
                }
                if (0 > startY + 2 || startY + 1 > 10) {
                    break;
                }
                if (!checkCell(matrix, { newY: startY + 2, newX: startX + i })) {
                    return false;
                }
            }
            return true;
        case VERTICAL:
            for (let i = 0; i < shipLength; i++) {
                if (0 > startX || startX + 2 > 10) {
                    break;
                }
                if (!checkCell(matrix, { newY: startY + 1 + i, newX: startX })) {
                    return false;
                }
                if (!checkCell(matrix, { newY: startY + 1 + i, newX: startX })) {
                    return false;
                }
            }
            for (let i = 0; i < shipLength; i++) {
                if (!checkCell(matrix[startY + 1 + i][startX + 1])) {
                    return false;
                }
                if (!checkCell(matrix[startY + 1 + i][startX + 1])) {
                    return false;
                }
                if (!checkCell(matrix[startY + 1 + i][startX + 1])) {
                    return false;
                }
            }
            for (let i = 0; i < shipLength; i++) {
                if (!checkCell(matrix[startY + 1 + i][startX + 2])) {
                    return false;
                }
                if (0 > startY + 2 || startY + 1 > 10) {
                    break;
                }
                if (!checkCell(matrix[startY + 1 + i][startX + 2])) {
                    return false;
                }
            }
            return true;
    }
}

export function putShip(coordinates, shipLength, matrix, direction) {
    return 0;
}

export function getRandomCoordinates() {
    const newX = Math.ceil(Math.random() * FIELD_SIZE);
    const newY = Math.ceil(Math.random() * FIELD_SIZE);
    return { newY, newX };
}

export function getRandomDirection() {
    if (Math.floor(Math.random() * 2) === 1) {
        return VERTICAL;
    } else {
        return HORIZONTAL;
    }
}

export function checkCell(matrix, coordinates) {
    const x = coordinates.newX;
    const y = coordinates.newY;
    if (matrix[y][x] === EMPTY_FIELD) {
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
