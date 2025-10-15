/* eslint-disable no-undef */
/**
 * Class that handles training information
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import http from 'node:http'
import { Statistics } from '../model/Statistics.js'

export class StatisticController {
  #userName = 'testUser'
  #initialCollection = [{
    username: this.#userName,
    date: '2025-10-01',
    trainingType: 'Unit-Test: Cycling',
    minutes: '60'
  }, {
    username: this.#userName,
    date: '2025-10-01',
    trainingType: 'Unit-Test: Cycling',
    minutes: '120'
  }, {
    username: this.#userName,
    date: '2025-10-03',
    trainingType: 'Unit-Test: Riding',
    minutes: '60'
  }, {
    username: this.#userName,
    date: '2025-10-02',
    trainingType: 'Unit-Test: Wrestling',
    minutes: '70'
  }, {
    username: this.#userName,
    date: '2025-10-02',
    trainingType: 'Unit-Test: Cycling',
    minutes: '30'
  }, {
    username: this.#userName,
    date: '2025-10-02',
    trainingType: 'Unit-Test: Wrestling',
    minutes: '30'
  }, {
    username: this.#userName,
    date: '2025-10-03',
    trainingType: 'Unit-Test: Wrestling',
    minutes: '70'
  }]
  #statistics = new Statistics(this.#initialCollection)

  getAll(req, res, next) {
    try {
      const result = this.#statistics.getNumberOfOccasions(this.#userName)
      res.json(result)
    } catch (error) {
      // next(error)
      console.log(error)
    }
  }

  getHistogram(req, res, next) {
    try {
      const result = this.#statistics.getHistogram(this.#userName)
      res.json(result)
    } catch (error) {
      // next(error)
      console.log(error)
    }
  }

  getTotalTime(req, res, next) {
    try {
      const result = this.#statistics.getTotalTimeInMinutes(this.#userName)
      res.json(result)
    } catch (error) {
      // next(error)
      console.log(error)
    }
  }
}
