function calculateMoney(ticketsell){
    let remainingResult = ticketsell*120 - (500 + 8*50);
    return remainingResult;
}
console.log(calculateMoney(10));