import k from "../ctxt";

export default function Background(type = "day") {
  return k.add([
    k.sprite(`background-${type}`, {
      width: 640,
      height: 960,
    }),
    k.z(1),
    k.pos(0, 0),
  ]);
}
