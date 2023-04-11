"use strict"

function solveEquation(a, b, c) {
    let arr = [];
    let D;
    // код для задачи №1 писать здесь
  
    D = b**2 - 4*a*c;
  
    if (D === 0){
      arr.push(-b/(2*a));
    }
    else if (D > 0){
      arr.push((-b + Math.sqrt(D) )/(2*a));
      arr.push((-b - Math.sqrt(D) )/(2*a));
    }

    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let totalAmount;
  let monPercet;
  let body;
  let monPayment;

  monPercet = percent/100/12;
  body = amount - contribution;

  monPayment = body * (monPercet + (monPercet / (((1 + monPercet)**countMonths)-1)));
  totalAmount = monPayment * countMonths;

  return Number(totalAmount.toFixed(2));
  
}