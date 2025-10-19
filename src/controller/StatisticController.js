/**
 * Handles communication between the statistics view and model.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import { Statistics } from '../model/Statistics.js'

export class StatisticController {
  #userName = 'testUser'
  #initialCollection = [{
    username: this.#userName,
    date: '2025-10-01',
    trainingType: 'Cycling',
    minutes: '60'
  }, {
    username: this.#userName,
    date: '2025-10-01',
    trainingType: 'Cycling',
    minutes: '120'
  }, {
    username: this.#userName,
    date: '2025-10-03',
    trainingType: 'Riding',
    minutes: '60'
  }, {
    username: this.#userName,
    date: '2025-10-02',
    trainingType: 'Wrestling',
    minutes: '70'
  }, {
    username: this.#userName,
    date: '2025-10-02',
    trainingType: 'Cycling',
    minutes: '30'
  }, {
    username: this.#userName,
    date: '2025-10-02',
    trainingType: 'Wrestling',
    minutes: '30'
  }, {
    username: this.#userName,
    date: '2025-10-03',
    trainingType: 'Wrestling',
    minutes: '70'
  }]
  #statistics = new Statistics(this.#initialCollection)

  getNumberOfOccasions(req, res, next) {
    try {
      const result = this.#statistics.getNumberOfOccasions(this.#userName)
      res.json(result)
    } catch (error) {
      next(error)
    }
  }

  getNumberOfDays(req, res, next) {
    try {
      const result = this.#statistics.getNumberOfDays(this.#userName)
      res.json(result)
    } catch (error) {
      next(error)
    }
  }

  getTrainingTypes(req, res, next) {
    try {
      const result = this.#statistics.getUniqueTrainingTypes(this.#userName)
      res.json(JSON.stringify(result))
    } catch (error) {
      next(error)
    }
  }

  getTotalTime(req, res, next) {
    try {
      const result = this.#statistics.getTotalTimeInMinutes(this.#userName)
      res.json(result)
    } catch (error) {
      next(error)
    }
  }

  getHistogram(req, res, next) {
    try {
      const result = this.#statistics.getHistogram(this.#userName)
      res.json(result)
    } catch (error) {
      next(error)
    }
  }
}
