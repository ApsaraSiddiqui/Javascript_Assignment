/*Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
 Call show_magicians() to see that the list has actually been modified.*/


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


names=make_great(names)
show_magicians(names)

