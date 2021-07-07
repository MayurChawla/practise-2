let top2 = document.getElementById("top");
let nontop2 = document.getElementsByClassName("nottop");

console.log(top2);
console.log(nontop2);

function selectAll()
{
    if(top2.checked)
    {
        for(let i=0;i<nontop2.length;i++)
        {
            nontop2[i].checked = true;
        }
    }
    else
    {
        for(let i=0;i<nontop2.length;i++)
        {
            nontop2[i].checked = false;
        }
    }
}

function select1()
{
    let all = [];
    for(let i=0; i<nontop2.length; i++)
    {
        all[i] = nontop2[i].checked;
    }
    if(all.includes(false))
    {
        top2.checked = false;
    }
    else
    {
        top2.checked = true;
    }
}