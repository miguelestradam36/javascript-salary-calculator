  let clockInterval;
  let totalEarnedNormal = 0;
  let totalEarnedX2 = 0;
  let totalEarnedX5 = 0;
  let previousSalary = null;
  let totalSeconds = 0;
  let totalSecondsX2 = 0; 
  let totalSecondsX5 = 0; 

  function calculate() {
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
      document.getElementById('result').innerHTML += `
                  <p>Esta es la cantidad de horas que te cuesta comprar esto: ${totalHoursToBuy.toFixed(2)} horas.</p>
              `;
    }

    if (numPeople === 0) { 
      document.getElementById('result').innerHTML += `<p>Costo de la reunión: No hay personas en la reunión.</p>`;
    } else {
      document.getElementById('result').innerHTML += `
        <p>Costo de la reunión (1 hora): ${currencySymbol}${meetingCost.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
      `;
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

      clockElement.innerHTML = `
                  <span>${hours.toString().padStart(2, '0')}</span>:<span>${minutes.toString().padStart(2, '0')}</span>:<span>${seconds.toString().padStart(2, '0')}</span>
              `;
      earningsElement.innerHTML = `
          Ganancias acumuladas: ${document.getElementById('currency').value}${totalEarnedNormal.toLocaleString(undefined, {minimumFractionDigits: 2})} |
          Ganancias acumuladas (x2): ${document.getElementById('currency').value}${totalEarnedX2.toLocaleString(undefined, {minimumFractionDigits: 2})} | Tiempo (x2): ${hoursX2}h ${minutesX2}m ${secondsX2}s |
          Ganancias acumuladas (x5): ${document.getElementById('currency').value}${totalEarnedX5.toLocaleString(undefined, {minimumFractionDigits: 2})} |
          Tiempo (x5): ${hoursX5}h ${minutesX5}m ${secondsX5}s
      `;
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