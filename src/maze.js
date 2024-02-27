/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */
function mazeSolver(maze, index = [0, 0]) {
  let row = index[0];
  let col = index[1];
  let path = "";
  
  // base case
  // if at e, return empty string
  
  if(maze[row][col] === "e") {
    console.log("found the exit!")
    console.log(path);
    return path;
  }
  // recursion:
  // do this while the current position is open " "
  while (maze[row][col] === " ") {
    if (col < maze[row].length -1 && maze[row][col + 1] !== "*") {
      console.log("move right");
      // if blocked with "*"
      maze[row][col] = "*";
      path = "R";
      console.log(path);
      // return current path and call the function again
      return path + mazeSolver(maze, [row, col + 1]);
    }
    // if not in the last row and going right is blocked, go down
    if (row < maze.length - 1 && maze[row + 1][col] !== "*") {
      console.log("move down");
      maze[row][col] = "*";
      path = "D";
      console.log(path);
      // return the current path and call function again
      return path + mazeSolver(maze, [row + 1, col]);
    }
    
    //if not in the first row and col in row above is not blocked, go up
    if (row > 0 && maze[row - 1][col] !== "*") {
      console.log("move up");
      maze[row][col] = "*";
      path = "U";
      console.log(path);
      //return the current path and call the function again
      return path + mazeSolver(maze, [row - 1, col]);
    }
    
//     if not in the first column and the left is not blocked, go left
    if (col > 0 && maze[row][col -1] !== "*") {
      console.log("move left");
      maze[row][col] = "*";
      path = "L";
      console.log(path);
      //return current path and call fucntion again
      return path + mazeSolver(maze, [row, col -1]);
    }
  }
}

module.exports = mazeSolver;
