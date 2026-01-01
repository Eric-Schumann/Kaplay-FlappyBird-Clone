import k from "../ctxt";

export default function Ceiling() {
  const ceiling = k.add([
    k.rect(k.width(), 0),
    k.pos(0, 0),
    k.area(),
    "ceiling",
  ]);
  ceiling.hidden = true;
  return ceiling;
}
