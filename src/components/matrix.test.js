import {
    checkCell, checkCellForNeighbour, checkCellForShip,
    checkLocality,
    createBattleField,
    disposalShips,
    FIELD_SIZE,
    getRandomCoordinates,
    getRandomDirection, HORIZONTAL, VERTICAL
} from './matrix';

test('Создание поля боя, проверка createBattleField', () => {
    const battlefield = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    let testField = createBattleField();
    expect(battlefield).toEqual(testField);
});

test('Расположение кораблей, проверка функции disposalShips', () => {
    let matrix = createBattleField();
    let battleField = disposalShips(matrix);
    let countShipCells = 0;
    for (let y = 0; y < FIELD_SIZE; y++) {
        for (let x = 0; x < FIELD_SIZE; x++) {
            if (battleField[y][x] !== 0) {
                countShipCells += 1;
            }
        }
    }
    expect(countShipCells).toEqual(20);
});

test('Исследование окрестностей кораблей, проверка функции checkLocality', () => {
    const matrix = [
        [0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 4, 0, 3, 3, 3, 0, 2, 0, 1],
        [0, 4, 0, 0, 0, 0, 0, 2, 0, 0],
        [0, 4, 0, 3, 3, 3, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 2, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    expect(checkLocality(8, 6, 2, matrix, HORIZONTAL)).toBe(false);
    expect(checkLocality(3, 5, 2, matrix, VERTICAL)).toBe(true);
    expect(checkLocality(9, 9, 2, matrix, VERTICAL)).toBe(false);

    expect(checkLocality(-8, 6, 2, matrix, HORIZONTAL)).toBe(false);
    expect(checkLocality(3, -5, 2, matrix, VERTICAL)).toBe(false);
    expect(checkLocality(9, 10, 2, matrix, VERTICAL)).toBe(false);

    expect(checkLocality(2, 8, 2, matrix, HORIZONTAL)).toBe(true);
    expect(checkLocality(5, 4, 2, matrix, VERTICAL)).toBe(false);
    expect(checkLocality(5, 5, 2, matrix, VERTICAL)).toBe(true);
    expect(checkLocality(3, 7, 3, matrix, HORIZONTAL)).toBe(true);
});

test('Получение случайных координат, проверка функции getRandomCoordinate', () => {
    let flagX = false;
    let flagY = false;
    const coord = getRandomCoordinates();
    if (0 < coord.newX && coord.newX < 11) {
        flagX = true;
    }
    if (0 < coord.newX && coord.newX < 11) {
        flagY = true;
    }
    expect(flagX).toEqual(true);
    expect(flagY).toEqual(true);
});

test('Выбор направления, проверка функции getRandomDirection', () => {
    const direction = getRandomDirection();
    expect(typeof direction).toBe('boolean');
});

test('Проверка функции проверки пустотности ячейки для корабля, checkCellForShip', () => {
    const matrix = [
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [4, 0, 0, 3, 3, 3, 0, 2, 0, 1],
        [4, 0, 0, 3, 3, 3, 0, 0, 0, 1],
        [4, 0, 0, 0, 0, 0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 2, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    expect(checkCellForShip(matrix, 0, 2)).toEqual(false);
    expect(checkCellForShip(matrix, 2, 0)).toEqual(true);
    expect(checkCellForShip(matrix, 8, 8)).toEqual(false);
    expect(checkCellForShip(matrix, -8, -8)).toEqual(false);
    expect(checkCellForShip(matrix, 0, -8)).toEqual(false);
    expect(checkCellForShip(matrix, -8, 0)).toEqual(false);
    expect(checkCellForShip(matrix, 9, 9)).toEqual(true);
});

test('Проверка функции проверки пустотности ячейки для корабля, checkCellForNeighbour', () => {
    const matrix = [
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [4, 0, 0, 3, 3, 3, 0, 2, 0, 1],
        [4, 0, 0, 3, 3, 3, 0, 0, 0, 1],
        [4, 0, 0, 0, 0, 0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 2, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    expect(checkCellForNeighbour(matrix, 0, 2)).toEqual(false);
    expect(checkCellForNeighbour(matrix, 2, 0)).toEqual(true);
    expect(checkCellForNeighbour(matrix, 8, 8)).toEqual(false);
    expect(checkCellForNeighbour(matrix, -8, -8)).toEqual(true);
    expect(checkCellForNeighbour(matrix, 0, -8)).toEqual(true);
    expect(checkCellForNeighbour(matrix, -8, 0)).toEqual(true);
    expect(checkCellForNeighbour(matrix, 9, 9)).toEqual(true);
});

test('shoot', () => {});
