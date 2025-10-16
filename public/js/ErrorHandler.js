/* eslint-disable no-undef */
/**
 * This module handles errors in the frontend.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

export class ErrorHandler {

  displayErrorMessage(message) {
    const p = document.createElement('p')
    p.textContent = message
    p.classList.add('error')
    document.querySelector('#messageDisplay').appendChild(p)
  }
}
