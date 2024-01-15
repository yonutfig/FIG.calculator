var isSign = false;

function pressKey(key)
{
    
    const display = document.getElementById('display');
    if(
    (display.innerHTML == '0' ||
    display.innerHTML == 'ERR' ||
    display.innerHTML == Infinity)
    && key != '+' && key != '-'
    && key != '*' && key != '/' && key != '.')
    {
        document.getElementById('display').innerHTML = key;
    }
    else {
       
        if(!(isSign == true && (key == '+' || key == '-' || key == '*' || key == '/'))) {
            document.getElementById('display').innerHTML += key;
            isSign = false;
        }
        if(key == '+' || key == '-' || key == '*' || key == '/')
        {
            isSign = true;
        }
    }
}

function clearDisplay()
{
    document.getElementById('display').innerHTML = "0";
}

function calculate()
{
    try {
        document.getElementById('display').innerHTML =
        Number(eval(document.getElementById('display').innerHTML))
        .toFixed(2);
    } catch {
        document.getElementById('display').innerHTML = 'ERR';
    }
}