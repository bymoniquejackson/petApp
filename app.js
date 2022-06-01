const petUpdate = document.getElementById('petUpdate');
const petHunger = document.getElementById('petHunger');
const petThirst = document.getElementById('petThirst');
const petHappy = document.getElementById('petHappy');

const foodButton = document.getElementById("eatButton");
const drinkButton = document.getElementById("drinkButton");
const playButton = document.getElementById("playButton");



foodButton.addEventListener("click", (event) => {
  newDog.eat();
  newDog.checkHunger();
  newDog.displayScore();
});

drinkButton.addEventListener("click", (event) => {
  newDog.drink();
  newDog.checkThirst();
  newDog.displayScore();
});

playButton.addEventListener("click", (event) => {
  newDog.play();
  newDog.checkHappy();
  newDog.displayScore();
});



class Animal {
  constructor(name){
  this._name = name;
  this._hunger = 50;
  this._thirst = 50;
  this._happy = 50;
}
get name(){
  return this._name
}
get hunger(){
  return this._hunger
}
get thirst(){
  return this._thirst
}
get happy(){
  return this._happy
}

eat(){

  if (this._hunger <= 0){
  this._hunger = 0;
  } else if (this._hunger >= 100){
    this._hunger = 100;
  } else {
  this._hunger -= 10;
  this._thirst += 5;
  this._happy += 5;
  };
}

drink(){
  if (this._thirst <= 0 || this._thirst >= 100){
  
  } else {
  this._thirst -= 10;
  this._hunger += 5;
  this._happy += 5;
  };
}

play(){
  if (this._happy <= 0 || this._happy >= 100){

  } else {
  this._happy -= 10;
  this._hunger += 5;
  this._thirst += 5;
  };
}

displayScore() {
  petHunger.innerHTML = `Hungry ${this._hunger}`;
  petThirst.innerHTML = `Thirst ${this._thirst}`; 
  petHappy.innerHTML = `Happy ${this._happy}`;
};

checkHunger(){
  if (this._hunger >= 90) {
    petUpdate.innerHTML = `${this._name} is hungry`;
  } else if(this._hunger <= 10) {
    petUpdate.innerHTML = `${this._name} is full. No more food please.`;
  } else {

    petUpdate.innerHTML = `mmm tasty!`;
  };
};

checkThirst(){
  if (this._thirst >= 90) {
    petUpdate.innerHTML = `${this._name} is very thirsty. MORE!`;
  } else if(this._thirst <= 10) {
    petUpdate.innerHTML = `${this._name} is not thirsty anymore.`;
  } else {

    petUpdate.innerHTML = `drinking...........!`;
  };
};

checkHappy(){
  if (this._happy >= 90) {
    petUpdate.innerHTML = `${this._name} wants to play!`;
  } else if(this._happy <= 10) {
    petUpdate.innerHTML = `${this._name} would like to rest.`;
  } else {

    petUpdate.innerHTML = `roar!`;
  };
};

};



const newDog = new Animal("HOSHI!");