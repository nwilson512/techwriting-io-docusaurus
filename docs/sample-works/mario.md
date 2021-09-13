---
title: Mario
lang: C
course: CS50
description: Draws a 2-dimensional pyramid into the console.
---
```
#include <stdio.h>
#include <float.h>
#include <limits.h>
#include <stdarg.h>
#include <stdbool.h>
#include <stdlib.h>
#include <cs50.h>

// declare functions
int hash(int count), space(int count, int height);      

// instantiate global integer variables "count" and "height"
int count = 0, height = 0;                              

// start main function
int main(void){
// declare variables                                         
// int count = 0, height = 0;                           

// repeatedly check if input is acceptable
  while (height >= 32 || height <= 0){               
    // prompt for input   
    height = get_int("Enter a valid height: ");   
    // store counter variable to compare to height      
    count = height;                                     
  }
  // loop with "count", drawing the vertical slices of the pyramid
  while (count > 0){         
    // print leading spaces                           
    space(count, height);       
    // print leading blocks                       
    hash(count);                      
    // print the two spaces                  
    printf("  ");        
    // print trailing blocks                               
    hash(count);                        
    // new line                
    printf("\n");                                       
    // decrement "count"
    count--;                                            
    }
  // indicate success
  return 0;                                             
}

// declare a function: "hash"
int hash(int count){                                    
  // count up to the difference between number of lines run and orignal value
  for(int x = count; height - x >= 0; x++){             
    // print "#"
    printf("#");                                        
  }
  return 0;
}

// declare a function: "space"
int space(int count, int height){                       
  // starting at "count", decrement to "0"
  for(int x = count; x > 0; x--){                       
    // print " "
    printf(" ");                                        
  }
  return 0;
}

/* Spec requirements:
- Write, in a file called mario.c in your ~/workspace/pset1/mario/more/ directory, a program that recreates these half-pyramids using hashes (#) for blocks.
- To make things more interesting, first prompt the user for the half-pyramids' heights, a non-negative integer no greater than 23. (The height of the half-pyramids pictured above happens to be 4, the width of each half-pyramid 4, with an a gap of size 2 separating them.)
- If the user fails to provide a non-negative integer no greater than 23, you should re-prompt for the same again.
- Then, generate (with the help of printf and one or more loops) the desired half-pyramids.
- Take care to left-align the bottom-left corner of the left-hand half-pyramid with the left-hand edge of your terminal window.
*/

/*
Thoughts:
- I can create a function that prints the blocks, that way I don't need any duplicate code for the second half of the pyramid
- Leading spaces need only be printed at the beginning. We do not need trailing spaces
- Interior spaces will be a constant
- I'm still searching for a way to increment the spaces and decrement the hashes using only one variable. It may not be possible to do that. I could create an array to hold both the original value and the counter value. I think doing so would keep them adjecent in memory.
- I'm trying to use "count" and "height" as both variables in the main function and parameters in the functions themselves. I don't think this is possible.
*/
```
