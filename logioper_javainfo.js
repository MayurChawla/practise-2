// let age=24;

// if(age<14 || age>90)
// {
//     console.log("Not between 14 and 90");
// }
// else
// {
//     console.log("Between 14 and 90");
// }

// //using ! operator
// if(!(age<14) || !(age>90))
// {
//     console.log("Not between 14 and 90");
// }
// else
// {
//     console.log("Between 14 and 90");
// }

let uername = prompt("Please enter username : ","");
if(username==="Admin")
{
    let password = prompt("Enter Password : ","");
    if(password==="TheMaster")
    {
        console.log("Welcome Master");
    }
    else if(password===null)
    {
        console.log("Cancelled");
    }
    else
    {
        console.log("Wrong Password.");
    }
}
else if(username===null)
{
    console.log("Cancelled");
}
else
{
    console.log("I dont know u..");
}