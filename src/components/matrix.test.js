import {createBattleField} from "./matrix";

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