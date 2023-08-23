import pxToRem from './pxToRem';

describe('pxToREM', () => {
  test('80px은 5rem이다', () => {
    expect(pxToRem(80)).toBe(5);
  });
});
