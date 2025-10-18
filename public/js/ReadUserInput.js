/**
 * Reads the user input from the UI.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

export class ReadUserInput {

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
