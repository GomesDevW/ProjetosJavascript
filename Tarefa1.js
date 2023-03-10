
const CelciusToF = document.getElementById('CelciusToF')
const FToCelcius = document.getElementById('FToCelcius')
const convertedValueF = document.getElementById('convertedValueF')
const convertedValueC = document.getElementById('convertedValueC')

//----- CELCIUS TO FAHRENHEIT-----
document.getElementById('ConvertFBtn').addEventListener('click', function (){
    
    if (CelciusToF.value !== '0' && CelciusToF.value !== '' ) {
        convertedValueF.value =  CelciusToFCalc(CelciusToF.value) + "°F"
    } else {
        alert("Insira um valor!")
    }
})
function CelciusToFCalc(CelciusToF) {

    let fahrenheit = (CelciusToF * 1.8) + 32
    return fahrenheit
    
}

//----- FAHRENHEIT TO CELCIUS -----
document.getElementById('ConvertCBtn').addEventListener('click', function (){
    
    if (FToCelcius.value !== '0' && FToCelcius.value !== '' ) {
        convertedValueC.value =  FToCelciusCalc(FToCelcius.value) + "°C"
    } else {
        alert("Insira um valor!")
    }
})


function FToCelciusCalc(FToCelcius) {
    let Celcius = (FToCelcius - 32) * 5/9 
    return Celcius
}



