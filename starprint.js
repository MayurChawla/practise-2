function starTriangle() {  //Print Pattern like ascending hill
    let temp = "";
    const n = prompt("Enter Value of n : ");
    for(let i=0;i<n;i++)
    {
        temp="";
        for(let j=0;j<=i;j++)
        {
            temp = temp+"#";
        }
        console.log(temp+"\n");
    }
}

function starChess() {  //Print Pattern like Chess
    var chess = "";
    for(let i = 0;i < 8;i++)
    {
        chess = "";
        for(let j=0;j<8;j++)
        {
            if((i+j)%2==0)
            {
                chess = chess + " ";
            }
            else{
                chess = chess + "#";
            }
        }
        console.log(chess);
    }
}

function fizzbuzz() {
    for(let i=1;i<=100;i++)
    {
        if(i%3==0)
        {
            if(i%5==0)
                console.log("FizzBuzz");
            else
                console.log("Fizz");
        }   
        else if(i%5==0)
        {
            if(i%3==0)
                console.log("FizzBuzz");
            else
                console.log("Buzz");
        }
        else
        {
            console.log(i);
        }
    }
}
fizzbuzz();