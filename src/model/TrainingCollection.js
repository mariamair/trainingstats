/**
 * Stores training data.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

export class TrainingCollection {
  #trainingInstances = []

  addTrainingInstance(trainingInstance) {
    this.#trainingInstances.push(trainingInstance)
  }

  #getAllTrainingInstances() {
    return Array.from(this.#trainingInstances)
  }

  getTrainingInstancesByUser(username) {
    return this.#getAllTrainingInstances().filter((element) => element.username === username)
  }
}
