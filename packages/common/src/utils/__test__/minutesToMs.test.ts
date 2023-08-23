import minutesToMs from '../minutesToMs';

describe('minutesToMs', () => {
  test('5분은 300000ms이다.', () => {
    expect(minutesToMs(5)).toBe(300000);
  });

  test('10분은 600000ms이다.', () => {
    expect(minutesToMs(10)).toBe(600000);
  });
});
