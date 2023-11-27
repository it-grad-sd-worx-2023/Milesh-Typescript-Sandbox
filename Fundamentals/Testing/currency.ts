document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('amount') as HTMLInputElement;
    const sourceCurrencySelect = document.getElementById('sourceCurrency') as HTMLSelectElement;
    const destinationCurrencySelect = document.getElementById('destinationCurrency') as HTMLSelectElement;
    const convertButton = document.querySelector('button');

    if (convertButton) {
        convertButton.addEventListener('click', () => {
            const amount = parseFloat(amountInput.value);
            const sourceCurrency = sourceCurrencySelect.value;
            const destinationCurrency = destinationCurrencySelect.value;

            if (!isNaN(amount)) {
                const convertedAmount = convertCurrency(amount, sourceCurrency, destinationCurrency);
                alert(`Converted amount: ${convertedAmount.toFixed(2)} ${destinationCurrency}`);
            } else {
                alert('Please enter a valid amount.');
            }
        });
    }
});

function convertCurrency(amount: number, sourceCurrency: string, destinationCurrency: string): number {
    const conversionRates: Record<string, number> = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.73,
        MUR: 40.2,
        JPY: 110.11,
    };

    const sourceRate = conversionRates[sourceCurrency];
    const destinationRate = conversionRates[destinationCurrency];

    if (sourceRate && destinationRate) {
        const convertedAmount = (amount / sourceRate) * destinationRate;
        return convertedAmount;
    } else {
        throw new Error('Invalid currency.');
    }
}