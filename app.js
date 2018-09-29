var celciusInput = document.querySelector('#celcius > input');
var fahrenheitInput = document.querySelector('#fahrenheit > input');
var kelvinInput = document.querySelector('#kelvin > input');

//Create function to round number//
function roundto2(num){
    return Math.round(num*100)/100;
}
function ConvertfromC(){
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp *(9/5)+32);
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundto2(fTemp);
    kelvinInput.value = roundto2(kTemp);
}

function ConvertfromF() {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp -32)*(5/9);
    const kTemp = (fTemp + 459.67)*(5/9);
    celciusInput.value = roundto2(cTemp);
    kelvinInput.value = roundto2(kTemp);
}


function ConvertfromK(){
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = (kTemp -273.15);
    const fTemp = 9/5*(kTemp-273) +32;
    fahrenheitInput.value = roundto2(fTemp);
    celciusInput.value = roundto2(cTemp);
}


celciusInput.addEventListener("input",ConvertfromC);
fahrenheitInput.addEventListener("input",ConvertfromF);
kelvinInput.addEventListener("input",ConvertfromK);

function Change(){
    if (celciusInput <10) {
    document.getElementsByClassName("t").style.background = "blue";
}
else if (celciusInput <20 && celciusInput>=10){
    document.getElementsByClassName("t").style.background = "yellow";
}
else if(celciusInput <30 && celciusInput>=20){
    document.getElementsByClassName("t").style.background = "orange";
}
else{
    document.getElementsByClassName("t").style.background = "red";
}
}
var input = document.getElementsByClassName("t");
input.addEventListener("input", Change);




