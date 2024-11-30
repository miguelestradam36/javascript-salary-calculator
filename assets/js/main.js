//force https
if (location.protocol !== 'https:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
// force https section finish
let clockInterval;

let totalEarnedNormal = 0;
let totalEarnedX2 = 0;
let totalEarnedX5 = 0;

let totalEarnedBruto = 0;
let totalEarnedBrutoX2 = 0;
let totalEarnedBrutoX5 = 0;

let previousSalary = null;

let totalSeconds = 0;
let totalSecondsX2 = 0; 
let totalSecondsX5 = 0;

let totalinsurance= 0;
let totaltaxes = 0;
const currencySymbol = '₡';

document.getElementById('result').style.display = 'none';
document.getElementById('mensajed').style.display = 'none';

function calculate() {

  let salary = parseFloat(document.getElementById('salary').value);
  let workedhours = parseFloat(document.getElementById('workedhours').value);

  if (isNaN(salary) || salary <= 0) {
    alert("Por favor, ingresa un salario válido.");
    return;
  }

  document.getElementById('result').style.display = 'flex';

  const InsuranceElement = document.getElementById('ccss');
  const TaxesElement = document.getElementById('renta');

  let taxrate = 0;
  let noinput = '';

  const deductionPercentage = 10.67 / 100 ;

  document.getElementById('mensajed').textContent = `Tu salario mensual bruto es: ${currencySymbol}${salary.toLocaleString(undefined, {minimumFractionDigits: 1})} y trabajas ${workedhours} horas a la semana. Tus resultados están debajo del formulario ${noinput} .`
  document.getElementById('mensajed').style.display = 'flex';

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
  let netSalary = salary - (totaltaxes + totalinsurance);

  let hourlyRate = netSalary / (workedhours * 4.4);
  let perSecond = hourlyRate / 3600;
  let perMinute = hourlyRate / 60;
  let perDay = hourlyRate * 9;

  let brutohourlyRate = salary / (workedhours * 4.4);
  let brutoperSecond = brutohourlyRate / 3600;

  totaltaxes = parseFloat(totaltaxes.toFixed(2));
  totalinsurance = parseFloat(totalinsurance.toFixed(2));
  netSalary = parseFloat(netSalary.toFixed(2));

  brutohourlyRate = parseFloat(brutohourlyRate.toFixed(2));
  brutoperSecond = parseFloat(brutoperSecond.toFixed(2));

  perMinute = parseFloat(perMinute.toFixed(2));
  hourlyRate = parseFloat(hourlyRate.toFixed(2));
  perSecond = parseFloat(perSecond.toFixed(2));
  perDay = parseFloat(perDay.toFixed(2));

  salary = parseFloat(salary.toFixed(2));

  InsuranceElement.textContent =  `${currencySymbol}${totalinsurance.toLocaleString(undefined, {minimumFractionDigits: 1})}`;
  TaxesElement.textContent =  `${currencySymbol}${totaltaxes.toLocaleString(undefined, {minimumFractionDigits: 1})}`;

  document.getElementById('seconds').innerHTML = `${currencySymbol}${perSecond.toLocaleString(undefined, {minimumFractionDigits: 1})}`;
  document.getElementById('minutes').innerHTML = `${currencySymbol}${perMinute.toLocaleString(undefined, {minimumFractionDigits: 1})}`;
  document.getElementById('hours').innerHTML = `${currencySymbol}${hourlyRate.toLocaleString(undefined, {minimumFractionDigits: 1})}`;
  document.getElementById('days').innerHTML = `${currencySymbol}${perDay.toLocaleString(undefined, {minimumFractionDigits: 1})}`;

  document.getElementById('raw').textContent = `${currencySymbol}${salary.toLocaleString(undefined, {minimumFractionDigits: 1})}`;
  document.getElementById('months').textContent = `${currencySymbol}${netSalary.toLocaleString(undefined, {minimumFractionDigits: 1})}`;

  if (previousSalary !== salary) {
    totalEarnedNormal = 0;
    totalEarnedBruto = 0;
    totalEarnedBrutoX2 = 0;
    totalEarnedBrutoX5 = 0;
    totalEarnedX2 = 0;
    totalEarnedX5 = 0;
    totalSeconds = 0;
    totalSecondsX2 = 0; 
    totalSecondsX5 = 0; 
    clearInterval(clockInterval);
    startClock(parseFloat(perSecond), parseFloat(brutoperSecond));
  }

  previousSalary = salary;

  window.location.href = '#result';
}

function startClock(rate, brutorate) {
  const clockElement = document.getElementById('clock');
  const earningsElement = document.getElementById('earnings');
  const brutoearningsElement = document.getElementById('brutoearnings');

  const clock2Element = document.getElementById('clock2');
  const earnings2Element = document.getElementById('earnings2');
  const brutoearnings2Element = document.getElementById('brutoearnings2');

  const clock3Element = document.getElementById('clock3');
  const earnings3Element = document.getElementById('earnings3');
  const brutoearnings3Element = document.getElementById('brutoearnings3');

  clockInterval = setInterval(() => {

    totalEarnedNormal += rate;
    totalEarnedX2 += rate * 2;
    totalEarnedX5 += rate * 5;

    totalEarnedBruto += brutorate;
    totalEarnedBrutoX2 += brutorate * 2;
    totalEarnedBrutoX5 += brutorate * 5;

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
    earningsElement.textContent = `${currencySymbol}${totalEarnedNormal.toLocaleString(undefined, {minimumFractionDigits: 1})}`;
    brutoearningsElement.textContent = `${currencySymbol}${totalEarnedBruto.toLocaleString(undefined, {minimumFractionDigits: 1})}`;

    clock2Element.innerHTML = `${hoursX2.toString().padStart(2, '0')}:${minutesX2.toString().padStart(2, '0')}:${secondsX2.toString().padStart(2, '0')}`;
    earnings2Element.textContent = `${currencySymbol}${totalEarnedX2.toLocaleString(undefined, {minimumFractionDigits: 1})}`;
    brutoearnings2Element.textContent = `${currencySymbol}${totalEarnedBrutoX2.toLocaleString(undefined, {minimumFractionDigits: 1})}`;

    clock3Element.innerHTML = `${hoursX5.toString().padStart(2, '0')}:${minutesX5.toString().padStart(2, '0')}:${secondsX5.toString().padStart(2, '0')}`;
    earnings3Element.textContent = `${currencySymbol}${totalEarnedX5.toLocaleString(undefined, {minimumFractionDigits: 1})}`;
    brutoearnings3Element.textContent = `${currencySymbol}${totalEarnedBrutoX5.toLocaleString(undefined, {minimumFractionDigits: 1})}`;


  }, 1000);
}

function clearFields() {
  document.getElementById('salary').value = '';
  document.getElementById('workedhours').value = '';
  document.getElementById('result').innerHTML = '';

  document.getElementById('clock').innerHTML = '';
  document.getElementById('earnings').innerHTML = ''; 
  document.getElementById('brutoearnings').innerHTML = '';

  document.getElementById('clock2').innerHTML = '';
  document.getElementById('earnings2').innerHTML = '';
  document.getElementById('brutoearnings2').innerHTML = '';

  document.getElementById('clock3').innerHTML = '';
  document.getElementById('earnings3').innerHTML = '';
  document.getElementById('brutoearnings3').innerHTML = '';

  clearInterval(clockInterval);
  totalEarnedNormal = 0;
  totalEarnedX2 = 0;
  totalEarnedX5 = 0;
  totalEarnedBruto = 0;
  totalEarnedBrutoX2 = 0;
  totalEarnedBrutoX5 = 0;
  previousSalary = null;
  totalSeconds = 0;
  totalSecondsX2 = 0; 
  totalSecondsX5 = 0; 
}