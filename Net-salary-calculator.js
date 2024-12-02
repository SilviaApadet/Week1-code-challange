//Declaration of Basic Salary
let basic_salary;

//Function for PAYE deductions
const PAYEdeductions = function (basic_salary){
    if(basic_salary > 800000){
        return (basic_salary * 0.35);
    }else if (basic_salary >= 500001 && basic_salary <= 800000){
        return (basic_salary * 0.325);
    }else if(basic_salary >=32334 && basic_salary <= 500000){
        return(basic_salary * 0.3);
    }else if(basic_salary >= 24001 && basic_salary <= 32333){
        return(basic_salary * 0.25);
    }else if(basic_salary <= 24000){
        return(basic_salary * 0.1);
    }else return 'Input Basic Salary'
}
//Function that calculates nhif deductions,
const nhif_deductions +function (basic_salary){
    if (basic_salary >= 100000) {
        return 1700;
} } else if (basic_salary >= 90000 && basic_salary <= 99999) {
    return 1600;
} else if (basic_salary >= 80000 && basic_salary <= 89999) {
    return 1500;
} else if (basic_salary >= 70000 && basic_salary <= 79999) {
    return 1400;
} else if (basic_salary >= 60000 && basic_salary <= 69999) {
    return 1300;
} else if (basic_salary >= 50000 && basic_salary <= 59999) {
    return 1200;
} else if (basic_salary >= 45000 && basic_salary <= 49999) {
    return 1100;
} else if (basic_salary >= 40000 && basic_salary <= 44999) {
    return 1000;
} else if (basic_salary >= 35000 && basic_salary <= 39999) {
    return 950;
} else if (basic_salary >= 30000 && basic_salary <= 34999) {
    return 900;
} else if (basic_salary >= 25000 && basic_salary <= 29999) {
    return 850;
} else if (basic_salary >= 20000 && basic_salary <= 24999) {
    return 750;
} else if (basic_salary >= 15000 && basic_salary <= 19999) {
    return 600;
} else if (basic_salary >= 12000 && basic_salary <= 14999) {
    return 500;
} else if (basic_salary >= 8000 && basic_salary <= 11999) {
    return 400;
} else if (basic_salary >= 6000 && basic_salary <= 7999) {
    return 300;
} else if (basic_salary <= 5999) {
    return 150;
} else return 'Input Salary!'
}

//function to calculate NSSF
const nssf_deductions = function (basic_salary){
    if (basic_salary <=7000){
        return (basic_salary * 0.06);
    }
}
const nssf_deductions = function (basic_salary){
    if (basic_salary  7001 && basic_salary <= 36000) {
        return basic_salary * 0.06;)
    
}else {return 0 }