const mode = document.querySelector('.mode-container');
const input = document.querySelectorAll('.input');
const key = document.querySelectorAll('.button');
function lightMode()
{
    if(getComputedStyle(mode).backgroundImage === "url(\"http://localhost:63342/Calci/Assets/mode-dark.svg\")")
    {
        mode.style.backgroundImage = "url(\"http://localhost:63342/Calci/Assets/mode-light.svg\")";
        document.querySelector('.title').style.color = "white";
        document.querySelector('body').style.background = "#282828";
    }
    else
    {
        mode.style.backgroundImage = "url(\"http://localhost:63342/Calci/Assets/mode-dark.svg\")";
        document.querySelector('.title').style.color = "black";
        document.querySelector('body').style.background = "white";
    }
}

function putValue(stroke)
{
    input[1].textContent = input[1].textContent + stroke;
}

function clearAll()
{
    input[1].textContent = "";
}
function clear()
{
    let i = input[1].textContent;
    let length = i.length;;
    clearAll();
    for(let j = 0; j < length-1; j++)
    {
        putValue(i[j])
    }
}

function calculate()
{

}

function getStroke(i)
{
    if(i === '1' || i === '2' || i === '3' || i === '4' || i === '5' || i === '6' || i === '7' || i === '8' || i === '9' || i === '0' || i === '.' || i === '+' || i === '-' || i === 'x' || i === '÷' || i == '%')
    {
        putValue(i);
    }
    else if (i === 'C')
    {
        clear();
    }
    else if (i === 'AC')
    {
        clearAll();
    }
    else
    {
        calculate();
    }
}

function swap(i, j)
{
    let k = input[i];
    input[i] = input[j];
    input[j] = k;
}

function multiSwap()
{
    for(let i = 1; i < 3; i++)
    {
        swap(i, i+1);
    }
}


mode.addEventListener('click', lightMode);
for(let i = 0; i < key.length; i++)
{
    key[i].addEventListener('click', function ()
    {
        getStroke(key[i].textContent);
    });
}