/**
 * Saves the user input to the database.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import { ErrorHandler } from './ErrorHandler.js'

export class SaveUserInput {

  async saveTrainingInformation (values) {
    try {
      const res = await window.fetch('/training', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      const data = await res.json()
    
      if (!res.ok) {
        throw new Error(data.message)
      } 
      return data
    } catch (error) {
      const errorHandler = new ErrorHandler()
      errorHandler.displayErrorMessage(error.message)
    }
  }
}

