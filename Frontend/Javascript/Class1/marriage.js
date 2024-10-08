let age=23, gender='M', fix_date=22;
function marriage_fix(m_age,m_gender,f_date){
    if(m_age>=f_date && m_gender == 'M'){
console.log(`The age is ${age} and the gender is ${gender} and is eligible for marriage`);
    }
    else{
        console.log(`The age is ${age} and the gender is ${gender} Sorry! is not eligible for marriage`);  
    }
}

marriage_fix(age,gender,fix_date)