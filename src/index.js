// == Imports
import { randomHexColor, generateSpanColor } from './utils';
import { CHANGE_DIRECTION_TO_45_DEG, changeDirection, CHANGE_DIRECTION } from './actions';

import store from './store';

function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { firstColor, lastColor } = store.getState();
  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors').innerHTML = result;
}

renderNbColors();
renderGradient();
renderColors();

store.subscribe(renderColors);
store.subscribe(renderGradient);
store.subscribe(renderNbColors);

document.getElementById('randAll')
  .addEventListener('click', () => {
    store.dispatch({ type: 'CHANGE_FIRST_COLOR', color: randomHexColor() });
    store.dispatch({ type: 'CHANGE_LAST_COLOR', color: randomHexColor() });
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    store.dispatch({ type: 'CHANGE_FIRST_COLOR', color: randomHexColor() });
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    store.dispatch({ type: 'CHANGE_LAST_COLOR', color: randomHexColor() });
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    store.dispatch({ type: CHANGE_DIRECTION, direction: '95deg' });
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    store.dispatch({ type: CHANGE_DIRECTION, direction: '270deg' });
  });

document.getElementById('45deg')
  .addEventListener('click', () => {
    store.dispatch({ type: CHANGE_DIRECTION, direction: '45deg' });
  });

document.getElementById('135deg')
  .addEventListener('click', () => {
    store.dispatch({ type: CHANGE_DIRECTION, direction: '135deg' });
  });

document.getElementById('225deg')
  .addEventListener('click', () => {
    store.dispatch({ type: CHANGE_DIRECTION, direction: '225deg' });
  });

document.getElementById('315deg')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('315deg'));
  });
