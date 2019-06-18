"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphabetizer = (req, res, next) => {
    let stringsToSort = req.body.string_To_Shift;
    if (stringsToSort) {
        const stringSorter = new Alphabetizer();
        let sortedStrings = stringSorter.sortResults(stringsToSort, ">");
        res.json(sortedStrings);
    }
};
class Alphabetizer {
    // this function is for shifting shift results
    sortResults(shiftResults, sortType) {
        let sortResults = [];
        if (Array.isArray(shiftResults) && shiftResults.length) {
            // if sorting in ascending order
            if (sortType === ">")
                // for each result array sort the lines
                for (let i = 0; i < shiftResults.length; i++) {
                    let lines = shiftResults[i];
                    // ascending order quick sort
                    sortResults.push(this._lexicographicQuickSort(lines, 0, lines.length - 1));
                }
            return sortResults;
        }
        return [];
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
        return lines;
    }
    // high acts as the pivot in this sort
    _partion(lines, low, high) {
        let pivot = lines[high].toLowerCase();
        let index = low - 1;
        /* while lines[j] is <= pivot, we need
           to move the bigger numbers closer to
           the pivot and smaller numbers farther
           from the pivot */
        for (let j = low; j < high; j++) {
            let lineToCheck = lines[j].toLowerCase();
            if (lineToCheck <= pivot) {
                index++;
                this._swap(lines, index, j);
            }
        }
        // place pivot in the right spot
        index++;
        this._swap(lines, index, high);
        return index;
    }
    // swap elements in an array
    _swap(lines, element1, element2) {
        let temp = lines[element1];
        lines[element1] = lines[element2];
        lines[element2] = temp;
    }
}
exports.Alphabetizer = Alphabetizer;
;
