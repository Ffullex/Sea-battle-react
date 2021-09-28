export const FIELD_SIZE = 10;
export const EMPTY_FIELD = 0;
export const SHIP_UNO = 1;
export const SHIP_DUO = 2;
export const SHIP_TRES = 3;
export const SHIP_QUARTO = 4;
export const VERTICAL = true;
export const HORIZONTAL = false;
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
let coord = getRandomCoordinate()
export function disposalShips() {
    const allShips = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5];
    const unoShip = [1, 1, 1, 1];
    const duoShip = [2, 2, 2];
    const tresShip = [3, 3];
    const quartoShip = [4];
    while (allShips !== [5]){
        console.log( allShips )
        if ( allShips[0] === SHIP_UNO) {
            while ( matrix[coord.newX][coord.newY] !== EMPTY_FIELD ) {
                coord = getRandomCoordinate();
            }
            matrix[coord.newX][coord.newY] = SHIP_UNO
        }
        if ( allShips[0] === SHIP_DUO) {
            while ( matrix[coord.newX][coord.newY] !== EMPTY_FIELD ) {
                coord = getRandomCoordinate();
            }
            matrix[coord.newX][coord.newY] = SHIP_DUO
        }
        if ( allShips[0] === SHIP_TRES) {
            while ( matrix[coord.newX][coord.newY] !== EMPTY_FIELD ) {
                coord = getRandomCoordinate();
            }
            matrix[coord.newX][coord.newY] = SHIP_TRES
        }
        if ( allShips[0] === SHIP_QUARTO) {
            while ( matrix[coord.newX][coord.newY] !== EMPTY_FIELD ) {
                coord = getRandomCoordinate();
            }
            matrix[coord.newX][coord.newY] = SHIP_QUARTO
        }
        allShips.splice(0,1);
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

export function getRandomCoordinate() {
    const newX = Math.ceil(Math.random () * FIELD_SIZE)
    const newY = Math.ceil(Math.random () * FIELD_SIZE)
    return {newX, newY}
}
export function shoot() {
    return 0
}

export function getRandomDirection(){
        if(Math.floor(Math.random() * 2) === 1){
            return VERTICAL
        } else {
            return HORIZONTAL
        }
}

let matrix = createBattleField();
disposalShips(matrix)