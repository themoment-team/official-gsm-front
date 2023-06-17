import secondsToMs from './secondsToMs';

const minutesToMs = (min: number) => min * secondsToMs(60);

export default minutesToMs;
