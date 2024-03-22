const prompt = require("prompt-sync")({ sigint: true });
//prompts user to input their basic salary.The parse float converts the value to a number so that we can get sum.
const basicSalary=parseFloat(prompt('How much do you earn in a month?'));
    console.log ('Basic Salary',basicSalary);
//prompts user to input their total benefits and assigns the value to benefits.
const benefits=parseFloat(prompt('How much do your benefits sum up to?'));
    console.log('Benefits',benefits);
//prompts user to input what tier they lie in in Nssf and assigns it to tier.
const tier=prompt('What tier are you in with Nssf?');
//calculates the sum of basic salary and total benefits and assigns it as gross salary. 
const grossSalry=(basicSalary)+ (benefits);
    console.log(grossSalry);
//This function is used to calculate the taxes and also get the NHIF,NSSF and 
//and net salary.
function Taxes(){
    //Here,the value of PAYE is outsourced from another function getTaxAmount.
    let PAYE=getTaxAmount();
        console.log('PAYE',PAYE);
    //Here,we get the NHIF prices from another function called getNHIAmount.
    let NHIF=getNHIFAmount();
        console.log('NHIF',NHIF);
    //Here,we check the tier of NSSF from the function getNSSFAmount.
    let NSSF=getNSSFamount();
        console.log('NSSF',NSSF);
    //Here we assign the variable taxes with the value of the sum of the NHIF and PAYE deductions.
    let taxes=PAYE+NHIF;
        console.log('Total Taxes',taxes);
    //Here we get the net salary by subtracting the total value of taxes from the gross Salary.
    let netSalary=basicSalary-taxes;
        console.log('Net Salary',netSalary);
}
//In this function we get the PAYE amount depending on the gross salary earned.
function getTaxAmount(){
    if(grossSalry<24000){
        return grossSalry*10/100;
    }else if(grossSalry>=24000&&grossSalry<=32333){
        return grossSalry*25/100;
    }else if (grossSalry>=32334&&grossSalry<=500000){
        return grossSalry*30/100;
    
    }else if(grossSalry>=500001&&grossSalry<=800000){
        return grossSalry*32.5/100;
    }else if(grossSalry>800000){
        return(grossSalry*35/100);
    }
}
//In this function we obtain the NHIF deduction depending on the gross salary earned.
function getNHIFAmount(){
    if (grossSalry<=5999){
        return 150;
    }else if (grossSalry>=6000,grossSalry<=7999){
        return 300;
    }else if (grossSalry>=8000,grossSalry<=11999){
        return 400;
    }else if (grossSalry>=12000,grossSalry<=14999){
        return 500;
    }else if (grossSalry>=15000,grossSalry<=19999){
        return 600;
    }else if (grossSalry>=20000,grossSalry<=24999){
        return 750;
    }else if (grossSalry>=25000,grossSalry<=29999){
        return 850;
    }else if (grossSalry>=30000,grossSalry<=34999){
        return 900;
    }else if (grossSalry>=35000,grossSalry<=39999){
        return 950;
    }else if (grossSalry>=40000,grossSalry<=44999){
        return 1000;
    }else if (grossSalry>=45000,grossSalry<=49999){
        return  1100;
    }else if (grossSalry>=50000,grossSalry<=59999){
        return 1200;
    }else if (grossSalry>=60000,grossSalry<=69999){
        return 1300;
    }else if (grossSalry>=70000,grossSalry<=79999){
        return 1400;
    }else if (grossSalry>=80000,grossSalry<=89999){
        return 1500;
    }else if (grossSalry>=90000,grossSalry<=99999){
        return 1600;
    }else if(grossSalry>=100000){
        return 1700;
    }
}
//Here we conclude the NSSF tier based on the user input. 
function getNSSFamount(){
    if(tier==='1'){
        return 'Tier 1';
    }else if(tier==='2'){
        return 'Tier 2';
    }else{
        return 'Invalid Entry.'
    }

}

//The function is then called to bring it to work.
Taxes();