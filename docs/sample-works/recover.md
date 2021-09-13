---
title: Recover
course: CS50
lang: C
description: Parses an unformatted block of deleted data, looking for deleted images, and restores them.
---
```
#include <stdio.h>
#include <stdlib.h>

// create buffer array to store raw file contents.
unsigned char buffer[512];
char fileName[7];
FILE *filePtr = 0;

int main(int argc, char *argv[])
{
    // remember filenames
    char *rawFile = argv[1];

    // open input file
    FILE *inFile = fopen(rawFile, "r");

    // checking command line arguments
    if(arc != 2)
    {
        fprintf(stderr, "Incorrect number of command line arguments");
        return 1;
    }

    // making sure file is able to be opened
    if(inFile == NULL)
    {
        fprintf(stderr,"Cannot open file");
        return 2;
    }

    // initializing variables for the do/while loop
    int n;
    int doCount = 0;

    // loop to iterate through the raw file
    do
    {

        // read 512 bytes into a buffer
        n = fread(buffer, 1, 512, inFile);

        // gating any further logic behind a block check
        if (n == 512)
        {
            // look for start of new jpeg
            if( buffer[0] == 0xff &&
                buffer[1] == 0xd8 &&
                buffer[2] == 0xff &&
                (buffer[3] & 0xf0) == 0xe0)
            {

                // checking to see if we've started writing any files yet
                if(doCount > 0)
                {
                    // close file here
                    fclose(filePtr);
                }

                // incrementing file counter
                doCount++;

                // printing file counter into an array of characters for a filename
                sprintf(fileName, "%d.jpg", doCount);

                // writing a file with the filename created above
                filePtr = fopen(fileName, "w");
            }

            // a gate to make sure we don't write any data until after we encounter a jpg header, create a file to start writing to
            if(doCount > 0)
            {
                fwrite(buffer, 1, 512, filePtr);
            }
        }

    }
    // running while there are blocks
    while(n == 512);

    // close the raw file
    fclose(inFile);

    // success
    return 0;
}
```