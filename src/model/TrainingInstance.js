/**
 * Represents training data.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

export class TrainingInstance {
  #trainingInstance = {}

  constructor (trainingInstance) {
    this.#trainingInstance.username = trainingInstance.username
    this.#trainingInstance.date = trainingInstance.date
    this.#trainingInstance.trainingType = trainingInstance.trainingType
    this.#setMinutes(trainingInstance.minutes)
    this.#setIntensity(trainingInstance.intensity)
  }

  #setMinutes(minutes) {
    if (Number.parseInt(minutes)) {
      this.#trainingInstance.minutes = Number.parseInt(minutes)
    } else {
      throw new Error('Not a valid number of minutes')
    }
  }

  #setIntensity(intensity){
    if (intensity === undefined) {
      this.#trainingInstance.intensity = 'medium'
    } else {
      this.#trainingInstance.intensity = intensity
    }
  }

  getTrainingInstance() {
    const trainingInstance = Object.assign(this.#trainingInstance)
    return trainingInstance
  }
}
