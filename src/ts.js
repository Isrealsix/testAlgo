// Find 2 numbers, when added, equals the input that was provided
const ages = [1, 4, 2, 10, 3, 5, 7, 6, 8, 9];
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
