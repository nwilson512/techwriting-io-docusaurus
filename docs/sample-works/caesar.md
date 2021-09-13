---
title: Caesar
template: code_samples
course: CS50
lang: C
description: Takes a string input and enciphers it using Caesar's cipher.
---
```
#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

// take the cipher integer as a command line arg
int main(int argc, string argv[])   
{   
    // check if there are any command line arguments
    if(argc != 2)            

    // if there are no command-line arguments or too many, return an error code 1                         
    {
        printf("ERROR: invalid command line argument, none provided\n");
        return 1;
    }

    // pulling the string out of the argv array
    string k = argv[1];     
    // convert the string in k to an int
    int a = atoi(k);        

    // just checking, Tests OK
    // printf("The string and converted int are: %s and %i\n", k, a);  

    // check if there are any command line arguments
    if( a < 0)   

    // if there are no command-line arguments or too many, return an error code 1                         
    {
        printf("ERROR: invalid command line argument, negative integer\n");
        return 1;
    }

    // prompt for plaintext
    printf("plaintext: ");   
    // get string    
    string s = get_string();    

    printf("ciphertext: ");
    for(int i = 0; i<strlen(s); i++)
    {
        // convert plaintext to ciphertext, ensure that numbers are unchanged, ensure that case is preserved
        if(isupper(s[i]) != 0)
        {
            // if the cipher is larger than 26, it needs to wrap around. The ASCII table doesn't start at 26, I need to add an offset to make this work.
            s[i] = (((s[i] + a) - 65) % 26) + 65;      
        }

        // check if lower case char. determining alpha by omission
        if(islower(s[i]) != 0)                          
        {
            // shift ascii values down to zero, encipher, shift ascii values back up
            s[i] = (((s[i] + a) - 97) % 26) + 97;       
        }
    // print ciphertext
    printf("%c", s[i]); // Test OK
    }

    // return char and return no error
    printf("\n");
    return 0;
}

/* Spec requirements:
Design and implement a program, caesar, that encrypts messages using Caesar’s cipher.
    * Implement your program in a file called caesar.c in a directory called caesar.
    * Your program must accept a single command-line argument, a non-negative integer. Let’s call it k for the sake of discussion.
    * If your program is executed without any command-line arguments or with more than one command-line argument, your program should print an error message of your choice (with printf) and return from main a value of 1 (which tends to signify an error) immediately.
    * You can assume that, if a user does provide a command-line argument, it will be a non-negative integer (e.g., 1). No need to check that it’s indeed numeric.
    * Do not assume that k will be less than or equal to 26. Your program should work for all non-negative integral values of k less than 231 - 26. In other words, you don’t need to worry if your program eventually breaks if the user chooses a value for k that’s too big or almost too big to fit in an int. (Recall that an int can overflow.) But, even if k is greater than 26, alphabetical characters in your program’s input should remain alphabetical characters in your program’s output. For instance, if k is 27, A should not become [ even though [ is 27 positions away from A in ASCII, per asciichart.com; A should become B, since B is 27 positions away from A, provided you wrap around from Z to A.
    * Your program must output plaintext: (without a newline) and then prompt the user for a string of plaintext (using get_string).
    * Your program must output ciphertext: (without a newline) followed by the plaintext’s corresponding ciphertext, with each alphabetical character in the plaintext "rotated" by k positions; non-alphabetical characters should be outputted unchanged.
    * Your program must preserve case: capitalized letters, though rotated, must remain capitalized letters; lowercase letters, though rotated, must remain lowercase letters.
    * After outputting ciphertext, your program should exit by returning 0 from main.
*/
```
