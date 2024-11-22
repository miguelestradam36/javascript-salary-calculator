<?php

?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculadora de Salario</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  
  <meta name="description" content="">
  <meta name="keywords" content="">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">

  <!-- Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">

  <style>

    h1 {
      text-align: center;
      color: #333; /* Color del título */
    }

    label {
      display: block;
      margin-top: 10px;
      color: #333; /* Color de las etiquetas */
    }

    input[type="number"],
    select {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      padding: 10px 20px; /* Aumentar el padding horizontal */
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }

    button:hover {
      background-color: #218838;
      transform: scale(1.05); 
    }

    .result {
      margin-top: 20px;
      background-color: #f9f9f9; /* Fondo claro para los resultados */
      border-radius: 5px;
      padding: 15px;
    }

    .clock-container {
      background-color: #e0e0f0;
      border: 2px solid #000;
      padding: 10px;
      border-radius: 5px;
      font-family: monospace;
      text-align: center;
      margin-top: 20px;
    }

    .clock {
      font-size: 24px;
      margin: 0;
    }

    .earnings {
      font-size: 18px;
      margin-top: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Calculadora de Salario</h1>

    <label for="currency">Selecciona la moneda:</label>
    <select id="currency">
      <option value="₡">Colón Costarricense</option>
      <option value="$">Dólar Estadounidense</option>
      <option value="€">Euro</option>
      <option value="£">Libra Esterlina</option>
      <option value="¥">Yen Japonés</option>
      <option value="₹">Rupia India</option>
      <option value="₩">Won Surcoreano</option>
      <option value="₺">Lira Turca</option>
      <option value="₽">Rublo Ruso</option>
      <option value="A$">Dólar Australiano</option>
      <option value="C$">Dólar Canadiense</option>
      <option value="NZ$">Dólar Neozelandés</option>
      <option value="S$">Dólar de Singapur</option>
      <option value="R$">Real Brasileño</option>
      <option value="₴">Grivna Ucraniana</option>
      <option value="₱">Peso Filipino</option>
      <option value="₫">Dong Vietnamita</option>
      <option value="₭">Kip Laociano</option>
      <option value="₮">Tugrik Mongol</option>
      <option value="B$">Dólar de Barbados</option>
      <option value="Kč">Corona Checa</option>
      <option value="kr">Corona Sueca</option>
      <option value="kr">Corona Danesa</option>
      <option value="R">Rand Sudafricano</option>
      <option value="CHF">Franco Suizo</option>
      <option value="د.إ">Dirham de los Emiratos Árabes Unidos</option>
      <option value="ل.س">Libra Siria</option>
      <option value="د.ك">Dinar Kuwaití</option>
      <option value="BHD">Dinar Bahreiní</option>
      <option value="J د.">Dinar Jordano</option>
      <option value="MOP$">Pataca Macanesa</option>
      <option value="₦">Naira Nigeriana</option>
      <option value="₵">Cedi Ghanés</option>
      <option value="₲">Guaraní Paraguayo</option>
      <option value="₴">Grivna Ucraniana</option>
    </select>

    <label for="salary">Ingresa tu salario bruto mensual:</label>
    <input type="number" id="salary" placeholder="Salario mensual" min="0" />

    <label for="deduction">Porcentaje de deducción (%):</label>
    <input type="number" id="deduction" value="9.17" placeholder="Porcentaje de deducción" step="0.01" min="0" />

    <label for="period">Selecciona el periodo:</label>
    <select id="period">
      <option value="monthly">Mensual</option>
      <option value="weekly">Semanal</option>
      <option value="biweekly">Quincenal</option>
    </select>

    <label for="price">Precio de lo que quieres comprar:</label>
    <input type="number" id="price" placeholder="Precio del artículo" min="0" />

    <label for="people">Número de personas en la reunión:</label>
    <input type="number" id="people" placeholder="Número de personas" value="1" /> 

    <button onclick="calculate()">Calcular</button>
    <button onclick="clearFields()">Limpiar</button>

    <div class="result" id="result"></div>

    <div class="clock-container">
      <div class="clock" id="clock"></div>
      <div class="earnings" id="earnings"></div>
    </div>
  </div>

  <footer id="footer" class="footer dark-background">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <span class="sitename">Logis</span>
          </a>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
          <div class="social-links d-flex mt-4">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>A108 Adam Street</p>
          <p>New York, NY 535022</p>
          <p>United States</p>
          <p class="mt-4"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
          <p><strong>Email:</strong> <span>info@example.com</span></p>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">Logis</strong> <span>All Rights Reserved</span></p>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>

  </footer>

  <script>
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
      const deductionPercentage = parseFloat(document.getElementById('deduction').value) / 100 || 0;
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

      document.getElementById('result').innerHTML = `
                <h3>Resultados:</h3>
                <p>Salario neto: ${currencySymbol}${netSalary.toLocaleString(undefined, {minimumFractionDigits: 2})} (Salario bruto - deducción)</p>
                <p>Por segundo: ${currencySymbol}${perSecond.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
                <p>Por minuto: ${currencySymbol}${perMinute.toLocaleString(undefined , {minimumFractionDigits: 2})}</p>
                <p>Por hora: ${currencySymbol}${hourlyRate.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
                <p>Por día: ${currencySymbol}${perDay.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
                <p>Por mes: ${currencySymbol}${perPeriod.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
            `;

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
      document.getElementById('deduction').value = '9.17';
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
  </script>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/js/bootstrap.bundle.min.js"></script>

  <!-- Main JS File -->
  <script src="assets/js/main.js"></script>
</body>
</html>