import itemCounter from '../src/components/itemCounter.js';
import movies from '../seeds/shows.js';

describe('', () => {
  document.body.innerHTML = '<p id="mov-count"></p>';
  const co = document.querySelector('#mov-count');
  test('return the number of shows', () => {
    itemCounter(movies, co);
    expect(movies.length).toEqual(10);
  });
});