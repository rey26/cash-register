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

    if(cash - price > availableCash){
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }

    function convertMoney(cash){
        switch (cash[0]){
            case "ONE HUNDRED":
                return 100;
            case "TWENTY":
                return 20;
            case "TEN":
                return 10;
            case "FIVE":
                return 5;
            case "ONE":
                return 1;
            case "QUARTER":
                return 0.25;
            case "DIME":
                return 0.1;
            case "NICKEL":
                return 0.05;
            case "PENNY":
                return 0.01;
            default:
                return 0; 
        }
    }

    console.log(convertMoney(cid[3]));

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
  setInterval(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), 1000);
  
