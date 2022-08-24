import ancientsData from "./data/ancients.js";
import cardsDataGreen from "./data/mythicCards/green/index.js";
import cardsDataBlue from "./data/mythicCards/blue/index.js";
import cardsDataBroun from "./data/mythicCards/brown/index.js";

const ancients = document.querySelector(".ancients-container");
let activeAncient;

// выбор древнего
const clickAncients = (event) => {
  event.preventDefault();
  for (let i = 0; i < ancients.children.length; i++) {
    if (ancients.children[i].closest(".active")) {
      ancients.children[i].classList.remove("active");
    }
  }
  if (event.target.closest(`.azathoth`)) {
    activeAncient = 0;
    document.querySelector(".azathoth").classList.toggle("active");
  }
  if (event.target.closest(`.cthulhu`)) {
    activeAncient = 1;
    document.querySelector(".cthulhu").classList.toggle("active");
  }
  if (event.target.closest(`.iogSothoth`)) {
    activeAncient = 2;
    document.querySelector(".iogSothoth").classList.toggle("active");
  }
  if (event.target.closest(`.shubNiggurath`)) {
    activeAncient = 3;
    document.querySelector(".shubNiggurath").classList.toggle("active");
  }
};
ancients.addEventListener("click", clickAncients);

//выбор сложности
const form = document.querySelector(".form_diff");
const radio = document.querySelectorAll(".diff");
let difficulty;

form.addEventListener("click", () => {
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      difficulty = radio[i].value;
      console.log(difficulty);
      break;
    }
  }
});
//рамдомное число
function random(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

//клик на кнопку Замешать колоду
const btnMix = document.querySelector(".deck-container");
const firstStage = document.querySelectorAll(".dots-container");
let arrCardAzathoth = [[], [], []];

const btnClick = () => {

  firstStage[0].children[0].innerHTML =
    ancientsData[activeAncient].firstStage.greenCards;
  firstStage[0].children[1].innerHTML =
    ancientsData[activeAncient].firstStage.brownCards;
  firstStage[0].children[2].innerHTML =
    ancientsData[activeAncient].firstStage.blueCards;

  firstStage[1].children[0].innerHTML =
    ancientsData[activeAncient].secondStage.greenCards;
  firstStage[1].children[1].innerHTML =
    ancientsData[activeAncient].secondStage.brownCards;
  firstStage[1].children[2].innerHTML =
    ancientsData[activeAncient].secondStage.blueCards;

  firstStage[2].children[0].innerHTML =
    ancientsData[activeAncient].thirdStage.greenCards;
  firstStage[2].children[1].innerHTML =
    ancientsData[activeAncient].thirdStage.brownCards;
  firstStage[2].children[2].innerHTML =
    ancientsData[activeAncient].thirdStage.blueCards;

  //создаем массив

  let green = [];
  let greenLong =
    ancientsData[activeAncient].firstStage.greenCards +
    ancientsData[activeAncient].secondStage.greenCards +
    ancientsData[activeAncient].thirdStage.greenCards;

  while (green.length < greenLong) {
    let j = random(1, 18);
    if (!green.includes(j)) {
      green.push(j);
    }
  }

  for (let i = 0; i < green.length; i++) {
    green[i] = cardsDataGreen[green[i] - 1];
  }

  let brown = [];
  let brownLong =
    ancientsData[activeAncient].firstStage.brownCards +
    ancientsData[activeAncient].secondStage.brownCards +
    ancientsData[activeAncient].thirdStage.brownCards;

  while (brown.length < brownLong) {
    let j = random(1, 21);
    if (!brown.includes(j)) {
      brown.push(j);
    }
  }
  for (let i = 0; i < brown.length; i++) {
    brown[i] = cardsDataBroun[brown[i] - 1];
  }

  let blue = [];
  let blueLong =
    ancientsData[activeAncient].firstStage.blueCards +
    ancientsData[activeAncient].secondStage.blueCards +
    ancientsData[activeAncient].thirdStage.blueCards;

  while (blue.length < blueLong) {
    let j = random(1, 12);
    if (!blue.includes(j)) {
      blue.push(j);
    }
  }
  for (let i = 0; i < blue.length; i++) {
    blue[i] = cardsDataBlue[blue[i] - 1];
  }

  //заполнение массива
  arrCardAzathoth = [[], [], []];

  for (let i = 0; i < ancientsData[activeAncient].firstStage.greenCards; i++) {
    arrCardAzathoth[0].push(green.pop());
  }
  for (let i = 0; i < ancientsData[activeAncient].secondStage.greenCards; i++) {
    arrCardAzathoth[1].push(green.pop());
  }
  for (let i = 0; i < ancientsData[activeAncient].thirdStage.greenCards; i++) {
    arrCardAzathoth[2].push(green.pop());
  }
  for (let i = 0; i < ancientsData[activeAncient].firstStage.brownCards; i++) {
    arrCardAzathoth[0].push(brown.pop());
  }
  for (let i = 0; i < ancientsData[activeAncient].secondStage.brownCards; i++) {
    arrCardAzathoth[1].push(brown.pop());
  }
  for (let i = 0; i < ancientsData[activeAncient].thirdStage.brownCards; i++) {
    arrCardAzathoth[2].push(brown.pop());
  }
  for (let i = 0; i < ancientsData[activeAncient].firstStage.blueCards; i++) {
    arrCardAzathoth[0].push(blue.pop());
  }
  for (let i = 0; i < ancientsData[activeAncient].secondStage.blueCards; i++) {
    arrCardAzathoth[1].push(blue.pop());
  }
  for (let i = 0; i < ancientsData[activeAncient].thirdStage.blueCards; i++) {
    arrCardAzathoth[2].push(blue.pop());
  }

  // перетосовка масива 2 раза
  arrCardAzathoth[0].sort(() => Math.random() - 0.5);
  arrCardAzathoth[1].sort(() => Math.random() - 0.5);
  arrCardAzathoth[2].sort(() => Math.random() - 0.5);
  arrCardAzathoth[0].sort(() => Math.random() - 0.5);
  arrCardAzathoth[1].sort(() => Math.random() - 0.5);
  arrCardAzathoth[2].sort(() => Math.random() - 0.5);

  document.querySelector(".last-card").style.opacity = 0;

  console.log(activeAncient);
  console.log(arrCardAzathoth);
};
btnMix.addEventListener("click", btnClick);

//клик по карте
const deck = document.querySelector(".deck");
const lasrCard = document.querySelector(".last-card");
const nextCard = () => {
  if (arrCardAzathoth[0].length > 0) {
    lasrCard.style.opacity = 1;
    lasrCard.style.backgroundImage = `url('assets/MythicCards/${
      arrCardAzathoth[0][arrCardAzathoth[0].length - 1].color
    }/${arrCardAzathoth[0][arrCardAzathoth[0].length - 1].id}.png')`;
    document.querySelectorAll(`.${arrCardAzathoth[0][arrCardAzathoth[0].length - 1].color}`)[0].innerHTML -=1
    arrCardAzathoth[0].pop();
  } else if (arrCardAzathoth[1].length > 0) {
    lasrCard.style.backgroundImage = `url('assets/MythicCards/${
      arrCardAzathoth[1][arrCardAzathoth[1].length - 1].color
    }/${arrCardAzathoth[1][arrCardAzathoth[1].length - 1].id}.png')`;
    document.querySelectorAll(`.${arrCardAzathoth[1][arrCardAzathoth[1].length - 1].color}`)[1].innerHTML -=1
    arrCardAzathoth[1].pop();
  } else if (arrCardAzathoth[2].length > 0) {
    lasrCard.style.backgroundImage = `url('assets/MythicCards/${
      arrCardAzathoth[2][arrCardAzathoth[2].length - 1].color
    }/${arrCardAzathoth[2][arrCardAzathoth[2].length - 1].id}.png')`;
    document.querySelectorAll(`.${arrCardAzathoth[2][arrCardAzathoth[2].length - 1].color}`)[2].innerHTML -=1
    arrCardAzathoth[2].pop();
  } else {
    lasrCard.style.opacity = 0;
  }

  console.log(arrCardAzathoth);
};

deck.addEventListener("click", nextCard);
console.log(document.querySelectorAll('.green')[1].innerHTML -=1);
