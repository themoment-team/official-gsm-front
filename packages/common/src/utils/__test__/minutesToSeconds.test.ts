import minutesToSeconds from '../minutesToSeconds';

describe('minutesToSeconds', () => {
  test('1분은 60초이다.', () => {
    expect(minutesToSeconds(1)).toBe(60);
  });

  test('5분은 300초이다.', () => {
    expect(minutesToSeconds(5)).toBe(300);
  });
});
