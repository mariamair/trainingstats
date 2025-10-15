/**
 * Create statistic form training data.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import * as GroupIntoIntervals from 'group-into-intervals'
import { TrainingCollection } from './TrainingCollection.js'
import { TrainingInstance } from './TrainingInstance.js'

export class Statistics {
  #colorSchemeId = 1
  #userName = 'testUser'
  #trainingCollection = new TrainingCollection()

  constructor(initialCollection) {
    this.initializeTrainingCollection(initialCollection)
  }

  initializeTrainingCollection(initialCollection) {
    for (const training of initialCollection) {
      const trainingInstance = new TrainingInstance(training)
      this.#trainingCollection.addTrainingInstance(trainingInstance.getTrainingInstance())
    }
  }

  getAllInstancesForUser() {
    return this.#trainingCollection.getTrainingInstancesByUser(this.#userName)
  }

  getHistogram() {
    const minutes = this.#trainingCollection.getMinutesPerInstance(this.#userName)
    const intervals = GroupIntoIntervals.getAscendingIntervalsWithColors(minutes, this.#colorSchemeId)
    return intervals
  }

  getTotalTimeInMinutes() {
    return this.#trainingCollection.getTotalTimeInMinutes(this.#userName)
  }
}
