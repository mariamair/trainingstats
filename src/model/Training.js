/**
 * Business rules for training data.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

export class Training {
  #trainingInstances = []

  addTrainingInstance(trainingInstance) {
    this.#trainingInstances.push(trainingInstance)
  }

  getTrainingInstances() {
    return Array.from(this.#trainingInstances)
  }

  getTrainingInstanceByDate(date) {
    return this.getTrainingInstances().filter((element) => element.date === date)
  }

  getTrainingInstanceByType(type) {
    return this.getTrainingInstances().filter((element) => element.type === type)
  }
}
