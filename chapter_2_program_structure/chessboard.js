/* Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works 
for any size, outputting a grid of the given width and height.*/

/* First version working for an 8x8 grid
let chess = "";
let iterations = (8*8) + 7;

for (i = 1; i <= iterations; i++) {
    if (i % 9 == 0) {
        chess += "\n";
    } else if (i % 2 != 0) {
        chess += " ";
    } else if (i % 2 == 0) {
        chess += "#";
    }
}

console.log(chess);*/


//Following is working for 8 but not for 9, review error
let chess = "";
let row = 8;
let column = row;
let newlines = row - 1;
let newline_trigger = column + 1;
let iterations = (row * column) + newlines;

for (i = 1; i <= iterations; i++) {
    if (i % newline_trigger == 0) {
        chess += "\n";
    } else if (i % 2 != 0) {
        chess += " ";
    } else if (i % 2 == 0) {
        chess += "#";
    }
}

console.log(chess);