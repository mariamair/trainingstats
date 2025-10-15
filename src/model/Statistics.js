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

  getAllInstancesForUser(username) {
    return this.#trainingCollection.getTrainingInstancesByUser(username)
  }

  getTotalTimeInMinutes(username) {
    const instances = this.getAllInstancesForUser(username)
    let totalTime = 0
    for (const instance of instances) {
      totalTime += instance.minutes
    }
    return totalTime
  }

  getHistogram(username) {
    const minutes = this.getMinutesPerInstance(username)
    const intervals = GroupIntoIntervals.getAscendingIntervalsWithColors(minutes, this.#colorSchemeId)
    return intervals
  }

  getMinutesPerInstance(username) {
    const minutes = []
    const instances = this.getAllInstancesForUser(username)
    for (const instance of instances) {
      minutes.push(instance.minutes)
    }
    return minutes
  }

  getNumberOfOccasions(username) {
    const instances = this.getAllInstancesForUser(username)
    return instances.length
  }

  getNumberOfDays(username) {
    const days = this.getUniqueDays(username)
    return days.length
  }

  getUniqueDays(username) {
    const instances = this.getAllInstancesForUser(username)
    const days = new Set()
    for (const instance of instances) {
      days.add(instance.date)
    }
    return Array.from(days)
  }

  getNumberOfTrainingTypes(username) {
    const types = this.getUniqueTrainingTypes(username)
    return types.length
  }

  getUniqueTrainingTypes(username) {
    const instances = this.getAllInstancesForUser(username)
    const types = new Set()
    for (const instance of instances) {
      types.add(instance.type)
    }
    return Array.from(types)
  }

  getFrequencyOfTrainingTypes(username) {
    const instances = this.getAllInstancesForUser(username)
    const typeFrequency = {}
    for (const instance of instances) {
      if (!typeFrequency[instance.type]) {
        typeFrequency[instance.type] = 1
      } else {
        typeFrequency[instance.type]++
      }
    }
    return typeFrequency
  }

  getMinutesPerTrainingType(username) {
    const instances = this.getAllInstancesForUser(username)
    const minutesPerType = {}
    for (const instance of instances) {
      if(!minutesPerType[instance.type]) {
        instance.type = instance.minutes
      } else {
        instance.type += instance.minutes
      }
    }
    return minutesPerType
  }
}
