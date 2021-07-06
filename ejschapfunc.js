//Question 3
function countChar(strin, charToCount)
{
    let count = 0;
    for(let i=0;i<strin.length;i++)
    {
        if(strin[i]==charToCount)
        {
            count++;
        }
    }
    return count;
}

console.log(countChar("ABBBcccbbbbbddddddd12345678999999....","9"));


// function countBs(strin)
// {
//     let count = 0;
//     for(let i=0;i<strin.length;i++)
//     {
//         if(strin[i]=="B")
//         {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countBs("ABBBcccbbb"));




//Question 2
// function isEven(check)
// {
//     function checkFun(checks)
//     {
//         if(checks == 0)
//         {
//             return true;
//         }
//         else if(checks == 1)
//         {
//             return false;
//         }
//         else
//         {
//             check=check-2;
//             return checkFun(check);
//         }
//     }
//     return checkFun(check);
// }
// console.log(isEven(10));

// function isEven(check)
// {
//     if(check == 0)
//     {
//         return true;
//     }
//     else if(check == 1)
//     {
//         return false;
//     }
//     else
//     {
//         check=check-2;
//         return isEven(check);
//     }
// }
// console.log(isEven(15));




//Question 1

// function min(num1, num2) {
//     console.log("Number 1 : " + num1);
//     console.log("Number 2 : " + num2);
//     if(num1 <= num2)
//     {
//         return num1;
//     }
//     else
//     {
//         return num2;
//     }
// }

// let minnum = min(5,7);
// console.log("Minimum number is : " + minnum);