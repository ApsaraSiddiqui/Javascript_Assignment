/*Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/


let names=["JAY MARSHALL","MAX MAVEN","MASKED MAGICIAN"]

function show_magicians(names)
{
    for(let i=0;i<names.length;i++)
    {
        console.log(names[i])
    }
}


function make_great(names)
{
    var modify=[]

    for(let i=0;i<names.length;i++)
    {
        modify.push("Great "+names[i])
    }
    return modify
}


nameMag=make_great(names)
show_magicians(names)
show_magicians(nameMag)



