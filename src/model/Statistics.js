/**
 * Filters and compiles training data.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import { GroupIntoIntervalsWrapper } from './GroupIntoIntervalsWrapper.js'
import { TrainingCollection } from './TrainingCollection.js'
import { TrainingInstance } from './TrainingInstance.js'

export class Statistics {
  #colorSchemeId = 1
  #trainingCollection = new TrainingCollection()
  #wrapper = new GroupIntoIntervalsWrapper()

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
    const instances = this.#trainingCollection.getTrainingInstancesByUser(username)
    if (instances === undefined || instances.length === 0) {
      throw new Error('No training information available')
    }
    return instances
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
    const minutesArray = this.getMinutesPerInstance(username)
    const intervals = this.#wrapper.getAscendingIntervalsWithColors(minutesArray, this.#colorSchemeId)
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

  getNumberOfOccasions(username) {
    const instances = this.getAllInstancesForUser(username)
    return instances.length
  }

  getNumberOfDays(username) {
    const uniqueDays = this.getUniqueDays(username)
    return uniqueDays.length
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
    const uniqueTypes = this.getUniqueTrainingTypes(username)
    return uniqueTypes.length
  }

  getUniqueTrainingTypes(username) {
    const instances = this.getAllInstancesForUser(username)
    const types = new Set()
    for (const instance of instances) {
      types.add(instance.trainingType)
    }
    return Array.from(types)
  }

  getFrequencyOfTrainingTypes(username) {
    const instances = this.getAllInstancesForUser(username)
    const typeFrequency = {}
    for (const instance of instances) {
      if (!typeFrequency[instance.trainingType]) {
        typeFrequency[instance.trainingType] = 1
      } else {
        typeFrequency[instance.trainingType]++
      }
    }
    return typeFrequency
  }
}
