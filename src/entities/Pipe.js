import k from "../ctxt";

export default function Pipe(x, y, color) {
  const pipe = k.add([
    k.sprite(`pipe-${color}`),
    k.pos(x, y),
    k.area(),
    k.scale(2),
    k.anchor("top"),
    k.offscreen({ destroy: true }),
    k.z(2),
    "pipe",
  ]);

  pipe.onUpdate(() => {
    pipe.moveBy(-1.5, 0);
  });
  return pipe;
}
