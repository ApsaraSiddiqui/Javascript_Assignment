/*Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly.*/



let Car={
    manufacture:"Toyota--Japanese",
    model: "Fortuner",
    color:"black",
    year:2021
}

function feature(manufacture,model)
{
    let Car={
        manufacture:manufacture,
        model:model
    }

    for(let i=2;i<arguments.length;i++)
    {
        Car[i]=arguments[i]
    }


    return Car
}

console.log(feature("Toyota","Fortuner","black",2021))