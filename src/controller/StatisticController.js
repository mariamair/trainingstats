/* eslint-disable no-undef */
/**
 * Class that handles training information
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import http from 'node:http'
import { Statistics } from '../model/Statistics.js'

export class StatisticController {
  #statistics = new Statistics()

  getAll(req, res, next) {
    try {
      this.#statistics.initializeTrainingCollection()
      const result = this.#statistics.getAllInstancesForUser()
      res.json(result)
    } catch (error) {
      // next(error)
      console.log(error)
    }
  }

  getHistogram(req, res, next) {
    try {
      this.#statistics.initializeTrainingCollection()
      const result = this.#statistics.getHistogram()
      res.json(result)
    } catch (error) {
      // next(error)
      console.log(error)
    }
  }

  getTotalTime(req, res, next) {
    try {
      this.#statistics.initializeTrainingCollection()
      const result = this.#statistics.getTotalTimeInMinutes()
      res.json(result)
    } catch (error) {
      // next(error)
      console.log(error)
    }
  }
}
