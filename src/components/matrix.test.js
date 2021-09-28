import {
    checkLocality,
    createBattleField,
    disposalShips,
    FIELD_SIZE,
    getRandomCoordinate,
    getRandomDirection
} from "./matrix";

test('battlefield', () => {
    const battlefield = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]];
    let testField = createBattleField()
  expect(battlefield).toEqual(testField);
})

test('disposalShips', () => {
    let matrix = createBattleField()
    let battleField = disposalShips(matrix)
        let countShipCells = 0
        for (let i = 0; i < FIELD_SIZE; i++) {
            for (let j = 0; j < FIELD_SIZE; j++) {
                if (battleField[i][j] !== 0){
                    countShipCells += 1;
                }
            }
        }
    expect(countShipCells).toEqual(20);
})

test('checkLocality', () => {
    const passTrue = [
        [0, 4, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 4, 0, 3, 3, 3, 0, 2, 0, 1,],
        [0, 4, 0, 0, 0, 0, 0, 2, 0, 0,],
        [0, 4, 0, 3, 3, 3, 0, 0, 0, 1,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 2, 0, 1,],
        [0, 1, 0, 0, 0, 0, 0, 2, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 2, 2, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
    ];
    const passFalse = [
        [0, 4, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 4, 0, 0, 1, 0, 2, 2, 0, 0,],
        [0, 4, 0, 0, 0, 0, 0, 0, 1, 0,],
        [0, 4, 3, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 3, 0, 0, 0, 0, 0, 2, 0,],
        [0, 0, 3, 0, 0, 0, 0, 0, 2, 0,],
        [0, 0, 0, 0, 0, 0, 3, 0, 1, 0,],
        [0, 0, 0, 0, 0, 0, 3, 0, 0, 0,],
        [0, 0, 0, 1, 0, 0, 3, 2, 2, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
    ];
    expect(checkLocality(passTrue)).toEqual(true);
    expect(checkLocality(passFalse)).toEqual(false);
})

test('getRandomCell',() => {
    let flagX = false;
    let flagY = false;
    const coord = getRandomCoordinate()
    if (0 < coord.newX && coord.newX < 11){
        flagX = true;
    }
    if (0 < coord.newX && coord.newX < 11){
        flagY = true;
    }
    expect(flagX).toEqual(true)
    expect(flagY).toEqual(true)
})

test('getRandomDirection', () => {
    expect(getRandomDirection()).toBeTruthy()
})

test('shoot', () => {

})