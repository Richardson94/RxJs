import { of, interval, fromEvent } from 'rxjs';
import { map, mergeMap, take, takeUntil } from 'rxjs/operators';

const letras$ = of('a', 'b', 'c');

letras$.pipe(
  mergeMap((letra) =>
    interval(1000).pipe(
      map((i) => letra + i),
      take(3)
    )
  )
);
// .subscribe({
//   next: (val) => console.log('next:', val),
//   complete: () => console.log('Completed'),
// });

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const intervals$ = interval();

mouseDown$
  .pipe(mergeMap(() => intervals$.pipe(takeUntil(mouseUp$))))
  .subscribe(console.log);
