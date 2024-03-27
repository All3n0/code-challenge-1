const prompt = require("prompt-sync")({ sigint: true });

function speedval(){
//prompts an input of the speed value of the vehicle.
const getSpeed=prompt('Speed value?');
console.log(getSpeed);
//assigns the value of getSpeed to my new variable speed.
let speed=getSpeed;
//if the speed is below zero ,it logs ok meaning the speed is okay.
    if (speed<=70){
    console.log('ok');
//if the speed is okay,the loop is broken.
    return;
}else if(speed>70){
//but if the speed is beyond 70 ,the given speed value is subtracted from seventy
//to know the value above the limit and the diffrence is divided by five
//to obtain the number of points racked up by the driver.
    const points=math.floor((speed-70)/5)
    console.log('points',points);
    if(points>12){
    //if number of points is beyond 12 ,the driver's license is suspended.
        console.log('License Suspended')
        return;
    }
}
}
//This calls the function into action.
speedval();
 
