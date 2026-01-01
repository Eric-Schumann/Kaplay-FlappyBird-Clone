import k from "../ctxt";

export default function Bird(color) {
  const bird = k.add([
    k.sprite(`${color}bird-upflap`),
    k.pos(k.width() / 2, k.height() / 2),
    k.anchor("center"),
    k.scale(2),
    k.body(),
    k.area(),
    k.rotate(0),
    k.timer(),
    k.z(4),
    "bird",
    {
      bodyColor: color,
      animTime: 0,
      frameIndex: 0,
      hit() {
        k.play("hit");
      },
    },
  ]);

  bird.jumpForce = 800;

  const frames = [
    `${bird.bodyColor}bird-upflap`,
    `${bird.bodyColor}bird-midflap`,
    `${bird.bodyColor}bird-downflap`,
  ];

  bird.onUpdate(() => {
    const targetAngle = k.lerp(-25, 90, k.clamp(bird.vel.y / 1200, 0, 1));
    bird.angle = k.lerp(bird.angle, targetAngle, 0.15);

    bird.animTime += k.dt();
    if (bird.animTime >= 0.15) {
      // ~20 FPS (adjust for speed)
      bird.animTime = 0;

      bird.frameIndex = (bird.frameIndex + 1) % 3;
      bird.use(k.sprite(frames[bird.frameIndex]));
    }
  });

  bird.onMousePress(() => {
    bird.jump(bird.jumpForce);
    k.play("swoosh");
  });

  return bird;
}
