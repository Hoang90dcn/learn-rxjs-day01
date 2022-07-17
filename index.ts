// let rate = 1000;
// let lastMove = Date.now() - 1000;
// document.addEventListener('mousemove', (ev) => {
//   if (Date.now() - lastMove > rate) {
//     console.log(ev);
//     lastMove = Date.now();
//   }
// });

import { fromEvent } from 'rxjs';

fromEvent(document, 'mousemove');
