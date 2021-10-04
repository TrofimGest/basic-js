import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {

  let secondCheck = email.substr(email.indexOf('@')+1, email.length)
  let thirdCheck = secondCheck.substr(0, secondCheck.length)
  if (thirdCheck.includes('@')){
      return (thirdCheck.substr(thirdCheck.indexOf('@')+1, thirdCheck.length))
  }
  else{
      return (secondCheck)
  }
}
