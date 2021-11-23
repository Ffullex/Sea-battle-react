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
export function checkLocality(x, y, shipLength, matrix, direction) {
    if (direction === HORIZONTAL) {
        // при горизонтальном направлении проверяет клетки вправо и потом вокруг
        // проверить для клеток корабля, что они не заняты и не за краем
        for (let i = x; i < x + shipLength; i++) {
            if (!checkCellForShip(matrix, i, y)) {
                return false;
            }
        }
        // проверить клетки соседей, что они не заняты
        // проверка по центру
        if (!checkCellForNeighbour(matrix, x - 1, y)) {
            return false;
        }
        if (!checkCellForNeighbour(matrix, x + 1 + shipLength, y)) {
            return false;
        }
        // проверка сверху
        for (let i = x - 1; i < x + shipLength + 1; i++) {
            if (!checkCellForNeighbour(matrix, i, y - 1)) {
                return false;
            }
        }
        // проверка снизу
        for (let i = x - 1; i < x + shipLength + 1; i++) {
            if (!checkCellForNeighbour(matrix, i, y + 1)) {
                return false;
            }
        }
    }
    // при вертикальном направлении проверяет клетки вниз и потом всё заверте!
    if (direction === VERTICAL) {
        // проверить для клеток корабля, что они не заняты и не за краем
        for (let i = y; i < y + shipLength; i++) {
            if (!checkCellForShip(matrix, x, i)) {
                return false;
            }
        }
        // проверить клетки соседей, что они не заняты
        // проверка по центру
        if (!checkCellForShip(matrix, x, y - 1)) {
            return false;
        }
        if (!checkCellForShip(matrix, x, y + 1 + shipLength)) {
            return false;
        }
        // проверка слева
        for (let i = y - 1; i < y + shipLength + 1; i++) {
            if (!checkCellForNeighbour(matrix, x - 1, i)) {
                return false;
            }
        }
        // проверка справа
        for (let i = y - 1; i < y + shipLength + 1; i++) {
            if (!checkCellForNeighbour(matrix, x + 1, i)) {
                return false;
            }
        }
    }
    return true;
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

/**
 * Если координаты выходят за пределы, возвращаем false
 * Иначе если клетка занята, false
 * Иначе true
 * @param matrix
 * @param x
 * @param y
 * @returns {boolean}
 */
export function checkCellForShip(matrix, x, y) {
    if (x < 0 || x > FIELD_SIZE - 1 || y < 0 || y > FIELD_SIZE - 1) {
        return false;
    } else if (matrix[y][x] !== EMPTY_FIELD) {
        return false;
    } else {
        return true;
    }
}

/**
 * Если координаты за пределами, true
 * Иначе если клетка занята false
 * @param matrix
 * @param x
 * @param y
 * @returns {boolean}
 * */
export function checkCellForNeighbour(matrix, x, y) {
    if (x < 0 || x > FIELD_SIZE - 1 || y < 0 || y > FIELD_SIZE - 1) {
        return true;
    } else if (matrix[y][x] !== EMPTY_FIELD) {
        return false;
    } else {
        return true;
    }
}

export function shoot() {
    return 0;
}
