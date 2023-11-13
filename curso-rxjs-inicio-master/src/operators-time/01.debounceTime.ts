import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(debounceTime(3000));
//.subscribe(console.log)

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$
  .pipe(pluck('target', 'value'), debounceTime(3000), distinctUntilChanged())
  .subscribe(console.log);
