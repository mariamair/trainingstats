/**
 * Saves the user input to the database.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import { MessageDisplay } from './MessageDisplay.js'

export class UserInputSaver {
  #messageDisplay = new MessageDisplay()

  async saveTrainingInformation (values) {
    try {
      const res = await window.fetch('/training', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      const response = await res.json()
    
      if (!res.ok) {
        throw new Error(response.message)
      } 
      this.#messageDisplay.displayInfoMessage(response)
    } catch (error) {
      this.#messageDisplay.displayErrorMessage(error.message)
    }
  }
}

