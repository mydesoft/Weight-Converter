const pounceUnit = document.getElementById('pounds-unit');
const kilogramUnit = document.getElementById('kilogram-unit');
const ounceUnit = document.getElementById('ounce-unit');
const gramUnit = document.getElementById('gram-unit');
const convertedOutput = document.getElementById('output');


const weightConversionHandler = (event) => {

    // console.log(convertedOutput);
    // convertedOutput.classList.add('invisible');
    const poundsValue = event.target.value;
    convertedOutput.classList.remove('invisible');


    const convertedKilogramUnit = poundsValue * 0.453592;
    kilogramUnit.innerText = `Kilogram : ${convertedKilogramUnit}`;

    const convertedOunceUnit = poundsValue * 16;
    ounceUnit.innerText = `Ounce : ${convertedOunceUnit}`;

    const convertedGramUnit = poundsValue * 453.592
    gramUnit.innerText = `Ounce : ${convertedGramUnit}`;
    
}

pounceUnit.addEventListener('input', weightConversionHandler);