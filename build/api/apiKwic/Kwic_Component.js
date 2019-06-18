"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Parses the user input
// and keeps the original string input
class InputParser {
    constructor() {
        this._parsedString = [];
    }
    /****************
     *    methods   *
     ****************/
    // parses the string into an array of words for
    // shifting
    /****************
     *    methods   *
     ****************/
    // parses the string into an array of words for
    // shifting
    parse(userInput) {
        // make sure there is userinput
        if (userInput) {
            // parse each line then parse each line by words
            for (let current = 0, firstChar = 0; current < userInput.length; current++) {
                // line parse
                if (userInput.charAt(current) === "$") {
                    let newLine = userInput.substring(firstChar, current);
                    // word parse
                    let parsedString = newLine.split(" ");
                }
            }
            // if there was content return
            if (this._parsedString)
                return this._parsedString;
            return null;
        }
        return null;
    }
}
exports.InputParser = InputParser;
;
// for combining string back together
class Combiner {
    /****************
     *    methods   *
     ****************/
    // combines lines back together
    combine(parsedString) {
        let combinedString = [];
        // make sure there is content
        if (parsedString) {
            let combinedLine = "";
            // combining
            for (let i = 0; i < parsedString.length - 1; i++) {
                let parsedStr = parsedString[i];
                // if there is content
                // add to a string with a space to separate
                // lines in the combined string
                if (parsedStr && parsedStr.length != 0) {
                    for (let j = 0; j < parsedStr.length - 2; j++)
                        combinedLine += (parsedStr + " ");
                    combinedLine += parsedString[parsedString.length - 1];
                    // push to array that holds the lines
                    if (combinedLine)
                        combinedString.push(combinedLine);
                }
            }
            // if content return to the user
            if (combinedString)
                return combinedLine;
            return null;
        }
        return null;
    }
}
exports.Combiner = Combiner;
// this is lines are stored after being parsed
class LineStorage {
    constructor() {
        this._lines = [];
    }
    /****************
     *    methods   *
     ****************/
    // changes a character in the storage
    setChar(lineNumber, wordNumber, charNumber, charToAdd) {
        // get line to chage
        let lines = this._lines[lineNumber][wordNumber];
        // can't replace character by index in javascript
        // have to build new string out of substring and new character
        this._lines[lineNumber][wordNumber] =
            lines.substring(0, charNumber - 1) +
                charToAdd +
                lines.substring(charNumber + 1, lines.length - 1);
    }
    // retrieve a character
    char(lineNumber, wordNumber, charNumber) {
        return this._lines[lineNumber][wordNumber][charNumber];
    }
    // add a character
    addchar(lineNumber, wordNumber, charToAdd) {
        this._lines[lineNumber][wordNumber] += charToAdd;
    }
    // get the number of lines
    lines() {
        return this._lines.length;
    }
    // get the number of words
    word(lineNumber) {
        return this._lines[lineNumber].length;
    }
}
exports.LineStorage = LineStorage;
// this is where the lines are cyclically shifted
class Shifter {
    constructor() {
        /* this is used to remove from front
           of line and add to back of line
           each queue in the array is for
           the words of each line */
        this._lines = [];
    }
    /****************
     *    methods   *
     ****************/
    // calls the setup and shift functions
    setupAndShift(lines) {
        // set up the queue
        if (this.setup(lines)) {
            // cyclical shift
            let shiftResults = this.shift();
            if (shiftResults)
                return shiftResults;
            return null;
        }
        return null;
    }
    // setup the queue with the lines
    setup(lines) {
        // make sure there is content
        if (lines) {
            // add each word of each line to the queue
            for (let i = 0; i < lines.length; i++)
                for (let j = 0; j < lines[i].length; j++)
                    this._lines[i].enqueue(lines[i][j]);
            if (this._lines)
                return true;
            return false;
        }
        return false;
    }
    // cyclical shift
    shift() {
        // holds the results for each line
        let shiftResults = [];
        // make sure there is content
        if (this._lines) {
            // shift happens here
            for (let i = 0; i < this._lines.length; i++) {
                let lineToShift = this._lines[i];
                /* store the current word order as a result
                   the take remove first word and add it to
                   the queue */
                for (let j = 0; j < lineToShift.length; j++) {
                    shiftResults[i][j] = lineToShift.toArray();
                    let wordToShift = lineToShift.dequeue();
                    lineToShift.enqueue(wordToShift);
                }
            }
            if (shiftResults)
                return shiftResults;
            return [];
        }
        return [];
    }
}
exports.Shifter = Shifter;
// sorts the lines
class Alphabetize {
    // this function is for shifting shift results
    sortResults(shiftResults, sortType) {
        // if sorting in ascending order
        if (sortType === ">")
            // for each result array sort the lines
            for (let i = 0; i < shiftResults.length; i++) {
                let lines = shiftResults[i];
                // ascending order quick sort
                this._lexicographicQuickSort(lines, 0, lines.length - 1);
            }
    }
    // recursive quick sort
    _lexicographicQuickSort(lines, low, high) {
        // while low and high are not equal
        if (low < high) {
            // puts greater values to right of pivot (high)
            // puts lesser values on right and returns pivots 
            // new position
            let pivot = this._partion(lines, low, high);
            // sort each side of the pivot
            this._lexicographicQuickSort(lines, low, pivot - 1);
            this._lexicographicQuickSort(lines, pivot + 1, high);
        }
    }
    // high acts as the pivot in this sort
    _partion(lines, low, high) {
        let pivot = lines[high];
        let index = low - 1;
        /* while lines[j] is <= pivot, we need
           to move the bigger numbers closer to
           the pivot and smaller numbers farther
           from the pivot */
        for (let j = 0; j < high; j++) {
            if (lines[j] <= pivot) {
                index++;
                lines = this._swap(lines, index, j);
            }
        }
        // place pivot in the right spot
        index++;
        lines = this._swap(lines, index, high);
        return index;
    }
    // swap elements in an array
    _swap(lines, element1, element2) {
        let temp = lines[element1];
        lines[element1] = lines[element2];
        lines[element2] = temp;
        return lines;
    }
}
exports.Alphabetize = Alphabetize;
