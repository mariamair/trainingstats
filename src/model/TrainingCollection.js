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

  getTrainingInstancesByDate(date, username) {
    const instances = this.getTrainingInstancesByUser(username)
    return instances.filter((element) => element.date === date)
  }

  getTrainingInstancesByType(type, username) {
    const instances = this.getTrainingInstancesByUser(username)
    return instances.filter((element) => element.type === type)
  }

  getTotalTimeInMinutes(username) {
    const instances = this.getTrainingInstancesByUser(username)
    let totalTime = 0
    for (const instance of instances) {
      totalTime += instance.minutes
    }
    return totalTime
  }

  getNumberOfOccasions(username) {
    const instances = this.getTrainingInstancesByUser(username)
    return instances.length
  }

  getNumberOfDays(username) {
    const days = this.getUniqueDays(username)
    return days.size
  }

  getUniqueDays(username) {
    const instances = this.getTrainingInstancesByUser(username)
    const days = new Set()
    for (const instance of instances) {
      days.add(instance.date)
    }
    return days
  }

  getNumberOfTrainingTypes(username) {
    const types = this.getUniqueTrainingTypes(username)
    return types.size
  }

  getUniqueTrainingTypes(username) {
    const instances = this.getTrainingInstancesByUser(username)
    const types = new Set()
    for (const instance of instances) {
      types.add(instance.date)
    }
    return types
  }

  getFrequencyOfTrainingTypes(username) {
    const instances = this.getTrainingInstancesByUser(username)
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
    const instances = this.getTrainingInstancesByUser(username)
    const minutesPerType = {}
    for (const instance of instances) {
      if(!minutesPerType[instance.type]) {
        instance.type = instance.minutes
      } else {
        instance.type += instance.minutes
      }
    }
  }
}
