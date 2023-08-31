const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amount = document.getElementById('amount');
const convertButton = document.getElementById('convert');
const resultElement = document.getElementById('result');
const switchButton = document.getElementById('switch');


const apiKey = 'da945beceb5d23af298403c8';
const CurrenciesURL = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`;
// Fetch supported currencies and populate dropdowns
console.log(CurrenciesURL)
async function fetchCurrencies() {
    try {
        const response = await fetch(CurrenciesURL);
        const data = await response.json();

        // Populate the dropdowns
        const fromCurrency = document.getElementById('from-currency');
        const toCurrency = document.getElementById('to-currency');


        data.supported_codes.forEach(currencyCode => {
            const option = document.createElement('option');
            option.value = currencyCode;
            option.textContent = currencyCode;
            fromCurrency.appendChild(option);

            const option2 = document.createElement('option');
            option2.value = currencyCode;
            option2.textContent = currencyCode;
            toCurrency.appendChild(option2);
        });
    } catch (error) {
        console.error('Error fetching currencies:', error);
    }

}

// Fetch conversion rate and calculate result
async function convertCurrency() {
    try {
        const fromCurrencyValue = fromCurrency.value.split(',')[0];
        const toCurrencyValue = toCurrency.value.split(',')[0];
        console.log(fromCurrencyValue)
        console.log(toCurrencyValue)
        const amountValue = parseFloat(amount.value); // Get the entered amount

        const conversionRateURL = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrencyValue}/${toCurrencyValue}/${amountValue}`;

        console.log(conversionRateURL)
        const response = await fetch(conversionRateURL);
        const data = await response.json();
        // debugger
        const convertedAmount = data.conversion_result;

        // Display result
        resultElement.textContent = `${amountValue} ${fromCurrencyValue} = ${convertedAmount} ${toCurrencyValue}`;

    } catch (error) {
        console.error('Error converting currency:', error);
    }
}


// Switch currencies
function switchCurrencies() {
    const tempValue = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempValue;

    convertCurrency();
}

// Event listeners
convertButton.addEventListener('click', convertCurrency);
switchButton.addEventListener('click', switchCurrencies);

// Fetch supported currencies when the page loads
fetchCurrencies();
