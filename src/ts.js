// Find 2 numbers, when added, equals the input that was provided
const ages = [1, 4, 2, 10, 3, 5, 7, 6, 8, 9];
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/**
 * you have an array of elements [1, 4, 2, 10, 3, 5, 7, 6, 8, 9]
 * you have a function that takes in the two parameters  a => array and b => totalSum.
 * The function should find 2 consecutive numbers in the array
 * that when added it is equal to the totalSum(b).
 * findSum([1, 4, 2, 10, 3, 5, 7, 6, 8, 9], 10)
 * @returns 1,9
 * 2,8
 * 3,7
 * 4,6
 */

export const calcADD = (arr, count) => {
  let tempCount = 0;
  let idx = 0;
  let finalRes = [];
  let tempRes = [];
  const newArr = arr.sort((a, b) => a - b);
  let descOrder = newArr.length - 1;

  const adder = () => {
    // initial item
    if (tempCount === 0) tempCount += newArr[idx];
    if (descOrder <= idx) return;
    tempCount += newArr[descOrder];

    if (tempCount < count) tempRes.push(newArr[descOrder]);
    if (tempCount > count) tempCount -= newArr[descOrder];

    if (tempCount === count) {
      tempRes.push(newArr[descOrder]);
      finalRes.push([newArr[idx], ...tempRes]);
      idx++;
      tempRes.length = 0;
      tempCount = 0;
    }

    descOrder--;
    // recurssion
    return adder();
  };
  adder();
  return finalRes;
};

// console.log(calcADD(ages, 7));
