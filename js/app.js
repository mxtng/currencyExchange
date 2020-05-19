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

  fetch(`https://api.exchangeratesapi.io/latest?base=${currencyFrom.value}`)
    .then(res => res.json())
    .then(data => {
  
      // const baseRate = data.rates[`${currencyFrom.value}`];
      const convertRate = data.rates[`${currencyTo.value}`];
      const convertedAmount =   (convertRate * parseFloat(userInput)).toFixed(2);
      console.log(convertedAmount)


      showConversion.innerText = `${currencyFrom.value} ${userInput} = ${currencyTo.value} ${convertedAmount}`;
      showRate.innerHTML = `Last Updated: ${data.date} <br> ${currencyFrom.value} 1 =  ${currencyTo.value} ${convertRate}`;

    });

 });

