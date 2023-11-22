const inputTemperature = document.getElementById('input-temperature') as HTMLInputElement;
const unitSelect = document.getElementById('unit-select') as HTMLSelectElement;
const convertButton = document.querySelector('.btn-success') as HTMLButtonElement;
const outputParagraph = document.getElementById('output') as HTMLParagraphElement;


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

function convertTemperature(temperature: number, unit: string): number {
    // Conversion logic (Celsius to Fahrenheit and vice versa)
    if (unit === 'celsius') {
        return (temperature * 9 / 5) + 32; // Celsius to Fahrenheit
    } else {
        return (temperature - 32) * 5 / 9; // Fahrenheit to Celsius
    }
}

function getOppositeUnit(unit: string): string {
    return unit === 'celsius' ? 'F' : 'C';
}
