function checkCashRegister(price, cash, cid) {
    let change;
    let availableCash = 0;
    if(price > cash){
        return {
            status: "CLOSED"
        }
    }
          
    let index = cid.length - 1;
    
    cid.map((cash) => {
      availableCash += cash[1];
    });

    console.log(availableCash);

    if(cash - price > availableCash){
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    // Here is your change, ma'am.
    return change;
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
//   setInterval(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), 1000);
  setInterval(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ]), 1000);
  
