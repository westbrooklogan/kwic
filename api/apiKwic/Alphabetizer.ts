import { RequestHandler } from "express";

export const alphabetizer:RequestHandler = (req, res, next) => {
    let stringsToSort = req.body.string_To_Shift;

    if(stringsToSort) {
        const stringSorter:Alphabetizer = new Alphabetizer(); 
        let sortedStrings:string[][] = 
            stringSorter.sortResults(stringsToSort, ">");
        
        res.json(sortedStrings);
    }


}

export class Alphabetizer {
    // this function is for shifting shift results
    sortResults(shiftResults:string[][], sortType:string) {
        let sortResults:string[][] = [];

        if(Array.isArray(shiftResults) && shiftResults.length) {
        // if sorting in ascending order

        if(sortType === ">")
            // for each result array sort the lines
            for(let i:number = 0; i < shiftResults.length; i++) {
                let lines = shiftResults[i];
                // ascending order quick sort
                sortResults.push(
                    this._lexicographicQuickSort(lines, 0, lines.length - 1));
            }

        return sortResults;
        }

        return [];
    }

    // recursive quick sort
    _lexicographicQuickSort(lines:string[], low:number, high:number) {
        // while low and high are not equal
        if(low < high) {
            // puts greater values to right of pivot (high)
            // puts lesser values on right and returns pivots 
            // new position
            let pivot:number = this._partion(lines, low, high);

            // sort each side of the pivot
            this._lexicographicQuickSort(lines, low, pivot - 1);
            this._lexicographicQuickSort(lines, pivot + 1, high);
        }
        
        return lines;
    }
    
    // high acts as the pivot in this sort
    _partion(lines:string[], low:number, high:number) {

        let pivot:string = lines[high].toLowerCase();
        let index = low - 1;

        /* while lines[j] is <= pivot, we need
           to move the bigger numbers closer to
           the pivot and smaller numbers farther 
           from the pivot */
        for(let j:number = low; j < high; j++) {
            let lineToCheck:string = 
                lines[j].toLowerCase();
            
            if(lineToCheck <= pivot) {
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
    _swap(lines:string[], element1:number, element2:number) {
        let temp = lines[element1];
        lines[element1] = lines[element2];
        lines[element2] = temp;
    }
};