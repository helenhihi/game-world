const startScreen = document.querySelector("#start-screen");
const gameMenu = document.querySelector("#game-menu");
const battleMenu = document.querySelector("#battle-menu");
const heroName = document.querySelector("#hero-name");
const heroLevel = document.querySelector("#hero-level");
const heroHp = document.querySelector("#hero-hp");
const heroXp = document.querySelector("#hero-xp");
const heroAtt = document.querySelector("#hero-att");
const monsterName = document.querySelector("#monster-name");
const monsterHp = document.querySelector("#monster-hp");
const monsterAtt = document.querySelector("#monster-att");
const message = document.querySelector("#message");

class Game {
  constructor(name) {
    this.hero = null;
    this.monster = null;
    this.monsterList = [{
      name: "슬라임",
      hp: 25,
      att: 10,
      xp: 10
    }, {
      name: "스켈레톤",
      hp: 50,
      att: 15,
      xp: 20
    }, {
      name: "마왕",
      hp: 150,
      att: 35,
      xp: 50
    }];
    this.start(name);
  }
  start(name) {
    console.log(this);
    gameMenu.addEventListener("submit", this.onGameMenuInput);
    battleMenu.addEventListener("submit", this.onBattleMenuInput);
    this.changeScreen("game");
    this.hero = new Hero(this, name);
    // console.log(this.hero);
    this.updateHeroStat();
  }
}

let game = null;
startScreen.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target["name-input"].value;
  game = new Game(name);
});