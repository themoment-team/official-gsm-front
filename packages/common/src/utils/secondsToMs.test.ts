import secondsToMs from './secondsToMs';

describe('secondsToMs', () => {
  test('1초는 1000ms이다', () => {
    expect(secondsToMs(1)).toBe(1000);
  });

  test('60초(1분)은 60000ms이다', () => {
    expect(secondsToMs(60)).toBe(60000);
  });
});
