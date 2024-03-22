const prompt = require("prompt-sync")({ sigint: true });

//prompt user to provide marks scored and  log it into the console.
function getMarks(){
const mark=prompt('What was your score?');
    console.log(mark)
    //breaks the loop if the value entered is above 100 ,below 0 or not a number.
    if (mark>100||mark<0||isNaN(mark)){
        console.log('Invalid ;Please enter a valid number.');
        return;
    }
    //return the grade as an A if the mark is above 79.
    else if(mark>79&&mark<=100){
        console.log('That\'s an A!Congratulations!');
        return;
    }
    //return the grade as a B if the mark is between 60 and 79.
    else if(mark>=60&&mark<=79){
        console.log('You score a B.There is room for improvement.');
        return;
    }
    //return the grade as a C if the mark is between 49 and 59
    else if(mark>=49&&mark<=59){
        console.log('You score a C.');
        return;
    }
    //returns the grade as a D if the mark is between 40 and 48.
    else if(mark>=40&& mark<=48){
        console.log('D is your score.Strive more.');
        return;
    }
    //returns the grade as an E if the mark is below 40. 
    else if (mark<40&&mark>=0){
        console.log('An E!Work Hard')
        return;
    }

}
//This calls the function into action.
getMarks();