/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.*/

let names=["JAY MARSHALL","MAX MAVEN","MASKED MAGICIAN"]

function show_magicians(names)
{
    for(let i=0;i<names.length;i++)
    {
        console.log(names[i])
    }
}

show_magicians(names)