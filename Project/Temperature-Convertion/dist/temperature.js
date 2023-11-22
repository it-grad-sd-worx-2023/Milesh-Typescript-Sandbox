const inputTemperature = document.getElementById('input-temperature');
const unitSelect = document.getElementById('unit-select');
const convertButton = document.querySelector('.btn-success');
const outputParagraph = document.getElementById('output');
convertButton.addEventListener('click', function () {
    // Get user input
    const temperature = parseFloat(inputTemperature.value);
    const selectedUnit = unitSelect.value;
    // Validate user input
    if (isNaN(temperature)) {
        alert('Please enter a valid temperature.');
        return;
    }
    // Perform temperature conversion
    const convertedTemperature = convertTemperature(temperature, selectedUnit);
    // Display the result
    outputParagraph.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °${getOppositeUnit(selectedUnit)}`;
});
function convertTemperature(temperature, unit) {
    // Conversion logic (Celsius to Fahrenheit and vice versa)
    if (unit === 'celsius') {
        return (temperature * 9 / 5) + 32; // Celsius to Fahrenheit
    }
    else {
        return (temperature - 32) * 5 / 9; // Fahrenheit to Celsius
    }
}
function getOppositeUnit(unit) {
    return unit === 'celsius' ? 'F' : 'C';
}
