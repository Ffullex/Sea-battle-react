import {
    checkCell,
    checkLocality,
    createBattleField,
    disposalShips,
    FIELD_SIZE,
    getRandomCoordinates,
    getRandomDirection
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
    for (let i = 0; i < FIELD_SIZE; i++) {
        for (let j = 0; j < FIELD_SIZE; j++) {
            if (battleField[i][j] !== 0) {
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
    const coordinates1 = { newX: 8, newY: 6 };
    const coordinates2 = { newX: 1, newY: 2 };
    const shipLength1 = 2;
    const shipLength2 = 4;
    const direction = { X: 0, Y: -1 }; // down
    expect(checkLocality(coordinates1, shipLength1, matrix1, direction)).toEqual(true);
    expect(checkLocality(coordinates2, shipLength2, matrix2, direction)).toEqual(false);
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
    expect(checkCell(matrix, { X: 2, Y: 0 })).toEqual(true);
    expect(checkCell(matrix, { X: 0, Y: 2 })).toEqual(false);
    expect(checkCell(matrix, { X: 8, Y: 8 })).toEqual(false);
});

test('shoot', () => {});
