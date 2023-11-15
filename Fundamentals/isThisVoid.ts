// Function to log a message to the console
function logMessage(message: string): void {
    console.log(message);
}

// Function to display the current temperature
function showTemperature(city: string, temperature: number): void {
    logMessage(`Current temperature in ${city}: ${temperature}°C`);
}

// Function to display the weather condition
function showWeatherCondition(condition: string): void {
    logMessage(`Weather Condition: ${condition}`);
}

// Function to provide a weather forecast
function showForecast(days: number, condition: string): void {
    logMessage(`Weather forecast for the next ${days} days: ${condition}`);
}

// Call the functions
showTemperature("New York", 22);
showWeatherCondition("Sunny");
showForecast(5, "Clear skies");

// Output:
// Current temperature in New York: 22°C
// Weather Condition: Sunny
// Weather forecast for the next 5 days: Clear skies
