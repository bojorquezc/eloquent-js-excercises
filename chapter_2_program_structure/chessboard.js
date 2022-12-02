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

/*Personal Rreasoning: Try to write a loop that alternates between odd and even numbers and updates a variable, the first line 
will need to concatenate a space character in the odd numbers and a "#" symbol in the even numbers, ending with a \n.
The number of times the loop will need to run will depend on the grid size, in this case it will be more than 64 times for an 8x8,
since we will also have to concatenate the \n each line (8 new lines in the first version)*/


let chess = "";
//The iterations is the characters per row + the number of lines, the new lines is the number of rows -1
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

console.log(chess);