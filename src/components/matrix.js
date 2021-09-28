export const FIELD_SIZE = 10;
export const EMPTY_FIELD = 0;
export const SHIP_UNO = 1;
export const SHIP_DUO = 2;
export const SHIP_TRES = 3;
export const SHIP_QUARTO = 4;

export function createBattleField() {
    let field = [[]];
    for (let i = 0; i < FIELD_SIZE; i++) {
        if (field[i] === undefined) {
            field[i] = [];
        }
        for (let j = 0; j < FIELD_SIZE; j++) {
            field[i][j] = EMPTY_FIELD;
        }
    }
    return field;
}

export function disposalShips() {
    return 0
}

export function checkLocality() {
    // let matrix = createBattleField()
    // let battleField = disposalShips(matrix)
    // let countShipCells = 0
    // for (let i = 0; i < 10; i++) {
    //     for (let j = 0; j < 10; j++) {
    //         switch (battleField[i][j]){
    //             case 4: {
    //                 if (true)
    //                     break
    //                 break
    //             }
    //             case 3: {
    //                 countShipCells += 1;
    //                 break
    //             }
    //             case 2: {
    //                 countShipCells += 1;
    //                 break
    //             }
    //             case 1:
    //                 battleField;
    //                 break
    //             }
    //         }
    //     }
}

export function shoot() {
    return 0
}