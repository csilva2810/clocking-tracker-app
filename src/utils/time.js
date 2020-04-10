const HOUR_CONVERSION = 60 * 60 * 1000;
const MINUTE_CONVERSION = 60 * 1000;

export const monthYearFormat = 'MM/YYYY';
export const dateFormat = 'DD/MM/YYYY';
export const timeFormat = 'HH:mm';

export function hoursToMs(hours) {
  return parseInt(hours, 10) * HOUR_CONVERSION;
}

export function timeToMs(time = '00:00') {
  const isNegative = time.includes('-');
  const [hours, minutes] = time.split(':');
  const hoursMs = hoursToMs(hours);
  const minutesMs = parseInt(minutes, 10) * MINUTE_CONVERSION;
  const ms = hoursMs + minutesMs;

  return isNegative ? ms * -1 : ms;
}

export function msToTime(ms = 0) {
  const preffix = ms < 0 ? '-' : '';
  let seconds = ms / 1000;
  const hours = Math.abs(parseInt(seconds / 3600, 10));
  seconds = seconds % 3600;
  const minutes = Math.abs(parseInt(seconds / 60, 10));
  seconds = seconds % 60;

  return (
    preffix + [String(hours).padStart(2, '0'), String(minutes).padStart(2, '0')].join(':')
  );
}

export function calculateWorkedHours(clocking) {
  if (!clocking) {
    return;
  }

  const { in: inTime, lunchStart, lunchEnd, out } = clocking;
  const outInDiff = timeToMs(out) - timeToMs(inTime);
  const lunchDiff = timeToMs(lunchEnd) - timeToMs(lunchStart);

  return msToTime(outInDiff - lunchDiff);
}

export function calculateBalance(workedHours, workloadHours) {
  const diff = timeToMs(workedHours) - hoursToMs(workloadHours);

  return msToTime(diff);
}
