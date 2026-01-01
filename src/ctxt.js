import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay({
  width: 640,
  height: 960,
  letterbox: true,
  crisp: true,
});

export default k;
