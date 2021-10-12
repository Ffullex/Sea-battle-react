import {
    checkCell,
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
    const matrix1 = [
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
    const matrix2 = [
        [0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 1, 0, 2, 2, 0, 0],
        [0, 4, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 4, 3, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 0, 0, 0, 0, 0, 2, 0],
        [0, 0, 3, 0, 0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 0, 0, 3, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 3, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    const coordinates1 = { newY: 8, newX: 6 };
    const coordinates2 = { newY: 1, newX: 2 };
    const shipLength1 = 2;
    const shipLength2 = 4;
    expect(checkLocality(coordinates1, shipLength1, matrix1, HORIZONTAL)).toBe(true);
    expect(checkLocality(coordinates2, shipLength2, matrix2, VERTICAL)).toBe(false);
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

test('Проверка функции проверки пустотности ячейки', () => {
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
    expect(checkCell(matrix, { Y: 2, X: 0 })).toEqual(false);
    expect(checkCell(matrix, { Y: 0, X: 2 })).toEqual(true);
    expect(checkCell(matrix, { Y: 8, X: 8 })).toEqual(false);
});

test('shoot', () => {});
