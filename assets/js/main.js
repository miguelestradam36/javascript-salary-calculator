let clockInterval;
let totalEarnedNormal = 0;
let totalEarnedX2 = 0;
let totalEarnedX5 = 0;
let previousSalary = null;
let totalSeconds = 0;
let totalSecondsX2 = 0; 
let totalSecondsX5 = 0;
let totalinsurance= 0;
let totaltaxes = 0;

document.getElementById('result').style.display = 'none';

function calculate() {
  document.getElementById('result').style.display = 'flex';
  let taxrate = 0;
  const salary = parseFloat(document.getElementById('salary').value);
  const deductionPercentage = 10.67 / 100 ;
  const period = document.getElementById('period').value;
  const currencySymbol = '₡';
  const price = parseFloat(document.getElementById('price').value) || 0;
  const numPeople = parseInt(document.getElementById('people').value) || 0;

  if (isNaN(salary) || salary <= 0) {
    alert("Por favor, ingresa un salario válido.");
    return;
  }

  if (salary <= 929000){
    taxrate = 0;
  } else if (salary > 929000 && salary <= 1363000) {
    taxrate = 10 / 100 ;
  } else if (1363000 < salary && salary <= 2392000) {
    taxrate = 15 / 100 ;
  } else if (2392000 < salary && salary <= 4783000) {
    taxrate = 20 / 100 ;
  } else if (salary > 4783000) {
    taxrate = 25 / 100;
  }
  
  totaltaxes = salary * taxrate;
  totalinsurance = salary * deductionPercentage;
  const netSalary = salary - totaltaxes - totalinsurance;

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