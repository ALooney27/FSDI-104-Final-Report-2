//object literal

let petSalon = {
  name: "The Fashion Pet",
  address: {
    country: "Mexico",
    city: "Tijuana",
    zip: "23456",
  },
  phone: "6659987311",
  pets: [],
};
let counter = 0;

//create the Pet constructor (name,age,gender,breed,service)

function Pet(name, age, gender, breed, service, type, payment) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.type = type;
  this.payment = payment;
  this.id = counter++;
}

//get the inputs from the HTML
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtType");
let inputPayment = document.getElementById("txtPayment");

function isValid(aPet) {
  let valid = true;
  if (aPet.name == "") {
    valid == false;
    inputName.classList.add("error");
  }
  if (aPet.service == "") {
    valid = false;
    inputService.classList.add("error");
  }
  return valid;
}

function clearInputs() {
  inputName.value = "";
  inputAge.value = "";
  inputGender.value = "";
  inputBreed.value = "";
  inputService.value = "";
  inputType.value = "";
  inputPayment.value = "";
}

function register() {
  //create the obj
  let newPet = new Pet(
    inputName.value,
    inputAge.value,
    inputGender.value,
    inputBreed.value,
    inputService.value,
    inputType.value,
    inputPayment.value
  );
  if (isValid(newPet)) {
    //display the obj
    petSalon.pets.push(newPet);
    // displayPetCard();
    displayPetTable();
    clearInputs();
  }
}

function deletePet(id) {
  console.log("Deleting pet" + id);
  let deleteIndex;
  document.getElementById(id).remove(); //removes from HTML
  //What about the array?
  for (let index = 0; index < petSalon.length; index++) {
    let pet = petSalon.pets[index];
    if (pet.id == id) {
      deleteIndex = i;
    }
  }
  petSalon.pets.splice(deleteIndex, 1); //removes from the array
}

function init() {
  //hook events
  //create two pets using the Pet constructor
  let scooby = new Pet(
    "Scooby",
    21,
    "Male",
    "Great Dane",
    "Vaccines",
    "Doberman",
    "Cash"
  );
  let snoop = new Pet(
    "Snoop",
    30,
    "Male",
    "Atomic Dog",
    "Vaccizzles",
    "Rottweiler",
    "Debit"
  );
  petSalon.pets.push(scooby, snoop);

  // displayPetCard();
  displayPetTable();
}

window.onload = init; //wait to render the HTML
