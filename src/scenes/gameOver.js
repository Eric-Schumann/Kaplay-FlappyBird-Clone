import k from "../ctxt";
import Background from "../entities/Background";
import Ground from "../entities/Ground";

export default function gameOver(opts) {
  const highScore = k.getData("highScore");

  if (!highScore || highScore < opts.score) {
    k.setData("highScore", opts.score);
  }

  const gameOver = k.add([
    k.sprite("game-over", {
      width: 320,
      height: 110,
    }),
    k.opacity(0),
    k.anchor("center"),
    k.pos(k.width() / 2, k.height() / 2),
    k.z(4),
  ]);

  Background();
  Ground(0, k.height() - 50).paused = true;
  Ground(320, k.height() - 50).paused = true;
  Ground(640, k.height() - 50).paused = true;

  k.add([
    k.rect(k.width(), k.height()),
    k.color(0, 0, 0),
    k.opacity(0.5),
    k.z(3), // behind text but above background/ground
  ]);

  const score = k.add([
    k.text(`Final Score: ${opts.score}`, {
      font: "flappy",
      size: 50,
    }),
    k.opacity(0),
    k.z(4),
    k.anchor("center"),
    k.pos(k.width() / 2, k.height() / 2 + 100),
  ]);

  k.tween(0, 1, 1, (o) => (gameOver.opacity = o), k.easings.easeInCirc);
  k.tween(0, 1, 1, (o) => (score.opacity = o), k.easings.easeInOutSine);

  k.wait(3, () => k.go("start"));
}
