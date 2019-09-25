
function fibonnaci(n){
var num1=0;
var num2=1;
for(let i=0;i<=n; i++){
    var num3 = num1+num2;
    num1 = num2;
    num2 = num3;
    console.log(num3)
}

return num3;
}

console.log(fibonnaci(10))