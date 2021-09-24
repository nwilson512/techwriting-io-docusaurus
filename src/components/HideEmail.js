import React, { Component } from "react"

function HideEmail() {

    function generateEmail() {
        // I don't actually want to call this at render time. It may not be a good idea to make this a react component.
        // I think this is what an event handler is for.

        // a caesar cipher will do for basic obfuscation
        const cipher = [110,  98, 106, 109, 117, 112,  59, 111,  98, 117, 105,  98, 111,  65, 117, 102, 100, 105, 120, 115, 106, 117, 106, 111, 104,  47, 106, 112 ];

        // console.log(cipher);

        // iterate through the cipher array
        for (let index = 0; index < cipher.length; index++) {

            // decrement the enciphered value
            var element = cipher[index];
            element --;

            // transform integer value into character
            var element = String.fromCharCode(element);
            
            // rewrite the deciphered values back into the original array
            cipher[index] = element;
        }

        // recombine array into string
        let decipher = cipher.join('');

        // window.open(decipher, "_self");
        
        window.location.href = decipher;
    }

    return(
        <button
        className="button button--secondary button--lg margin--sm"
        onClick={generateEmail}>
        Email me
        </button>
    )
}

export default HideEmail;


