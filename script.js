const boxes=document.querySelectorAll('.game div')
const playerdisplay=document.querySelector('#human')
let current=1
playerdisplay.innerHTML=current
const array =
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,5,8],
    [2,4,6],
]
function checkwin()
{
    for(let i=0;i<array.length;i++)
    {
        const box1=boxes[array[i][0]]
        const box2=boxes[array[i][1]]
        const box3=boxes[array[i][2]]
        if(box1.classList.contains('blue') && box2.classList.contains('blue') &&box3.classList.contains('blue'))
        {
            alert("Player 1 Win")
        }
        else if(box1.classList.contains('red') && box2.classList.contains('red') &&box3.classList.contains('red'))
        {
            alert("Player 2 Win")
        }
    }
}
for(let i=0;i<boxes.length;i++)
{
    boxes[i].onclick=() => {
    if(boxes[i].className==='blue'|| boxes[i].className==='red' )
    {
        alert("You cheated")
    }
    else
    {
        if(current===1)
    {
        boxes[i].classList.add('blue')
        current=2
        playerdisplay.innerHTML=current
        setTimeout(checkwin,50)
    }
    else
    {
        
        boxes[i].classList.add('red')
        current=1
        playerdisplay.innerHTML=current
        setTimeout(checkwin,50)
    }
    }
    }
}
    