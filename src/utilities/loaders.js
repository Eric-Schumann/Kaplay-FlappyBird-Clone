import k from "../ctxt";
import gameScene from "../scenes/game";
import gameOver from "../scenes/gameOver";
import startScene from "../scenes/start";

const loadSprites = () => {
  for (let i = 0; i < 10; i++) {
    k.loadSprite(i + 1, `sprites/${i + 1}.png`);
  }
  k.loadSprite("game-over", "sprites/gameover.png");
  k.loadSprite("message", "sprites/message.png");
  k.loadSprite("background-day", "sprites/background-day.png");
  k.loadSprite("background-night", "sprites/background-night.png");
  k.loadSprite("ground", "sprites/base.png");
  const birdColors = ["blue", "red", "yellow"];
  const pipeColors = ["red", "green"];
  birdColors.forEach((color) => {
    k.loadSprite(`${color}bird-downflap`, `sprites/${color}bird-downflap.png`);
    k.loadSprite(`${color}bird-midflap`, `sprites/${color}bird-midflap.png`);
    k.loadSprite(`${color}bird-upflap`, `sprites/${color}bird-upflap.png`);
  });
  pipeColors.forEach((color) => {
    k.loadSprite(`pipe-${color}`, `sprites/pipe-${color}.png`);
  });
};

const loadScenes = () => {
  const scenes = [
    { name: "start", scene: startScene },
    { name: "game", scene: gameScene },
    { name: "game-over", scene: gameOver },
  ];
  scenes.forEach((s) => k.scene(s.name, s.scene));
};

const loadFonts = () => {
  k.loadFont("flappy", "fonts/FlappyBirdRegular.ttf", {
    filter: "nearest",
  });
};

const loadSounds = () => {
  k.loadSound("die", "audio/die.wav");
  k.loadSound("hit", "audio/hit.wav");
  k.loadSound("point", "audio/point.wav");
  k.loadSound("swoosh", "audio/swoosh.wav");
};

export { loadSprites, loadScenes, loadSounds, loadFonts };
