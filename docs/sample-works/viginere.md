---
title: Viginere
course: CS50
lang: C
description: Takes a string input and enciphers it using Viginere's cipher.
---
```
#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

int main(int argc, string argv[])                   // take the cipher integer as a command line arg
{   

    string k = argv[1];                             // pulling the string out of the argv array

    if(argc != 2)                                   // check if there are any command line arguments
                                                    // if there are no command-line arguments or too many, return an error code 1
    {
        printf("ERROR: invalid command line argument\n");
        return 1;
    }

    for(int n=0; n<strlen(k); n++)
    {
        if(isalpha(k[n]) == 0)
        {
            printf("ERROR: invalid command line argument\n");
            return 1;
        }
    }

    int l[strlen(k)];

    for(int h = 0; h<strlen(k); h++)                // going through the key array
    {
        k[h] = toupper(k[h]);                       // standardizing the key
        k[h] = k[h];                                // pulling the ascii out to make the key cooincide with 0-26 values
        l[h] = (int) k[h] - 65;                     // I may need to convert the string in k[] to an int

        // printf("this is the integer value of my key: %i\n", l[h]);   // just checking
    }

    printf("plaintext: ");                          // prompt for plaintext
    string s = get_string();                        // get string

    int j = 0;

    printf("ciphertext: ");
    for(int i = 0; i<strlen(s); i++)
    {
        // convert plaintext to ciphertext, ensure that numbers are unchanged, ensure that case is preserved
        // I think we want to take the cipher key string (array), convert it to 0-26 values in an array, then iterate through both
        // the string to be enciphered s[i], and the key array k[j] since the key array, may be shorter than the string to be enciphered,
        // we will want to take the modulus of the key array length (strlen() )
        // we also want to decouple k[j] from incrementing with i, because we don't advance the cipher key on non-alpha characters



        if(isupper(s[i]) != 0)                          // checking for upper case characters
        {
            s[i] = (((s[i] + l[j]) - 65) % 26) + 65;    // if the cipher is larger than 26, it needs to wrap around. I think the solution
                                                        // is going to be algebraic, not arithmetic. the ASCII table doesn't start at 26, I need to modify the modulo to make this work.
        }

        if(islower(s[i]) != 0)                          // check if lower case char. determining alpha by omission
        {
            s[i] = (((s[i] + l[j]) - 97) % 26) + 97;    // shift ascii values down to zero, encipher, shift ascii values back up
        }

        if(isalpha(s[i]) != 0)                          // increment j only if the character in s[i] is alpha
        {
            j++;
            j = j % strlen(k);
        }


    // print ciphertext
    printf("%c", s[i]); // Test OK
    }

    // return char and return no error
    printf("\n");
    return 0;
}
```