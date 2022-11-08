/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. 
Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
 Print your list to make sure you actually have an empty list at the end of your program.*/


 
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


console.log("----------Only two Guest others are deleted---------")
while(Guest.length>2)
{
    var deleteGuest=Guest.pop()
    console.log("I am sorry ",deleteGuest ,"I cann't invite you to dinner")
}


console.log("----------Remaining two Guests---------")
for(var i=0;i<Guest.length;i++)
{
console.log("You are",Guest[i],", still invited to dinner ")}




console.log("----------Empty List---------")
for(var i=Guest.length;i>0;i++)
{
    var deleteGuest=Guest.pop()
    console.log("List is empty: ",deleteGuest[i] )
}
