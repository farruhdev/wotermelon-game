import { Bodies,Body,Engine,Events,Render,Runner,World } from "matter-js";
import { FRUITS_BASE, FRUITS_HLW } from "./fruits";
import "./dark.css";

let THEME = "halloween"; // { base, halloween }
let FRUITS = FRUITS_BASE;

switch (THEME) {
    case "halloween":
    FRUITS = FRUITS_HLW;
    break;
    default:
        FRUITS = FRUITS_BASE;
}

const engine = Engine.create();
const render = Render.create({
    engine,
    element: document.body,
    options: {
        wireframes: false,
        background: "#F7F4C8",
        width: 620,
        height: 850,
    }
});

const world = engine.world;

const leftWall = Bodies.rectangle(15, 395, 30, 790, {
    isStatic: true,
    render: { fillStyle: "#E6B143" }
});

const rightWall = Bodies.rectangle(605, 395, 30, 790, {
    isStatic: true,
    render: { fillStyle: "#E6B143"}
});

const ground = Bodies.rectangle(310, 820, 620, 60, {
    isStatic: true,
    render: { fillStyle: "#E6B143" }
});

const topLine = Bodies.rectangle(310, 120, 630, 5, {
    name: "topLine",
    isStatic: true,
    isSensor: true,
    render: { fillStyle: "#E6B143" }
  });

  World.add(world, [leftWall, rightWall, ground, topLine]);

  Render.run(render);
  Runner.run(engine);

  let currentBody = null;
  let currentFruit = null;
  let disableAction = false;
  let interval = null;