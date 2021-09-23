import {checkLocality, createBattleField, disposalShips} from "./matrix";
import styles from "../stories/BattleField.module.css";
import Cell from "../stories/Cell";

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
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (battleField[i][j] === 1){
                    countShipCells += 1;
                }
            }
        }
    expect(countShipCells).toEqual(20);
})

test('checkLocality', () => {
    let matrix = createBattleField()
    let battleField = disposalShips(matrix)
    let countShipCells = 0
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (battleField[i][j] === 1){
                countShipCells += 1;
            }
        }
    }
})

test('shoot', () => {

})