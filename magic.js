const celciusInput = document.querySelector('#celcius > input'); 
const farenheitInput = document.querySelector('#farenheit > input'); 
const kelvinInput = document.querySelector('#kelvin > input'); 

function roundNum(num) {
     return Math.round(num*100)/100;

};
function CelciusToFarenheitAndKelvin(){
        const cTemp = parseFloat(celciusInput.value); 
        const fTemp = (cTemp * (9/5)) + 32;
        const kTemp = cTemp + 273.15;
        farenheitInput.value = roundNum (fTemp);
        kelvinInput.value = roundNum (kTemp); 
}
function  FarenheitToCelciusAndKelvin() {
    const fTemp = parseFloat (farenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * (5/9);
    celciusInput.value = roundNum (cTemp);
    kelvinInput.value = roundNum (kTemp);
}
function kelvinToFarenheitAndCelcius() {
    const kTemp = parseFloat(kelvinInput.value);
    const fTemp = 9/5 * (kTemp - 273) + 32;
    const cTemp = kTemp - 273.15;
    celciusInput.value =roundNum (cTemp);
    farenheitInput.value =roundNum (fTemp);  


}
celciusInput.addEventListener('input',CelciusToFarenheitAndKelvin);
farenheitInput.addEventListener('input', FarenheitToCelciusAndKelvin);
kelvinInput.addEventListener('input', kelvinToFarenheitAndCelcius);
 