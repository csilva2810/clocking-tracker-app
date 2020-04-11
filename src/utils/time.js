export const monthYearFormat = 'MM/YYYY';
export const dateFormat = 'DD/MM/YYYY';
export const timeFormat = 'HH:mm';

export function hoursToMs(hours) {
  return parseInt(hours, 10) * 60 * 60 * 1000;
}

export function timeToMs(time = '00:00') {
  const isNegative = time.includes('-');
  const [hours, minutes] = time.split(':');
  const hoursMs = hoursToMs(hours);
  const minutesMs = parseInt(minutes, 10) * 60 * 1000 * (isNegative ? -1 : 1);
  const ms = hoursMs + minutesMs;

  return ms;
}

export function msToTime(ms = 0) {
  const preffix = Math.sign(ms) === -1 ? '-' : '';
  let seconds = ms / 1000;
  const hours = Math.abs(parseInt(seconds / 3600, 10));
  seconds = seconds % 3600;
  const minutes = Math.abs(parseInt(seconds / 60, 10));
  seconds = seconds % 60;

  return preffix + [hours, minutes].map(i => String(i).padStart(2, '0')).join(':');
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
