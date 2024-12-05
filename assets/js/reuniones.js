//force https
if (location.protocol !== 'https:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
// force https section finish

//-----------------------------------
// Reuniones Javascript
//-----------------------------------

//Global variables

const peopleElement  = document.getElementById(`peoplenumber`);

let people = 0;
let peoplesalaryarray = [];

function AddPerson(){
  if (people == 0){
    people = people + 1;
    peopleElement.innerHTML += 
    `<div id="person${people}">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Member #${people}</span>
        </div>
        <input id="person${people}salary" type="number" class="form-control" placeholder="Gross salary" aria-label="Gross salary" pattern="^(?=.)(\d{1,3}(,\d{3})*)?(\.\d+)?$" required>
      </div>
      <div class="input-group mb-3">
        <button class="btn btn-danger" onclick="DeletePerson(${people})">Delete member #${people}</button>
      </div>
    </div>`;
    return;
  } else {
    people = people + 1;
    const personsalary_Element  = document.getElementById(`person${people - 1}salary`).value;
    if (isNaN(personsalary_Element) || personsalary_Element <= 0) {
      alert("Por favor, ingresa un salario válido en el anterior integrante antes de solicitar un integrante mas.");
      people = people - 1;
      return;
    }
    peopleElement.innerHTML += 
    `<div id="person${people}">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Member #${people}</span>
        </div>
        <input id="person${people}salary" type="number" class="form-control" placeholder="Gross salary" aria-label="Gross salary" pattern="^(?=.)(\d{1,3}(,\d{3})*)?(\.\d+)?$" required>
      </div>
      <div class="input-group mb-3">
        <button class="btn btn-danger" onclick="DeletePerson(${people})">Delete member #${people}</button>
      </div>
    </div>`;
    return;
  }
}

function DeletePerson(personnumber){
  let PersonElement = document.getElementById(`person${personnumber}`);
  PersonElement.remove();
}