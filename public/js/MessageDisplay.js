/**
 * Displays error and information messages.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

export class MessageDisplay {

  displayErrorMessage(message) {
    const p = document.createElement('p')
    p.textContent = message
    p.classList.add('error')
    document.querySelector('#messageDisplay').appendChild(p)
  }

  displayInfoMessage(message) {
    const p = document.createElement('p')
    p.textContent = message
    p.classList.add('info')
    document.querySelector('#messageDisplay').appendChild(p)
  }
}
