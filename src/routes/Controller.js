/**
 * Class that handles training information
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import { Training } from '../model/Training.js'
import { TrainingInstance } from '../model/TrainingInstance.js'

export class Controller {

  saveInformation(req, res, next) {
    try {
      const trainingInstance = new TrainingInstance(
        req.body.username,
        req.body.date,
        req.body.type,
        req.body.minutes
      )

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
