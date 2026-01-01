import k from "./ctxt";
import {
  loadScenes,
  loadSprites,
  loadSounds,
  loadFonts,
} from "./utilities/loaders";

k.loadRoot("./"); // A good idea for Itch.io publishing later

loadSprites();
loadScenes();
loadSounds();
loadFonts();

k.go("start");
