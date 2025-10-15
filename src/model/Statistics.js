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
  #initialCollection = [{
    username: this.#userName,
    date: '2025-10-01',
    type: 'Unit-Test: Cycling',
    minutes: '60'
  }, {
    username: this.#userName,
    date: '2025-10-01',
    type: 'Unit-Test: Cycling',
    minutes: '120'
  }, {
    username: this.#userName,
    date: '2025-10-03',
    type: 'Unit-Test: Riding',
    minutes: '60'
  }, {
    username: this.#userName,
    date: '2025-10-02',
    type: 'Unit-Test: Wrestling',
    minutes: '70'
  }, {
    username: this.#userName,
    date: '2025-10-02',
    type: 'Unit-Test: Cycling',
    minutes: '30'
  }, {
    username: this.#userName,
    date: '2025-10-02',
    type: 'Unit-Test: Wrestling',
    minutes: '30'
  }, {
    username: this.#userName,
    date: '2025-10-03',
    type: 'Unit-Test: Wrestling',
    minutes: '70'
  }]

  initializeTrainingCollection() {
    for (const training of this.#initialCollection) {
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
