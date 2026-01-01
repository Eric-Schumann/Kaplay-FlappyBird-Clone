import k from "../ctxt";

export default function ScoreThreshold() {
  const threshold = k.add([
    k.rect(5, 10),
    k.pos(k.width() / 2 - 125, 0),
    k.area(),
    "threshold",
    {
      score() {
        k.play("point");
      },
    },
  ]);

  //threshold.hidden = true;

  return threshold;
}
