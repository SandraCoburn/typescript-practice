"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
// Parse date to  ['28','10','2018'] parseInt takes in a string and return a number [2018,10,28]
exports.dateStringToDate = function (dateString) {
    // 28/10/2018
    var dateParts = dateString.split('/').map(function (value) {
        return parseInt(value);
    });
    //datePrts[2] is the year,dateParts[1] is the month
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
