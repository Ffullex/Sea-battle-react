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

export function disposalShips() {
    return 0
}

export function checkLocality() {
    return 0
}

export function shoot() {
    return 0
}