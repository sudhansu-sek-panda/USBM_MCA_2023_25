let age = 75;
function scope(age_number) {
if(age_number >=18 ){
    console.log(`The age is ${age_number} and adult`);
    
}

else if(age_number >= 60){
    console.log(`The age is ${age_number} and senior citizen`);
}
else{
    console.log(`This is a minor`);
}
}

scope(age);