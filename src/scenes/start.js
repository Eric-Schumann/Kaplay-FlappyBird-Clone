import k from "../ctxt";
import Background from "../entities/Background";
import Ground from "../entities/Ground";

export default function StartScene() {
  Background();
  Ground(0, k.height() - 50).paused = true;
  Ground(320, k.height() - 50).paused = true;
  Ground(640, k.height() - 50).paused = true;
  const highScore = k.getData("highScore");
  k.add([
    k.sprite("message", {
      width: 620,
      height: 940,
    }),
    k.pos(10, 10),
    k.z(3),
  ]);

  let highScoreText;
  if (highScore && highScore > 0) {
    highScoreText = k.add([
      k.text(`High Score: ${highScore}`, {
        font: "flappy",
        size: 75,
      }),
      k.z(4),
      k.anchor("center"),
      k.pos(k.width() / 2, 275),
    ]);
  }

  k.onMousePress(() => {
    k.go("game");
  });
}
