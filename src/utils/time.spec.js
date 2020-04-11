import {
  hoursToMs,
  timeToMs,
  msToTime,
  calculateWorkedHours,
  calculateBalance,
} from './time';

const oneHourInMs = 1 * 60 * 60 * 1000;
const twoHoursInMs = 2 * 60 * 60 * 1000;
const twoHoursAndAHalfInMs = 2.5 * 60 * 60 * 1000;
const tenHoursInMs = 10 * 60 * 60 * 1000;
const tenHoursAndAHalfInMs = 10.5 * 60 * 60 * 1000;
const thirtyHoursInMs = 30 * 60 * 60 * 1000;

describe('time', () => {
  describe('hoursToMs', () => {
    it('should convert hours to ms', () => {
      expect(hoursToMs(1)).toBe(oneHourInMs);
      expect(hoursToMs(2)).toBe(twoHoursInMs);
      expect(hoursToMs(10)).toBe(tenHoursInMs);
      expect(hoursToMs(30)).toBe(thirtyHoursInMs);
    });

    it('should convert return a negative ms for negative hours', () => {
      expect(hoursToMs(-1)).toBe(-oneHourInMs);
      expect(hoursToMs(-2)).toBe(-twoHoursInMs);
      expect(hoursToMs(-10)).toBe(-tenHoursInMs);
      expect(hoursToMs(-30)).toBe(-thirtyHoursInMs);
    });
  });

  describe('timeToMs', () => {
    it('should convert time formatted string to ms', () => {
      expect(timeToMs('01:00')).toBe(oneHourInMs);
      expect(timeToMs('02:00')).toBe(twoHoursInMs);
      expect(timeToMs('02:30')).toBe(twoHoursAndAHalfInMs);
      expect(timeToMs('10:00')).toBe(tenHoursInMs);
      expect(timeToMs('30:00')).toBe(thirtyHoursInMs);
    });

    it('should convert negative ms to negative time', () => {
      expect(timeToMs('-01:00')).toBe(-oneHourInMs);
      expect(timeToMs('-02:00')).toBe(-twoHoursInMs);
      expect(timeToMs('-02:30')).toBe(-twoHoursAndAHalfInMs);
      expect(timeToMs('-10:30')).toBe(-tenHoursAndAHalfInMs);
      expect(timeToMs('-30:00')).toBe(-thirtyHoursInMs);
    });
  });

  describe('msToTime', () => {
    it('should convert ms to time', () => {
      expect(msToTime(oneHourInMs)).toBe('01:00');
      expect(msToTime(twoHoursInMs)).toBe('02:00');
      expect(msToTime(tenHoursInMs)).toBe('10:00');
      expect(msToTime(thirtyHoursInMs)).toBe('30:00');
    });

    it('should work with negative numbers', () => {
      expect(msToTime(-oneHourInMs)).toBe('-01:00');
      expect(msToTime(-twoHoursInMs)).toBe('-02:00');
      expect(msToTime(-tenHoursInMs)).toBe('-10:00');
      expect(msToTime(-thirtyHoursInMs)).toBe('-30:00');
    });

    it('should work with hours:minutes', () => {
      expect(msToTime(twoHoursAndAHalfInMs)).toBe('02:30');
      expect(msToTime(-twoHoursAndAHalfInMs)).toBe('-02:30');
      expect(msToTime(-tenHoursAndAHalfInMs)).toBe('-10:30');
    });
  });

  describe('calculateWorkedHours', () => {
    it('should calculate worked hours properly', () => {
      expect(
        calculateWorkedHours({
          in: '10:00',
          lunchStart: '12:00',
          lunchEnd: '13:00',
          out: '19:00',
        }),
      ).toBe('08:00');

      expect(
        calculateWorkedHours({
          in: '11:00',
          lunchStart: '12:00',
          lunchEnd: '13:00',
          out: '19:00',
        }),
      ).toBe('07:00');

      expect(
        calculateWorkedHours({
          in: '10:00',
          lunchStart: '12:00',
          lunchEnd: '13:00',
          out: '22:00',
        }),
      ).toBe('11:00');

      expect(
        calculateWorkedHours({
          in: '10:00',
          lunchStart: '12:00',
          lunchEnd: '13:30',
          out: '19:00',
        }),
      ).toBe('07:30');
    });
  });

  describe('calculateBalance', () => {
    it('should calculate the balance base on the workload hours', () => {
      expect(calculateBalance('08:00', 8)).toBe('00:00');
      expect(calculateBalance('08:00', 7)).toBe('01:00');
      expect(calculateBalance('08:00', 9)).toBe('-01:00');
    });
  });
});
