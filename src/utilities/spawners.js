import Pipe from "../entities/Pipe";

function spawnPipes(x, y, color) {
  const pipeGap = 375;

  const top = Pipe(x, y, color);
  const bottom = Pipe(x, y + pipeGap, color);

  top.flipY = true;
  top.anchor = "bot";
}

export { spawnPipes };
