//force https
if (location.protocol !== 'https:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
// force https section finish

//-----------------------------------
// Reuniones Javascript
//-----------------------------------

function AddPerson(){

}

function DeletePerson(personnumber){
  let PersonElement = document.getElementById(`person${personnumber}`);
  PersonElement.remove();
}