/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list.
 • Print a new set of invitation messages, one for each person in your list.*/


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