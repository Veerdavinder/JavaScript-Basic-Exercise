//Write a JavaScript program to calculate days left until next Christmas.

var todayDate = new Date();
var nextYear = todayDate.getFullYear()+1;
var nextChristmas = new Date(nextYear,11,25);

if(todayDate.getMonth()==11 && todayDate.getDate()>25){
    nextChristmas.setFullYear(nextChristmas.getFullYear()+1);
}

var differenceInDays = nextChristmas.getTime() - todayDate.getTime();
var oneDayTime= 1000*60*60*24;
var differenceResult = Math.round(differenceInDays/(oneDayTime))

console.log(differenceResult + ' days left until next Christmas');
