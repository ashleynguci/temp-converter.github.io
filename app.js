var celciusInput = document.querySelector('#celcius > input');
var fahrenheitInput = document.querySelector('#fahrenheit > input');
var kelvinInput = document.querySelector('#kelvin > input');
const inputs = document.querySelectorAll("input");
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

function Change() {
  const celciusValue = parseFloat(celciusInput.value);

  if (celciusValue < 10) {
    inputs.forEach(div => {
      div.style.backgroundColor = "lightblue";
    });
  } else if (celciusValue < 20 && celciusValue >= 10) {
    inputs.forEach(div => {
      div.style.backgroundColor = "yellow";
    });
  } else if (celciusValue < 30 && celciusValue >= 20) {
    inputs.forEach(div => {
        div.style.backgroundColor = "orange";
      });
}
    else if (celciusValue < 80 && celciusValue >= 30) {
    inputs.forEach(div => {
        div.style.backgroundColor = "red";
      });
  } else {
    inputs.forEach(div => {
        div.style.backgroundColor = "grey";
      });
  }
}

inputs.forEach(input => {
    input.addEventListener("input", Change);
})
