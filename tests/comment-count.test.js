import { countComment } from '../src/components/comments.js';
import comments from '../seeds/comments.js';

describe('', () => {
  document.body.innerHTML = '<p id="mov-count"></p>';
  test('return the number of shows', () => {
    const commentline = countComment(comments);
    expect(commentline).toBe('Comments(3)');
  });
});