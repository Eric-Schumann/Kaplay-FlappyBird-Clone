import k from "../ctxt";
import { spawnPipes } from "../utilities/spawners";
import Background from "../entities/Background";
import ScoreThreshold from "../entities/ScoreThreshold";
import Ceiling from "../entities/Ceiling";
import Ground from "../entities/Ground";
import Bird from "../entities/Bird";

export default function gameScene() {
  k.randSeed(Date.now());
  let spawnInterval = 3;
  let score = 0;

  const scoreText = k.add([
    k.text(score, {
      font: "flappy",
      size: 100,
    }),
    k.pos(k.width() / 2, 10),
    k.z(3),
  ]);

  k.setGravity(1000);
  Background();
  const threshold = ScoreThreshold();
  Ceiling();

  k.loop(spawnInterval, () => {
    spawnPipes(k.width() + 20, k.rand(100, 425), "green");
  });

  Ground(0, k.height() - 50);
  Ground(320, k.height() - 50);
  Ground(640, k.height() - 50);

  threshold.onCollide("pipe", () => {
    score += 1;
    threshold.score();
    scoreText.text = score;
  });

  const bird = Bird("yellow");

  bird.onCollide("ground", () => {
    k.play("die");
    k.go("game-over", { score });
  });

  bird.onCollide("ceiling", () => {
    k.play("die");
    k.go("game-over", { score });
  });

  bird.onCollide("pipe", () => {
    bird.hit();
    k.go("game-over", { score });
  });
}
