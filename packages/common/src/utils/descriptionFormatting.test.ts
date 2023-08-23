import descriptionFormatting from './descriptionFormatting';

const generateRandomString = (length: number) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
};

describe('generateRandomString', () => {
  test('길이가 30인 랜덤한 문자열이 반환된다.', () => {
    const LENGTH = 30;

    const randomString = generateRandomString(LENGTH);

    expect(randomString.length).toBe(LENGTH);
  });
});

describe('descriptionFormatting', () => {
  test('길이가 120 이상인 문자열의 경우, 120자 이하의 문자열이 반환된다.', () => {
    const randomString = generateRandomString(1000);
    const formattedString = descriptionFormatting(randomString);

    expect(formattedString.length).toBeLessThanOrEqual(120);
  });

  test('길이가 120 이하인 문자열의 경우, 원래 문자열이 반환된다.', () => {
    const randomString = generateRandomString(100);
    const formattedString = descriptionFormatting(randomString);

    expect(formattedString).toBe(randomString);
  });
});
