let total_bill = 500;
let discount_strat_price = 500;
function discount(tb,dsp){
if(tb>=500){
    console.log(`The total bill is ${tb} and you are eligible for discount`);
}
else{
    console.log(`The total bill is ${tb}! Sorry you're not eligible`);
}
}
discount(total_bill,discount_strat_price);