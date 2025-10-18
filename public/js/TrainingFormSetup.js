/**
 * Sets the default values of the training form.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

export class TrainingFormSetup {
  #trainingForm

  constructor(trainingForm) {
    this.#trainingForm = trainingForm
  }

  setDefaultValues() {
    this.#setTodaysDate()
    this.#setDefaultMinutes(60)
  }

  #setTodaysDate() {
    let today = new Date(Date.now())
    today = today.toISOString()
    today = today.substring(0, 10)

    this.#trainingForm.querySelector('#date').setAttribute('value', today)
    this.#trainingForm.querySelector('#date').setAttribute('max', today)
  }

  #setDefaultMinutes(minutes) {
    this.#trainingForm.querySelector('#minutes').setAttribute('value', minutes)
  }
}
