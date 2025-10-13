/* eslint-disable no-undef */
/**
 * Class that handles training information
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import { Training } from '../model/Training.js'
import { TrainingInstance } from '../model/TrainingInstance.js'

export class Controller {

  // eslint-disable-next-line no-unused-vars
  saveInformation(req, res, next) {
    try {
      const trainingInstance = new TrainingInstance({
        username: req.body.username,
        date: req.body.date,
        type: req.body.type,
        minutes: req.body.minutes
      })

      const trainings = new Training()
      const training = trainingInstance.getTrainingInstance()
      trainings.addTrainingInstance(training)
    
      console.log('Training: ')
      for(const tr of trainings.getTrainingInstances()) {
        console.log(tr)
      }
      res.json('Saved')
    } catch (error) {
      // next(error)
      console.log(error)
    }
  }
}
