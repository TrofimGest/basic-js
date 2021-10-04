import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {

if (!date)
return 'Unable to determine the time of year!';

if (!(date instanceof Date) || Object.keys(date).length)
throw new Error('Invalid date!');

let month = date.getMonth();
let timeOfYear;
if (month >= 2 && month <= 4)
  timeOfYear = 'spring';

if (month >= 5 && month <= 7)
  timeOfYear = 'summer';

if (month >= 8 && month <= 10)
  timeOfYear = 'autumn';

if (month == 11 || month == 12 || month == 11 )
  timeOfYear = 'winter';

return (timeOfYear);
}
