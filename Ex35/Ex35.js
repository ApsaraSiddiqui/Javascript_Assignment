/*Animals: Think of at least three different animals that have a common characteristic.
 Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
  • Modify your program to print a statement about each animal, such as A dog would make a great pet.
   • Add a line at the end of your program stating what these animals have in common. You could print a sentence 
   such as Any of these animals would make a great pet!
*/

let animals=["cat","dog","rabbit"]

for(let i=0;i<animals.length;i++)
{
    console.log(animals[i])
}

for(let i=0;i<animals.length;i++)
{
    console.log(animals[i],"would make a great pet")
}

console.log("The all three animals",animals[0],animals[1],animals[2]," are cute and you can take care of them,but",animals[1],"would be a great pet")
