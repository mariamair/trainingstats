/**
 * Reads the user input from the UI.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

export class UserInputReader {

  /**
   * Read the values in the submitted form and convert them to an object.
   * 
   * @param {HTMLFormElement} trainingForm - The submitted HTML form.
   * @returns {object} - An object containing the values the user has filled in.
   */
  readTrainingInformation (trainingForm) {
    const values = { 
      username: trainingForm.querySelector('#username').value,
      date: trainingForm.querySelector('#date').value,
      trainingType: trainingForm.querySelector('#trainingType').value,
      minutes: trainingForm.querySelector('#minutes').value
    }
    return values
  }
}
