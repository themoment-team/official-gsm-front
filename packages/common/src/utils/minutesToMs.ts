import secondsToMs from './secondsToMs';

const minutesToMs = (minutes: number) => minutes * secondsToMs(60);

export default minutesToMs;
