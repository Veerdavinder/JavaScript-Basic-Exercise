//Write a JavaScript program to get the current date.  
//Expected Output : 
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var date = new Date();

var year = date.getFullYear();
var month = date.getMonth()+1;
var dd = date.getDate();

date = month+ '-' + dd + '-' + year;
console.log("mm-dd-yyyy",date);

date = month+ '/' + dd + '/' + year;
console.log("dd/mm/yyyy",date);

date = dd+'-'+month+'-'+year;
console.log("dd-mm-yyyy",date);

date = dd+'/'+month+'/'+year;
console.log("dd/mm/yyyy",date);