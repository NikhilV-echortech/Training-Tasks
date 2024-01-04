 var size = 5; // we can change size according to requirement;
  var currentPlayer = 'X';
  var board = initializeBoard(size);

  function initializeBoard(size) {
    var board = [];
    for (var i = 0; i < size; i++) {
      var row = [];
      for (var j = 0; j < size; j++) {
        row.push('');
      }
      board.push(row);
    }
    return board;
  }

  function createBoard() {
    var table = document.getElementById('ticTacToe');
    for (var i = 0; i < size; i++) {
      var row = table.insertRow(i);
      for (var j = 0; j < size; j++) {
        var cell = row.insertCell(j);
        cell.onclick = function() {
          var rowIndex = this.parentNode.rowIndex;
          var cellIndex = this.cellIndex;
          makeMove(rowIndex, cellIndex);
        };
      }
    }
  }

  function makeMove(row, col) {
    if (board[row][col] === '') {
      document.getElementById('ticTacToe').rows[row].cells[col].innerHTML = currentPlayer;
      board[row][col] = currentPlayer;

      if (checkWin(row, col)) {
        document.getElementById('result').innerHTML = currentPlayer + ' wins!';
      } else if (checkDraw()) {
        document.getElementById('result').innerHTML = 'It\'s a draw!';
      } else {
        switchPlayer();
      }
    }
  }

  function switchPlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
  }

  function checkWin(row, col) {
    // Row -wise checking for win condition
    for (var i = 0; i < size; i++) {
      if (board[row][i] !== currentPlayer) {
        break;
      }
      if (i === size - 1) {
        return true;
      }
    }

    // column -wise checking for win condition
    for (var i = 0; i < size; i++) {
      if (board[i][col] !== currentPlayer) {
        break;
      }
      if (i === size - 1) {
        return true;
      }
    }

    // Diagonal checking for win condition
    if (row === col) {
      for (var i = 0; i < size; i++) {
        if (board[i][i] !== currentPlayer) {
          break;
        }
        if (i === size - 1) {
          return true;
        }
      }
    }

    if (row + col === size - 1) {
      for (var i = 0; i < size; i++) {
        if (board[i][size - 1 - i] !== currentPlayer) {
          break;
        }
        if (i === size - 1) {
          return true;
        }
      }
    }

    return false;
  }
   // condition for Draw 
  function checkDraw() {
    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        if (board[i][j] === '') {
          return false; 
        }
      }
    }
    return true; 
  }

  createBoard(); // Initialize the game board