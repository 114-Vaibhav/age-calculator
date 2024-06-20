let btn = document.getElementById('btn')
let dateInput= document.getElementById('input');
let dateInput2=document.getElementById('input2');
document.getElementById('btn').addEventListener("click",function(){
    var start = new Date(dateInput.value);
    var end = new Date(dateInput2.value);
    // console.log(dateInput2+"hi")
    // if(dateInput2.value!="NaN NaN NaN") end=new Date(dateInput2.value);
    
    // Calculate the difference in milliseconds
    var difference = end - start;

    // Convert the difference to years, months, and days
    var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    difference -= years * 1000 * 60 * 60 * 24 * 365.25;
    
    var months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.4375));
    difference -= months * 1000 * 60 * 60 * 24 * 30.4375;
    
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let out="You are "+years+" year, "+months+" months and "+days+" days old."
    document.getElementById('output').innerHTML=out;  
    console.log(years+" "+months+" "+days)   

});

let dateInput3= document.getElementById('input3');
document.getElementById('btn2').addEventListener("click",function(){
    var start = new Date(dateInput3.value);
    var end = new Date();
    // console.log(dateInput2+"hi")
    // if(dateInput2.value!="NaN NaN NaN") end=new Date(dateInput2.value);
    
    // Calculate the difference in milliseconds
    var difference = end - start;

    // Convert the difference to years, months, and days
    var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    difference -= years * 1000 * 60 * 60 * 24 * 365.25;
    
    var months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.4375));
    difference -= months * 1000 * 60 * 60 * 24 * 30.4375;
    
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let out="You are "+years+" year, "+months+" months and "+days+" days old."
    document.getElementById('output2').innerHTML=out;  
    console.log(years+" "+months+" "+days)   

});
// document.getElementById('btn').addEventListener("click",function(){
    

// dateInput.addEventListener('input', function(event) {
//     const inputValue = event.target.value; // Get the date value
//     const dateEntered = new Date(inputValue); // Convert to a JavaScript Date object
    
//     var start = new Date(dateEntered);
//     var end = new Date();
    
//     // Calculate the difference in milliseconds
//     var difference = end - start;

//     // Convert the difference to years, months, and days
//     var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
//     difference -= years * 1000 * 60 * 60 * 24 * 365.25;
    
//     var months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.4375));
//     difference -= months * 1000 * 60 * 60 * 24 * 30.4375;
    
//     var days = Math.floor(difference / (1000 * 60 * 60 * 24));

//     console.log(years+" "+months+" "+days)
   
// });


// })