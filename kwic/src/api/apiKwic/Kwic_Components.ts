import { parse } from "querystring";

// Parses the user input
export class Parser {
    /****************
     *    methods   *
     ****************/

     // constructor that assigns user input
    // parses the string into an array of words for
    // shifting
    parse(userInput:string) {
        for(let i:int = 0; i < userInput.length - 1; i++)
        {
            if(userInput
        }
    }
};

// parses user input
export function Parse(userInput:string) {
    // parse string and return
    return userInput.split(" ");
}

// shifts the parsed input
export function cyclic_Shift(parsedInput:string[]) {
    // shift results
    let shiftResults = [];

    // number of words to shift
    const shiftLength = parsedInput.length;

    for(let i = 0; i < shiftLength; i++) {
        // store the current order of words
        shiftResults.push(parsedInput);
        // get the first word from the list
        const firstWord = parsedInput.shift();
        parsedInput.push(firstWord);
    }
};

// cyclically shifts words from front to
// end of string and stores the result each time
export class Shifter {
    /**************
     * attributes *
     **************/

    _parsedString: string

     /****************
     *    methods   *
     ****************/
    constructor(parsedData:string) {
        this._parsedString = parsedData;
    }

    async shift() {
        let 
    }
};

// sorts the results from the shifter
export class Alphabetizer {
    /**************
     * attributes *
     **************/

     /****************
     *    methods   *
     ****************/
};