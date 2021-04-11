import { computeTime, executeTestSuite, TESTS } from "./testing";
import Chartkick from "chartkick";
import "chartkick/chart.js";

//////////////// AQUÍ TU ALGORITMO

function removeAdjacentDuplicates(nums: Array<number>): Array<number> {
return [];
}

///////////////////////////////////////////////
// COMPROBACIÓN DEL ALGORITMO
///////////////////////////////////////////////

console.clear();

const ALGORITHM: (array: Array<number>) => Array<number> = removeAdjacentDuplicates;

(function testAlgorithm() {
    executeTestSuite(ALGORITHM);

    new Chartkick.LineChart(
        document.getElementById("chart"),
        TESTS.map(t => computeTime(ALGORITHM, t.input)),
        { xtitle: "Items count", ytitle: "milliseconds" }
    );
})();
