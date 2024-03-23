# CODE-CHALLENGE-1
## 1.GRADE GENERATOR
 In this first project ,I have tried to make a programm that takes in a user's mark scored and returns a grade based of the inputed score
 ### EXPLANATION
 First the user is prompted to input a score .
 Once the user inputs the score ,it is logged into the console.
 In the first if we check if the value entered in not a number ,above 100 or below zero ;If one of these conditions is met it logs an invalid and requests the user to input a valid value.
 In the second if grade B is returned if the score entered is between 60 and 79.
 In the third if,grade C if the score entered is between 49 and 59.
 In the fourth if, grade D is returned if the score lies between 40 and 48.
 In the final if ,it returns grade E.
 
 Finally the function is called.
 
## 2.SPEED DETECTOR.
Here, I have created a programme that takes in the speed of a vehicle and determines if the speed is fine or if the speed is beyond the speed limit and assigns points for every five units above the speed limit.

### EXPLANATION.
First,I made a function called speedVal  and it made a constant called getspeeed that prompts the user to input the speed of the car and logs it.
Then,if the speed is below 70 or is 70 it returns 'ok'.
If the speed is above 70 ,70 is subtracted from the speed and the diffrence is divided by five to obtain the number of points.
If the  number of points exceedes 12 , it returns that the liscense has been suspended.
the function is then called at the bottom of the code.

## 3.SALARY CALCULATOR.
In this function ,I am trying to calculate an employee's net salary as well as taxes and NHIF deductions depending on how much the employee earns.

### EXPLANATION.
First,the user is prompted to input  both the basic salary without benefits and the total amounts of benefits he or she earns and logs the values into the console.
Next,the user is prompted to input the tier in which they are in with NSSF .
The sum of basic salary and the benefits which had been made numbers using parsefloat , is assigned to our new constant gross salary which represents what the user would earn if no deductions were made .
What follows is a function named taxes in which we refer to other functions to obtain the values of PAYE and NHIF deductions.The values are then logged into the cosole.
The value of total taxes is then calculated by adding the values of PAYE and NHIF deductions logged and the value of taxes is then logged .
To calculate the netsalary , the diffrence is calculated between the value of basic salary and the taxes value and the value is logged into the console.
Afterwards, I created a function called getTaxAmount in which the value of paye deduction is calculated.It operates with if functions to return various values depending on which  requirements were met.The return value is logged in the Taxes fuction above as the PAYE.
Then, we have a function called getNHIFAccount  that determines the deduction that will be made to cater for NHIF service. It returns diffrent values depending on the conditions met which is logged in under the function Taxes as the NHIF deduction.
Finally , using the information entered by the user regarding which NSSf tier they lie in, we return a difrrent value and once again logged into the console under the function taxes

Finally the Taxes function is called.
## AUTHOR
Allan Too.
## LICENSE
APPROVED?!










