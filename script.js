import ancientsData from "./data/ancients.js";
import cardsDataGreen from "./data/mythicCards/green/index.js";
import cardsDataBlue from "./data/mythicCards/blue/index.js";
import cardsDataBrown from "./data/mythicCards/brown/index.js";

console.log(`Score: 100 /100;\n
Выполненны все пункты за которые даются балы.\n
Для связи со мной: \n
Телеграмм: @max_fil13\n
Дисхорд: Max13#1323\n
`)

const ancients = document.querySelector(".ancients-container");
let activeAncient = "";

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

      break;
    }
  }
});
//рамдомное число
function random(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// создаем массивы карт зеленый, коричневый и синий для среднего уровня сложности
function greenMedium() {
  let green = [];
  let greenLong =
    ancientsData[activeAncient].firstStage.greenCards +
    ancientsData[activeAncient].secondStage.greenCards +
    ancientsData[activeAncient].thirdStage.greenCards;
  let sortCardsDataGreen;
  if (difficulty === "medium") {
    sortCardsDataGreen = cardsDataGreen;
  }
  if (difficulty === "easy") {
    sortCardsDataGreen = cardsDataGreen.filter(
      (elem) => elem.difficulty !== "hard"
    );
  }
  if (difficulty === "high") {
    sortCardsDataGreen = cardsDataGreen.filter(
      (elem) => elem.difficulty !== "easy"
    );
  }
  if (difficulty === "easiest") {
    sortCardsDataGreen = cardsDataGreen.filter(
      (elem) => elem.difficulty === "easy"
    );
    let sortCardsDataGreenNorm = cardsDataGreen.filter(
      (elem) => elem.difficulty === "normal"
    );
    while (sortCardsDataGreen.length < greenLong) {
      sortCardsDataGreen.push(sortCardsDataGreenNorm[random(0, sortCardsDataGreenNorm.length -1)]);
    }
  }
  if (difficulty === "highest") {
    sortCardsDataGreen = cardsDataGreen.filter(
      (elem) => elem.difficulty === "hard"
    );
    let sortCardsDataGreenNorm = cardsDataGreen.filter(
      (elem) => elem.difficulty === "normal"
    );
    while (sortCardsDataGreen.length < greenLong) {
      sortCardsDataGreen.push(sortCardsDataGreenNorm[random(0, sortCardsDataGreenNorm.length -1)]);
    }
  }
  while (green.length < greenLong) {
    let j = random(1, sortCardsDataGreen.length);
    if (!green.includes(j)) {
      green.push(j);
    }
  }
  for (let i = 0; i < green.length; i++) {
    green[i] = sortCardsDataGreen[green[i] - 1];
  }
  return green;
}

function brownMedium() {
  let brown = [];
  let brownLong =
    ancientsData[activeAncient].firstStage.brownCards +
    ancientsData[activeAncient].secondStage.brownCards +
    ancientsData[activeAncient].thirdStage.brownCards;

  let sortCardsDataBrown;
  if (difficulty === "medium") {
    sortCardsDataBrown = cardsDataBrown;
  }
  if (difficulty === "easy") {
    sortCardsDataBrown = cardsDataBrown.filter(
      (elem) => elem.difficulty !== "hard"
    );
  }
  if (difficulty === "high") {
    sortCardsDataBrown = cardsDataBrown.filter(
      (elem) => elem.difficulty !== "easy"
    );
  }
  if (difficulty === "easiest") {
    sortCardsDataBrown = cardsDataBrown.filter(
      (elem) => elem.difficulty === "easy"
    );
    let sortCardsDataBrownNorm = cardsDataBrown.filter(
      (elem) => elem.difficulty === "normal"
    );
    while (sortCardsDataBrown.length < brownLong) {
      sortCardsDataBrown.push(sortCardsDataBrownNorm[random(0, sortCardsDataBrownNorm.length -1)]);
    }
  }
  if (difficulty === "highest") {
    sortCardsDataBrown = cardsDataBrown.filter(
      (elem) => elem.difficulty === "hard"
    );
    let sortCardsDataBrownNorm = cardsDataBrown.filter(
      (elem) => elem.difficulty === "normal"
    );
    while (sortCardsDataBrown.length < brownLong) {
      sortCardsDataBrown.push(sortCardsDataBrownNorm[random(0, sortCardsDataBrownNorm.length -1)]);
    }
  }

  while (brown.length < brownLong) {
    let j = random(1, sortCardsDataBrown.length);
    if (!brown.includes(j)) {
      brown.push(j);
    }
  }
  for (let i = 0; i < brown.length; i++) {
    brown[i] = sortCardsDataBrown[brown[i] - 1];
  }
  return brown;
}

function blueMedium() {
  let blue = [];
  let blueLong =
    ancientsData[activeAncient].firstStage.blueCards +
    ancientsData[activeAncient].secondStage.blueCards +
    ancientsData[activeAncient].thirdStage.blueCards;

  let sortCardsDataBlue;
  if (difficulty === "medium") {
    sortCardsDataBlue = cardsDataBlue;
  }
  if (difficulty === "easy") {
    sortCardsDataBlue = cardsDataBlue.filter(
      (elem) => elem.difficulty !== "hard"
    );
  }
  if (difficulty === "high") {
    sortCardsDataBlue = cardsDataBlue.filter(
      (elem) => elem.difficulty !== "easy"
    );
  }
  if (difficulty === "easiest") {
    sortCardsDataBlue = cardsDataBlue.filter(
      (elem) => elem.difficulty === "easy"
    );
    let sortCardsDataBlueNorm = cardsDataBlue.filter(
      (elem) => elem.difficulty === "normal"
    );
    while (sortCardsDataBlue.length < blueLong) {
      sortCardsDataBlue.push(sortCardsDataBlueNorm[random(0, sortCardsDataBlueNorm.length -1)]);
    }
  }
  if (difficulty === "highest") {
    sortCardsDataBlue = cardsDataBlue.filter(
      (elem) => elem.difficulty === "hard"
    );
    let sortCardsDataBlueNorm = cardsDataBlue.filter(
      (elem) => elem.difficulty === "normal"
    );
    while (sortCardsDataBlue.length < blueLong) {
      sortCardsDataBlue.push(sortCardsDataBlueNorm[random(0, sortCardsDataBlueNorm.length -1)]);
    }
  }

  while (blue.length < blueLong) {
    let j = random(1, sortCardsDataBlue.length);
    if (!blue.includes(j)) {
      blue.push(j);
    }
  }
  for (let i = 0; i < blue.length; i++) {
    blue[i] = sortCardsDataBlue[blue[i] - 1];
  }
  return blue;
}

//клик на кнопку Замешать колоду
const btnMix = document.querySelector(".deck-container");
const firstStage = document.querySelectorAll(".dots-container");
let arrCardAzathoth = [[], [], []];

const btnClick = (event) => {
  event.preventDefault()
  if (activeAncient === "") return alert("Выберите древнего!");
  if (!difficulty) return alert("Выберите сложность!");


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
  let green;
  let brown;
  let blue;

  if (
    difficulty === "medium" ||
    difficulty === "easy" ||
    difficulty === "high" ||
    difficulty === "easiest"||
    difficulty === "highest"
  ) {
    green = greenMedium();
    brown = brownMedium();
    blue = blueMedium();
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
  document.querySelector('.deck').style.opacity = 1;

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
    document.querySelectorAll(
      `.${arrCardAzathoth[0][arrCardAzathoth[0].length - 1].color}`
    )[0].innerHTML -= 1;
    arrCardAzathoth[0].pop();
  } else if (arrCardAzathoth[1].length > 0) {
    lasrCard.style.backgroundImage = `url('assets/MythicCards/${
      arrCardAzathoth[1][arrCardAzathoth[1].length - 1].color
    }/${arrCardAzathoth[1][arrCardAzathoth[1].length - 1].id}.png')`;
    document.querySelectorAll(
      `.${arrCardAzathoth[1][arrCardAzathoth[1].length - 1].color}`
    )[1].innerHTML -= 1;
    arrCardAzathoth[1].pop();
  } else if (arrCardAzathoth[2].length > 0) {
    lasrCard.style.backgroundImage = `url('assets/MythicCards/${
      arrCardAzathoth[2][arrCardAzathoth[2].length - 1].color
    }/${arrCardAzathoth[2][arrCardAzathoth[2].length - 1].id}.png')`;
    document.querySelectorAll(
      `.${arrCardAzathoth[2][arrCardAzathoth[2].length - 1].color}`
    )[2].innerHTML -= 1;
    arrCardAzathoth[2].pop();
  } else {
    document.querySelector('.deck').style.opacity = 0;
  }


};

deck.addEventListener("click", nextCard);
