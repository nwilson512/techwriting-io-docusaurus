---
title: Greedy
course: CS50
lang: C
description: Determines the number of coins required to make change for a given decimal value.
---

```
#include <stdio.h>
#include <cs50.h>
#include <math.h>

float x;
int q;
int d;
int n;
int p;
long int y;
int main(void)
{
    do
    {
        printf("Change: ");
        x = get_float();
    }
    while(x < 0);
    x = x * 100;
    y = lroundf(x);
    //printf("%li", y); // just checking
        do
        {
            if(y >= 25)
                {   
                    y = y - 25;
                    q++;
                }
        }
        while(y - 25 >= 0);
        //printf("%li", y);
        do
        {
            if(y >= 10)
                {           
                    y = y - 10;
                    d++;
                }
        }
        while(y - 10 >= 0);
        //printf("%li", y);
        do
        {
            if(y >= 5)
                {       
                    y = y - 5;
                    n++;
                }
        }
        while(y - 5 >= 0);
        //printf("%li", y);
        do
        {
            if(y >= 1)
                {
                    y = y - 1;
                    p++;
                }
        }
        while(y - 1 >= 0);
    // printf("%li", y);
    // printf("%i Quarters\n %i Dimes\n %i Nickels\n %i Pennies\n", q, d, n, p);
    printf("%i\n", q + d + n + p);
    // need to output just a single number of coins for their check program
}

/* Spec requirements:
Write, in a file called greedy.c in your ~/workspace/pset1/ directory, a program that first asks the user how much change is owed and then spits out the minimum number of coins with which said change can be made. Use get_float from the CS50 Library to get the user’s input and printf from the Standard I/O library to output your answer. Assume that the only coins available are quarters (25¢), dimes (10¢), nickels (5¢), and pennies (1¢). */
```