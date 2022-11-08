/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. Call the function three times,
 using a different number of arguments each time.*/


 
 function sandwich(x)
 {
    for(let i=0;i<x.length;i++)
    {
        console.log(x[i],`,order a sandwich  `,arguments.length)
    }
 }

 let names=["Ali","Adil"]
 sandwich(names)

 let namee=["Sara","Sana"]
 sandwich(namee)

 let nam=["Kiran","Moiz"]
 sandwich(nam)
