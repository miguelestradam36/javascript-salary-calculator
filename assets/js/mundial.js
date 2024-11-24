let clockInterval;
let totalEarnedNormal = 0;
let totalEarnedX2 = 0;
let totalEarnedX5 = 0;
let previousSalary = null;
let totalSeconds = 0;
let totalSecondsX2 = 0; 
let totalSecondsX5 = 0; 

const currencyCountryMap = {
  "₡": "Costa Rica",
  "$": "Estados Unidos",
  "€": "Europa",
  "£": "Reino Unido",
  "¥": "Japón",
  "₹": "India",
  "₩": "Corea del Sur",
  "₺": "Turquía",
  "₽": "Rusia",
  "A$": "Australia",
  "C$": "Canadá",
};

document.getElementById("currency").addEventListener("change", function () {
  const country = currencyCountryMap[this.value];
  if (country) {
    document.getElementById("country").value = country;
  }
});

document.getElementById("country").addEventListener("change", function () {
  const currency = Object.keys(currencyCountryMap).find(
    (key) => currencyCountryMap[key] === this.value
  );
  if (currency) {
    document.getElementById("currency").value = currency;
  }
});

document.getElementById('result').style.display = 'none';

function calculate() {
  document.getElementById('result').style.display = 'flex';
  const salary = parseFloat(document.getElementById('salary').value);
  const deductionPercentage = 10.67 / 100 ;
  const period = document.getElementById('period').value;
  const currencySymbol = document.getElementById('currency').value;
  const price = parseFloat(document.getElementById('price').value) || 0;
  const numPeople = parseInt(document.getElementById('people').value) || 0;

  if (isNaN(salary) || salary <= 0) {
    alert("Por favor, ingresa un salario válido.");
    return;
  }

  const netSalary = salary * (1 - deductionPercentage);
  let perPeriod;
  switch (period) {
    case 'weekly':
      perPeriod = netSalary / 4;
      break;
    case 'biweekly':
      perPeriod = netSalary / 2;
      break;
    case 'monthly':
    default:
      perPeriod = netSalary;
      break;
  }

  const hourlyRate = netSalary / (30 * 24);
  const perSecond = hourlyRate / 3600;
  const perMinute = hourlyRate / 60;
  const perDay = hourlyRate * 24;

  const meetingCost = hourlyRate * numPeople; 

  document.getElementById('seconds').getElementsByClassName("purecounter")[0].textContent = `${currencySymbol}${perSecond.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
  document.getElementById('minutes').getElementsByClassName("purecounter")[0].textContent = `${currencySymbol}${perMinute.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
  document.getElementById('hours').getElementsByClassName("purecounter")[0].textContent = `${currencySymbol}${hourlyRate.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
  document.getElementById('days').getElementsByClassName("purecounter")[0].textContent = `${currencySymbol}${perDay.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
  document.getElementById('months').getElementsByClassName("purecounter")[0].textContent = `${currencySymbol}${perPeriod.toLocaleString(undefined, {minimumFractionDigits: 2})}`;

  if (price > 0) {
      const totalHoursToBuy = price / hourlyRate;
      document.getElementById('article').getElementsByClassName("purecounter")[0].textContent = `${totalHoursToBuy.toFixed(2)}`;
  } else {
      document.getElementById('article').getElementsByClassName("purecounter")[0].textContent = `N/A`;
  }

  if (numPeople === 0) { 
      var text = document.createTextNode(`${numPeople} person present`);
      document.getElementById('meeting').getElementsByClassName("people")[0].appendChild(text);
      document.getElementById('meeting').getElementsByClassName("purecounter")[0].textContent += `N/A`;
  } else {
      var text = document.createTextNode(`${numPeople} person present`);
      document.getElementById('meeting').getElementsByClassName("people")[0].appendChild(text);
      document.getElementById('meeting').getElementsByClassName("purecounter")[0].textContent += `${currencySymbol}${meetingCost.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
  }

  if (previousSalary !== salary) {
    totalEarnedNormal = 0;
    totalEarnedX2 = 0;
    totalEarnedX5 = 0;
    totalSeconds = 0;
    totalSecondsX2 = 0; 
    totalSecondsX5 = 0; 
    clearInterval(clockInterval);
    startClock(perSecond);
  }

  previousSalary = salary;
}

function startClock(rate) {
  const clockElement = document.getElementById('clock');
  const earningsElement = document.getElementById('earnings');

  clockInterval = setInterval(() => {
    totalEarnedNormal += rate;
    totalEarnedX2 += rate * 2;
    totalEarnedX5 += rate * 5;
    totalSeconds += 1;
    totalSecondsX2 += 2; 
    totalSecondsX5 += 5; 

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const hoursX2 = Math.floor(totalSecondsX2 / 3600); 
    const minutesX2 = Math.floor((totalSecondsX2 % 3600) / 60); 
    const secondsX2 = totalSecondsX2 % 60; 

    const hoursX5 = Math.floor(totalSecondsX5 / 3600); 
    const minutesX5 = Math.floor((totalSecondsX5 % 3600) / 60); 
    const secondsX5 = totalSecondsX5 % 60; 

    clockElement.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    earningsElement.innerHTML = `${document.getElementById('currency').value}${totalEarnedNormal.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
  }, 1000);
}

function clearFields() {
  document.getElementById('salary').value = '';
  document.getElementById('price').value = '';
  document.getElementById('people').value = '1'; 
  document.getElementById('result').innerHTML = '';
  document.getElementById('clock').innerHTML = '';
  document.getElementById('earnings').innerHTML = ''; 
  clearInterval(clockInterval);
  totalEarnedNormal = 0;
  totalEarnedX2 = 0;
  totalEarnedX5 = 0;
  previousSalary = null;
  totalSeconds = 0;
  totalSecondsX2 = 0; 
  totalSecondsX5 = 0; 
}