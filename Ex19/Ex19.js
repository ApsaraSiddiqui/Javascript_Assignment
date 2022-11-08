/*Dinner Guests: Working with one of the programs
 from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.*/


 
var Guest=["Ali","Sara","Hira","Sana","Adil"]

for(var i=0;i<Guest.length;i++)
{
    console.log("I would like to invite",Guest[i] ,"to dinner")
}

console.log("The invited guest",Guest[1] ,"will not come to the dinner")
delete Guest[1]

Guest[1]="Haya"
Guest.push("Sarim")

for(var i=0;i<Guest.length;i++)
{
    console.log("I would like to invite",Guest[i] ,"to dinner")
}

add(Guest,0,"Abdul Qadir")
Guest.push("Nimra")
add(Guest,Math.floor(Guest.length/2),"Sidra")



for(var i=0;i<Guest.length;i++)
{
    console.log("I would like to invite",Guest[i] ,"to dinner")
}


function add(array,index,...elementsArray)
{
    array.splice(index,0,...elementsArray)
}

console.log("Total number of Guests invited:" +Guest.length)