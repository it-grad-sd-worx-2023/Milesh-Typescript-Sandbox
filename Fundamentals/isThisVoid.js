// Function to log a message to the console
function logMessage(message) {
    console.log(message);
}
// Function to display the current temperature
function showTemperature(city, temperature) {
    logMessage("Current temperature in ".concat(city, ": ").concat(temperature, "\u00B0C"));
}
// Function to display the weather condition
function showWeatherCondition(condition) {
    logMessage("Weather Condition: ".concat(condition));
}
// Function to provide a weather forecast
function showForecast(days, condition) {
    logMessage("Weather forecast for the next ".concat(days, " days: ").concat(condition));
}
// Call the functions
showTemperature("New York", 22);
showWeatherCondition("Sunny");
showForecast(5, "Clear skies");
// Output:
// Current temperature in New York: 22°C
// Weather Condition: Sunny
// Weather forecast for the next 5 days: Clear skies
