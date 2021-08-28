class TicTacToe {
    constructor() {
        this.matrix = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ]
        this.firstCharacter = true;
        this.currentPlayerSymbol = 'x';
    }


    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        let characterInClickCell = this.getFieldValue(rowIndex, columnIndex);

        if(characterInClickCell) {
           return;
        } else {
            this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;

            if(this.currentPlayerSymbol == 'x') {
                this.currentPlayerSymbol = 'o'
            } else {
                this.currentPlayerSymbol = 'x'
            }
            return;
        }
    }

    isFinished() {
        if(this.isDraw() || this.getWinner()) {
            return true;
        } else {
          return false;
        }
    }

    getWinner() {
        if(
            (this.matrix[0][0] == this.matrix[0][1] && this.matrix[0][1] == this.matrix[0][2] && this.matrix[0][2] != '') ||
            (this.matrix[1][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[1][2] && this.matrix[1][2] != '') ||
            (this.matrix[2][0] == this.matrix[2][1] && this.matrix[2][1] == this.matrix[2][2] && this.matrix[2][2] != '') ||
            (this.matrix[0][0] == this.matrix[1][0] && this.matrix[1][0] == this.matrix[2][0] && this.matrix[2][0] != '') ||
            (this.matrix[0][1] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][1] && this.matrix[2][1] != '') ||
            (this.matrix[0][2] == this.matrix[1][2] && this.matrix[1][2] == this.matrix[2][2] && this.matrix[2][2] != '') ||
            (this.matrix[0][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][2] && this.matrix[2][2] != '') ||
            (this.matrix[2][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[0][2] && this.matrix[0][2] != '')
          ) {
            return this.currentPlayerSymbol === 'x' ? 'o' : 'x';
          } else {
            return null;
          }
    }

    noMoreTurns() {
        let result = '';
        this.matrix.forEach(elem => {
            if(elem.includes('')) {
                return result = true;
            }
        });
        if(!result) {
          return true;
        } else {
          return false;
        }
    }

    isDraw() {
        if(this.noMoreTurns() && !this.getWinner()) {
            return true;
        } else {
          return false;
        }
    }

    getFieldValue(rowIndex, columnIndex) {
        let characterIncurrentCell = this.matrix[rowIndex][columnIndex];
        if(characterIncurrentCell) {
            return characterIncurrentCell;
        } else {
            return null;
        }
    }
}

module.exports = TicTacToe;
