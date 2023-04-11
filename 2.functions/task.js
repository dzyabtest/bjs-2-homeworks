function getArrayParams(...arr) {
  let min = Infinity, max = -Infinity, sum, avg;

  // Ваш код
  min = arr[0];
  max = arr[0];
  sum = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }

  avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum;

  // Ваш код
  sum = 0;

  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  let max, min;

  if (arr.length == 0) {
    return 0;
  }

  max = -Infinity;
  min = Infinity;
  for (let i = 0; i < arr.length; i++){
    if (max < arr[i]){
      max = arr[i];
    }
    if (min > arr[i]){
      min = arr[i];
    }
  }

  return Math.abs(max - min);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement, sumOddElement;

  if (arr.length == 0) {
    return 0;
  }

  sumEvenElement = 0;
  sumOddElement = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
      sumEvenElement += arr[i];
    }
    if (arr[i] % 2 != 0){
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement, countEvenElement;

  if (arr.length == 0) {
    return 0;
  }

  sumEvenElement = 0;
  countEvenElement = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
      sumEvenElement += arr[i];
      countEvenElement +=1;
    }
  }
  return sumEvenElement/countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult;
  const funcResult =[];

  maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++){
    funcResult[i] = func(...arrOfArr[i]);

    if (funcResult[i] > maxWorkerResult) {
      maxWorkerResult = funcResult[i];
    }
  }

  return maxWorkerResult;
}
