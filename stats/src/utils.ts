// Parse date to  ['28','10','2018'] parseInt takes in a string and return a number [2018,10,28]
export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2018
  const dateParts = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });
  //datePrts[2] is the year,dateParts[1] is the month
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
