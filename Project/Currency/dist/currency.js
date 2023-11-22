const amountInput = document.querySelector('#amount');
const sourceCurrencySelect = document.querySelector('#sourceCurrency');
const destinationCurrencySelect = document.querySelector('#destinationCurrency');
const convertButton = document.querySelector('#convertButton');
function ConvertCurrency(amount, sourceCurrency, destinationCurrency) {
    const exchangeRate = {
        USD: 1.0,
        EUR: 0.85,
        GBP: 0.75,
        MUR: 44.33,
        JPY: 110.0
    };
    if (sourceCurrency in exchangeRate && destinationCurrency in exchangeRate) {
        const amountInUSD = amount / exchangeRate[sourceCurrency];
        const convertedAmount = amountInUSD * exchangeRate[destinationCurrency];
        return convertedAmount;
    }
    else {
        throw new Error("Invalid Source or Destination Currency");
    }
}
function CaptureValues() {
    const amount = +amountInput.value;
    const sourceCurrency = sourceCurrencySelect.value;
    const destinationCurrency = destinationCurrencySelect.value;
    const convertedValue = ConvertCurrency(amount, sourceCurrency, destinationCurrency);
    console.log("Converted Value: ", convertedValue);
    const outputElement = document.querySelector('#output');
    outputElement.innerHTML = `${sourceCurrency} ${amount} is  ${destinationCurrency} ${convertedValue}`;
}
convertButton.addEventListener('click', CaptureValues);
