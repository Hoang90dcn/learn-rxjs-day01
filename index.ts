// let rate = 1000;
// let lastMove = Date.now() - 1000;
// document.addEventListener('mousemove', (ev) => {
//   if (Date.now() - lastMove > rate) {
//     console.log(ev);
//     lastMove = Date.now();
//   }
// });

import { fromEvent, throttleTime } from 'rxjs';
import { map } from 'rxjs/operators';

// fromEvent(document, 'mousemove')
// .pipe(
//   throttleTime(1000),
//   map((ev: MouseEvent)=> ev.clientX+' '+ev.clientY)
// )
// .subscribe(console.log)
