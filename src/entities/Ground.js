import k from "../ctxt";

export default function Ground(x, y) {
  const ground = k.add([
    k.sprite("ground", {
      width: 320,
    }),
    k.area(),
    k.anchor("topleft"),
    k.pos(x, y),
    k.z(3),
    "ground",
    {
      speed: 200,
    },
  ]);

  ground.onUpdate(() => {
    ground.moveBy(-ground.speed * k.dt(), 0);
    if (ground.pos.x + ground.width <= 0) {
      ground.pos.x = 640;
    }
  });

  return ground;
}
