export const EMPTY_FIELD = 0
export const INTACT_SHIP = 1
export const DAMAGED_SHIP = 2
export const DEAD_SHIP = 3
export function createBattleField() {
    let field = [[]];
    for (let i = 0; i < 10; i++) {
        if (field[i] === undefined) {
            field[i] = [];
        }
        for (let j = 0; j < 10; j++) {
            field[i][j] = 0;
        }
    }
    return field;
}