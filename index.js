import { create } from './modules/canvas.mjs';

let host = document.querySelector('#tetrish-game');
let myCanvas = create('myCanvas', host, 480, 320);
