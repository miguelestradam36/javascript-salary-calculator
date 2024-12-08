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
peopleElement.style.display = 'none';

let people = 0;
let peoplearray = [];
/*
if (isNaN(personsalary_Element) || personsalary_Element <= 0) {
  alert("Por favor, ingresa un salario válido en el anterior integrante antes de solicitar un integrante mas.");
  people = people - 1;
  return;
}
*/

function AddPerson(){
  let persontoadd = [];
  const namevalue  = document.getElementById(`name`).value;
  const salaryvalue = document.getElementById(`salary`).value;
  persontoadd.push(namevalue);
  persontoadd.push(salaryvalue);
  // persontoadd: ['name', 'salary']
  // Add to main list
  peoplearray.push(persontoadd);

  peopleElement.innerHTML = ""; 

  for (i = 0; i < peoplearray.length; ++i) {
    let p = document.createElement('div');
    p.innerHTML= `<div class="row">Integrante #${i+1}: ${peoplearray[i][0]} con un salario bruto mensual de: ₡${peoplearray[i][1]} <br/></div>`;
    peopleElement.appendChild(p);
}

  //Show members
  peopleElement.style.display = 'block';
}

function DeletePerson(personnumber){

}

function CalculateMeeting(){

}