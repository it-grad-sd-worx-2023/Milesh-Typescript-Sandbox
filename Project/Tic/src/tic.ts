class TicTacToe {
    private board: string[][];
    private currentPlayer: string;
    private winner: string | null;
  
    constructor() {
      this.board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
      ];
      this.currentPlayer = 'X';
      this.winner = null;
    }
  
    printBoard(): void {
      console.log('-------------');
      for (let i = 0; i < 3; i++) {
        console.log(`| ${this.board[i].join(' | ')} |`);
        console.log('-------------');
      }
    }
  
    makeMove(row: number, col: number): void {
      if (this.isValidMove(row, col)) {
        this.board[row][col] = this.currentPlayer;
        this.checkForWinner();
        this.switchPlayer();
        updateBoard();
        if (this.isGameOver()) {
          displayResult();
        }
      } else {
        console.log('Invalid move. Try again.');
      }
    }
  
    isValidMove(row: number, col: number): boolean {
      return this.board[row][col] === ' ';
    }
  
    switchPlayer(): void {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  
    checkForWinner(): void {
      for (let i = 0; i < 3; i++) {
        if (
          this.board[i][0] !== ' ' &&
          this.board[i][0] === this.board[i][1] &&
          this.board[i][1] === this.board[i][2]
        ) {
          this.winner = this.board[i][0];
          return;
        }
  
        if (
          this.board[0][i] !== ' ' &&
          this.board[0][i] === this.board[1][i] &&
          this.board[1][i] === this.board[2][i]
        ) {
          this.winner = this.board[0][i];
          return;
        }
      }
  
      if (
        this.board[0][0] !== ' ' &&
        this.board[0][0] === this.board[1][1] &&
        this.board[1][1] === this.board[2][2]
      ) {
        this.winner = this.board[0][0];
        return;
      }
  
      if (
        this.board[0][2] !== ' ' &&
        this.board[0][2] === this.board[1][1] &&
        this.board[1][1] === this.board[2][0]
      ) {
        this.winner = this.board[0][2];
      }
    }
  
    isGameOver(): boolean {
      return this.winner !== null || this.isBoardFull();
    }
  
    isBoardFull(): boolean {
      for (let row of this.board) {
        for (let cell of row) {
          if (cell === ' ') {
            return false;
          }
        }
      }
      return true;
    }
  }
  
  const ticTacToe = new TicTacToe();
  
  function updateBoard(): void {
    const gameBoard = document.getElementById('game-board') as HTMLTableElement;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cell = gameBoard.rows[i].cells[j];
        cell.textContent = ticTacToe.board[i][j];
      }
    }
  }
  
  function displayResult(): void {
    const statusElement = document.getElementById('status') as HTMLParagraphElement;
    if (ticTacToe.winner) {
      statusElement.textContent = `Player ${ticTacToe.winner} wins!`;
    } else {
      statusElement.textContent = "It's a draw!";
    }
  }
  