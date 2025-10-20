/**
 * Reads and saves the user input.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

export class UserInput {
  #userinput = {}

  /**
  * Create an object from the values of the submitted form.
  * 
  * @param {HTMLFormElement} trainingForm - The submitted HTML form.
  */
  constructor (trainingForm) {
    this.#userinput.username = trainingForm.querySelector('#username').value
    this.#userinput.date = trainingForm.querySelector('#date').value
    this.#userinput.trainingType = trainingForm.querySelector('#trainingType').value
    this.#userinput.minutes = trainingForm.querySelector('#minutes').value
  }

  /**
   * Save the training information.
   */
  async save () {
    const res = await window.fetch('/training', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.#userinput)
    })

    const data = await res.json()
    
    if (!res.ok) {
      throw new Error(data.message)
    } 
    return data
  }
}
