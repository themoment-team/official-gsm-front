import formatDate from './formatDate';

describe('formatDate', () => {
  test('1일은 01이다.', () => {
    expect(formatDate(1)).toBe('01');
  });

  test('10일은 10이다.', () => {
    expect(formatDate(10)).toBe('10');
  });
});
