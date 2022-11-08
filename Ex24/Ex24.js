/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

let list=[31,"Apsara","apsara","31",05]

if(list[1]=="apsara"|| list[2]=="apsara")
{
    console.log("true")
}
else
{
    console.log("false")
}


if(list[0]==31 && list[3]=="31")
{
    console.log("true")
}
else
{
    console.log("false")
}

if(list[0]==20 && list[3]==20)
{
    console.log("true")
}
else
{
    console.log("false")
}

if(list[0]==="31")
{
    console.log("true")
}
else
{
    console.log("false")
}

if(list[0]===31)
{
    console.log("true")
}
else
{
    console.log("false")
}

if(list[3]==1)
{
    console.log("true")
}
else
{
    console.log("false")
}


if(list[4]==05)
{
    console.log("true")
}
else
{
    console.log("false")
}


if(list.includes("apsara"))
{
    console.log("true")
}
else
{
    console.log("false")
}

if(list.includes("siddiqui"))
{
    console.log("true")
}
else
{
    console.log("false")
}

if(list[0]>list[4])
{
    console.log("true")
}
else
{
    console.log("false")
}


if(list[0]<list[4])
{
    console.log("true")
}
else
{
    console.log("false")
}