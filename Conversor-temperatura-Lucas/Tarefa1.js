
const CelciusToF = document.getElementById('CelciusToF')
const FToCelcius = document.getElementById('FToCelcius')
const convertedValueF = document.getElementById('convertedValueF')
const convertedValueC = document.getElementById('convertedValueC')

//----- CELCIUS TO FAHRENHEIT-----

// ---- Atualização do resultado conforme preenchimento do Input -----
CelciusToF.addEventListener('input', function (){
    
    if (CelciusToF.value !== '' ) {

        const result = CelciusToFCalc(CelciusToF.value).toFixed(2)
        convertedValueF.value =  result + "°F"

    } else{
		convertedValueF.value = ''
	}
	
})

// ---- Atualização do resultado clicando no botão -----
document.getElementById('ConvertFBtn').addEventListener('click', function (){
    
    if (CelciusToF.value !== '' ) {

        const result = CelciusToFCalc(CelciusToF.value).toFixed(2)
        convertedValueF.value =  result + "°F"

    } else {
        alert("Insira um valor!")
    }
})
function CelciusToFCalc(CelciusToF) {
    let fahrenheit = (CelciusToF * 1.8) + 32
    return fahrenheit  
}

//----- FAHRENHEIT TO CELCIUS -----

// ---- Atualização do resultado conforme preenchimento do Input -----
FToCelcius.addEventListener('input', function (){
	
  	if (FToCelcius.value !== '' ) { 
		
        const result = FToCelciusCalc(FToCelcius.value).toFixed(2)
        convertedValueC.value =  result + "°C"

    } else{
		convertedValueF.value = ''
	}
	
})
// ---- Atualização do resultado clicando no botão -----
document.getElementById('ConvertCBtn').addEventListener('click', function (){
    
    if (FToCelcius.value !== '' ) {

        const result = FToCelciusCalc(FToCelcius.value).toFixed(2)
        convertedValueC.value =  result + "°C"

    } else {
        alert("Insira um valor!")
    }
})

function FToCelciusCalc(FToCelcius) {
    let Celcius = (FToCelcius - 32) * 5/9 
    return Celcius
}



