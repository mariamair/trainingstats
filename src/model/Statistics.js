/**
 * Create statistic form training data.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import * as GroupIntoIntervals from 'group-into-intervals'
import { Training } from './TrainingCollection.js'

export class Statistics {
  #colorScheme

  constructor (colorSchemeId) {
    this.#colorScheme = colorSchemeId
  }

  getIntervalsByDate(date) {
    const training = new Training()
    const trainingInstances = training.getTrainingInstanceByDate(date)
    const intervals = GroupIntoIntervals.getAscendingIntervalsWithColors(trainingInstances, this.#colorScheme)
    return intervals
  }

  getIntervalsByType(type) {
    const training = new Training()
    const trainingInstances = training.getTrainingInstanceByType(type)
    const intervals = GroupIntoIntervals.getAscendingIntervalsWithColors(trainingInstances, this.#colorScheme)
    return intervals
  }
}
