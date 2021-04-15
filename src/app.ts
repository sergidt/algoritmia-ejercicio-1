import Chartkick from 'chartkick';
import 'chartkick/chart.js';
import { computeTime, executeTestSuite, TESTS } from './testing';

function removeAdjacentDuplicates(nums: Array<number>) {
    let lastNum = null;
    let position = 0;

    for (const c of nums) {
        if (lastNum !== c) {
            nums[position++] = c;
            lastNum = c;
        }
    }
    return nums.slice(0, position);
}

////////////////

function merge(left, right) {
    while (left.length && right.length) {
        if (left[left.length - 1] !== right[0]) left.push(right.shift());
        else right.shift();
    }
    return [...left, ...right];
}

function removeAdjacentDuplicatesRec(unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    } else if (unsortedArray.length === 2) {
        return Array.from(new Set(unsortedArray));
    }

    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);

    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    // Using recursion to combine the left and right
    return merge(
        removeAdjacentDuplicatesRec(left),
        removeAdjacentDuplicatesRec(right)
    );
}

///////////////////////////////////////////////
// COMPROBACIÓN DEL ALGORITMO
///////////////////////////////////////////////

console.clear();

const ALGORITHM: (array: Array<number>) => Array<number> = removeAdjacentDuplicatesRec;

(function testAlgorithm() {
    executeTestSuite(ALGORITHM);

    new Chartkick.LineChart(
        document.getElementById('chart'),
        TESTS.map(t => computeTime(ALGORITHM, t.input)),
        { xtitle: 'Items count', ytitle: 'milliseconds' }
    );
})();
