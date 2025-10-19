/**
 * Handles communication between the training input view and the training information models.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import http from 'node:http'
import { TrainingCollection } from '../model/TrainingCollection.js'
import { TrainingInstance } from '../model/TrainingInstance.js'

export class TrainingController {
  #trainingCollection = new TrainingCollection()

  /**
   * Create a training instance and save it to the database.
   * 
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  create(req, res, next) {
    try {
      this.#validateUserInput(req.body)
      const training = this.#createTrainingObject(req.body)
      this.#saveTrainingInformation(training)
      res.json('Saved')
    } catch (error) {
      next(error)
    }
  }

  #validateUserInput(requestObject) {
    for (const [key, value] of Object.entries(requestObject)) {
      if (this.#isMissing(key) || this.#isEmpty(value)) {
        this.#throwError()
      }
    }
  }

  #throwError() {
    const httpStatusCode = 400
    const error = new Error(http.STATUS_CODES[httpStatusCode])
    error.status = httpStatusCode
    error.statusMessage = http.STATUS_CODES[httpStatusCode]
    error.message = 'Invalid input'
    throw error
  }

  #isMissing(property) {
    return property ? false : true
  }

  #isEmpty(value) {
    if (value === '') {
      return true
    }
    return false
  }

  #createTrainingObject(requestObject) {
    return {
      username: requestObject.username,
      date: requestObject.date,
      trainingType: requestObject.trainingType,
      minutes: requestObject.minutes,
      intensity: (requestObject.intensity === undefined) ? undefined : requestObject.intensity
    }
  }

  #saveTrainingInformation(training) {
    const trainingInstance = new TrainingInstance(training)
    this.#trainingCollection.addTrainingInstance(trainingInstance.getTrainingInstance())
  }
}
