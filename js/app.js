const btn = document.querySelector('#convert-btn');
const swap = document.querySelector('#swap-btn');
const currencyFrom = document.querySelector('#from');
const currencyTo = document.querySelector('#to');

// Event Listener
swap.addEventListener('click', () => {
  const temp = currencyFrom.value;
  currencyFrom.value = currencyTo.value;
  currencyTo.value = temp;
})


btn.addEventListener('click', () => {
  const showConversion = document.querySelector('.conversion');
  const showRate = document.querySelector('.rate');
  const userInput = document.querySelector('#amount').value;

  const req = async () => {
    const res = await fetch(`https://api.exchangeratesapi.io/latest?base=${currencyFrom.value}`);
    const json = await res.json();

    const convertRate = json.rates[`${currencyTo.value}`];
    const convertedAmount =   (convertRate * parseFloat(userInput)).toFixed(2);

    showConversion.innerText = `${currencyFrom.value} ${userInput} = ${currencyTo.value} ${convertedAmount}`;
    showRate.innerHTML = `Last Updated: ${json.date} <br> ${currencyFrom.value} 1 =  ${currencyTo.value} ${convertRate}`;
  };

  req();

 });

