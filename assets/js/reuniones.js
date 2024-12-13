//force https
if (location.protocol !== 'https:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
// force https section finish

//-----------------------------------
// Reuniones Javascript
//-----------------------------------

//Global variables
const resultElement  = document.getElementById(`result`);
const alertElement  = document.getElementById(`miniresultadoingreso`);
const peopleElement  = document.getElementById(`peoplenumber`);
const meetingElement  = document.getElementById(`meetingsettings`);
const formsectionElement = document.getElementById(`formsection`);

let peoplearray = [];

resultElement.style.display = 'none';
alertElement.style.display = 'none';
peopleElement.style.display = 'none';
meetingElement.style.display = 'none';
formsectionElement.style.display = 'none';

function printCalculationForm(){
  formsectionElement.innerHTML = ""; 

  let div = document.createElement('div');

  div.innerHTML= `<div class="col-12">

  <h4>Ajustes finales</h2>
  <hr/>

  <div class="row mb-3">
    <label class="form-label" for="week">Ingresa la horas laboradas por semana de los integrantes:</label>
    <select id="week" class="form-select" aria-label="Horas laboradas por semana">
      <option value="40">40</option>
      <option value="45">45</option>
      <option value="48" selected>48</option>
    </select>
  </div>

  <div class="row mb-3">
    <label class="form-label" for="meetingminutes">Ingresa el número de minutos de la reunión:</label>
    <input class="form-control" type="number" id="meetingminutes" value="60" placeholder="60" min="0" pattern="^(?=.)(\d{1,3}(,\d{3})*)?(\.\d+)?$" required/>
  </div>

  <div class="row mb-3">
    <button class="btn btn-success" onclick="CalculateMeeting()">Calcular costes de la reunión</button>
  </div>
  
  </div>`;

  formsectionElement.appendChild(div);

  //Show form
  formsectionElement.style.display = 'block';
}

function printMembers(){
  peopleElement.innerHTML = ""; 

  let contador = 0;
  for (i = 0; i < peoplearray.length; ++i) {
    if (peoplearray[i] != null){
      contador+=1;
      let p = document.createElement('div');
      p.innerHTML= `<div class="col-12">Integrante: ${peoplearray[i][0]} con un salario bruto mensual de: ₡${parseFloat(peoplearray[i][1]).toFixed(2).toLocaleString(undefined, {minimumFractionDigits: 1})} / <a class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" onclick="DeletePerson('${peoplearray[i][0]}', '${peoplearray[i][1]}')">Eliminir integrante ${peoplearray[i][0]}</a></div>`;
      peopleElement.appendChild(p);
    }
  }
  if (contador == 0){
    let p = document.createElement('div');
    p.innerHTML= `<div class="col-12">No hay integrantes en este momento</div>`;
    peopleElement.appendChild(p);
    formsectionElement.style.display = 'none';
    return;
  } else {
    //Print calculation form
    printCalculationForm();
  }
}

function AddPerson(){
  let persontoadd = [];
  const namevalue  = document.getElementById(`name`).value;
  const salaryvalue = document.getElementById(`salary`).value;

  persontoadd.push(namevalue);
  persontoadd.push(salaryvalue);
  // persontoadd: ['name', 'salary']
  // Add to main list
  peoplearray.push(persontoadd);

  //Print the list in the html
  printMembers();

  //Alert on the form
  alertElement.textContent = `Añadiste a ${namevalue} a la reunión`;

  //Show members
  peopleElement.style.display = 'block';
  meetingElement.style.display = 'block';
  alertElement.style.display = 'flex';

  //Hidde results uppon change in list
  resultElement.style.display = 'none';
}

function DeletePerson(name, salary){

  alertElement.style.display = 'none';

  let deleted = false;

  for (i = 0; i < peoplearray.length; ++i) {
    if (peoplearray[i] != null) {
      if (name == peoplearray[i][0] && salary == peoplearray[i][1]){
        deleted = delete peoplearray[i];

        //Hidde results uppon change in list
        resultElement.style.display = 'none';

        break;
      }
    }
  }
  if (deleted){
    //Print the new list in the html
    printMembers();
    let p = document.createElement('div');
    p.innerHTML= `<div class="col-12">
      <div class="alert alert-info" role="alert">
        Eliministe a ${name} de la reunión
      </div>
    </div>`;
    peopleElement.appendChild(p);
    return;

  } else {
    alert("No fue posible eliminar el elemento.");
    return;
  }
}

function CalculateMeeting(){
  let totalcost = 0;

  const workedhoursperweek  = document.getElementById(`week`).value;
  const time  = document.getElementById(`meetingminutes`).value;

  for (i = 0; i < peoplearray.length; ++i) {
    if (peoplearray[i] != null){
      let hourlyRate = (peoplearray[i][1] * 1.42) / (workedhoursperweek * 4.4);
      let perMinute = hourlyRate / 60;
      totalcost += perMinute * time;
    }
  }
  resultElement.innerHTML = `
    <div class="col-lg-12" data-aos="zoom-in">
        <div class="pricing-item">
          <h3>Costo de la reunión</h3>
          <h4><sup>₡</sup>${parseFloat(totalcost).toFixed(2).toLocaleString(undefined, {minimumFractionDigits: 1})}<span> / reunión</span></h4>
          <ul>
            <li><i class="bi bi-alarm"></i> <span>La reunión cuenta con un total de ${time} minutos.</span></li>
            <li><i class="bi bi-calendar-event-fill"></i> <span>Los integrantes de la reunión trabajan un total de ${workedhoursperweek} por semana</span></li>
            <li><i class="bi bi-check"></i> <span>Los datos están basados en el salario bruto de los integrantes</span></li>
            <li><i class="bi bi-building-check"></i> <span>En el caso de Costa Rica, el empleador deberá pagar unos cargos adicionales a sus empleados. Esta calculadora contempla que estas cargas sociales, suman alrededor de un 42% al coste de un empleado (un 42% adicional sobre el salario bruto).</span></li>
          </ul>
        </div>
    </div><!-- End Pricing Item -->
  `;
  //Show results
  resultElement.style.display = 'block';
}