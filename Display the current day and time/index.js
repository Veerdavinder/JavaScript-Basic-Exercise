//Write a JavaScript program to display 
//the current day and time in the following format.
//Sample Output : Today is : Tuesday. 
//Current time is : 10 PM : 30 : 38

var date = new Date();
var day_array = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday','Sunday'];

var day = date.getDay();
console.log("Sample Output : Today is :",day_array[day]);

var hours = date.getHours();
var minutes= date.getMinutes();
var second = date.getSeconds();

var prepand = (hours >= 12) ? "PM" : "AM";
hours = (hours>= 12)? hours-12: hours;

if(hours === 0 && prepand === 'PM') {
    if(minutes === 0 && second === 0 ){
        hours = 12 ;
        prepand = 'Noon';
    }
    else{
        hours = 12;
        prepand = ' PM';
    }
}

if(hours === 0 && prepand === 'AM')
{
    if(minutes === 0 && second === 0 ){
        hours = 12 ;
        prepand = 'Midnight';
    }
    else{
        hours = 12;
        prepand = ' AM';
    }
}

console.log("Current time is : "+ hours + prepand+ ": " + minutes + " : " + second)


