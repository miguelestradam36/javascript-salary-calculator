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

let peoplearray = [];
/*
if (isNaN(personsalary_Element) || personsalary_Element <= 0) {
  alert("Por favor, ingresa un salario válido en el anterior integrante antes de solicitar un integrante mas.");
  people = people - 1;
  return;
}
*/

resultElement.style.display = 'none';
alertElement.style.display = 'none';
peopleElement.style.display = 'none';
meetingElement.style.display = 'none';

function printMembers(){
  peopleElement.innerHTML = ""; 

  let contador = 0;
  for (i = 0; i < peoplearray.length; ++i) {
    if (peoplearray[i] != null){
      contador+=1;
      let p = document.createElement('div');
      p.innerHTML= `<div class="col-12">Integrante: ${peoplearray[i][0]} con un salario bruto mensual de: ₡${peoplearray[i][1]} / <a class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" onclick="DeletePerson('${peoplearray[i][0]}', '${peoplearray[i][1]}')">Eliminir integrante ${peoplearray[i][0]}</a></div>`;
      peopleElement.appendChild(p);
    }
  }
  if (contador == 0){
      let p = document.createElement('div');
      p.innerHTML= `<div class="col-12">No hay integrantes en este momento</div>`;
      peopleElement.appendChild(p);
      return;
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

  //Show members
  peopleElement.style.display = 'block';
  meetingElement.style.display = 'block';
}

function DeletePerson(name, salary){
  let deleted = false;

  for (i = 0; i < peoplearray.length; ++i) {
    if (peoplearray[i] != null) {
      if (name == peoplearray[i][0] && salary == peoplearray[i][1]){
        deleted = delete peoplearray[i];
        break;
      }
    }
  }
  if (deleted){
    //Print the new list in the html
    printMembers();
    return;
    
  } else {
    alert("No fue posible eliminar el elemento.");
    return;
  }

}

function CalculateMeeting(){

}