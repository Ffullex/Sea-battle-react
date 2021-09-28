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

let matrix = createBattleField();

export function disposalShips() {
    const unoShip = [1, 1, 1, 1];
    const duoShip = [2, 2, 2];
    const tresShip = [3, 3];
    const quartoShip = [4];
    console.log( unoShip, duoShip, tresShip, quartoShip)
    if ( getRandomCell(0, EMPTY_FIELD) === EMPTY_FIELD) {

    }
    // for (let i = 0; i < 10; i++) {
    //     for (let j = 0; j < 10; j++) {
    //
    //     }
    // }
    return 0
}

export function checkLocality() {
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
    return 0
}

export function getRandomCell() {
    const newX = Math.ceil(Math.random () * FIELD_SIZE)
    const newY = Math.ceil(Math.random () * FIELD_SIZE)
    return {newX, newY}
}
export function shoot() {
    return 0
}