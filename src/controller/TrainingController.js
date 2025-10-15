/**
 * Class that handles training information
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import http from 'node:http'
import { TrainingCollection } from '../model/TrainingCollection.js'
import { TrainingInstance } from '../model/TrainingInstance.js'

export class TrainingController {
  #trainingCollection = new TrainingCollection()

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
    if (!['username', 'date', 'type', 'minutes'].every(property => property in requestObject)) {
      const httpStatusCode = 400
      const error = new Error(http.STATUS_CODES[httpStatusCode])
      error.status = httpStatusCode
      error.message = http.STATUS_CODES[httpStatusCode]
      throw error
    }
  }

  #createTrainingObject(requestObject) {
    return {
      username: requestObject.username,
      date: requestObject.date,
      type: requestObject.type,
      minutes: requestObject.minutes,
      intensity: (requestObject.intensity === undefined) ? undefined : requestObject.intensity
    }
  }

  #saveTrainingInformation(training) {
    const trainingInstance = new TrainingInstance(training)
    this.#trainingCollection.addTrainingInstance(trainingInstance.getTrainingInstance())
  }
}
