/* eslint-disable no-undef */
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
      this.#valdidateUserInput(req.body)

      const training= {
        username: req.body.username,
        date: req.body.date,
        type: req.body.type,
        minutes: req.body.minutes,
        intensity: (req.body.intensity === undefined) ? undefined : req.body.intensity
      }

      this.saveTrainingInformation(training)
      res.json({ result: 'Saved' })
    } catch (error) {
      // next(error)
      console.log(error)
    }
  }

  #valdidateUserInput(requestObject) {
    if (!['username', 'date', 'type', 'minutes'].every(property => property in requestObject)) {
      const httpStatusCode = 400
      const error = new Error(http.STATUS_CODES[httpStatusCode])
      error.status = httpStatusCode
      error.message = http.STATUS_CODES[httpStatusCode]
      throw error
    }
  }

  saveTrainingInformation(training) {
    const trainingInstance = new TrainingInstance(training)
    this.#trainingCollection.addTrainingInstance(trainingInstance.getTrainingInstance())
    
    console.log('Training: ')
    for(const tr of trainings.getTrainingInstances()) {
      console.log(tr)
    }
  }

  findAll(req, res, next) {
    try {
      const url = new URL(req.url)
      let result

      if (url.searchParams.has('all')) {
        result = this.#trainingCollection.getTrainingInstancesByUser(req.body.username)
      }

      if (url.searchParams.has('totalTime')) {
        result = this.#trainingCollection.getTotalTimeInMinutes(req.body.username)
      }

      if (url.searchParams.has('numberOfOccasions')) {
        result = this.#trainingCollection.getNumberOfOccasions(req.body.username)
      }

      if (url.searchParams.has('numberOfDays')) {
        result = this.#trainingCollection.getNumberOfDays(req.body.username)
      }

      if (url.searchParams.has('days')) {
        result = this.#trainingCollection.getUniqueDays(req.body.username)
      }

      if (url.searchParams.has('numberOfTrainingTypes')) {
        result = this.#trainingCollection.getNumberOfTrainingTypes(req.body.username)
      }

      if (url.searchParams.has('trainingTypes')) {
        result = this.#trainingCollection.getUniqueTrainingTypes(req.body.username)
      }

      if (url.searchParams.has('trainingTypes')) {
        result = this.#trainingCollection.getFrequencyOfTrainingTypes(req.body.username)
      }

      if (url.searchParams.has('trainingTypes')) {
        result = this.#trainingCollection.getMinutesPerTrainingType(req.body.username)
      }
      res.json(result)
    } catch (error) {
      // next(error)
      console.log(error)
    }
  }
}
