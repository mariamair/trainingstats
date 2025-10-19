/**
 * The script file of the frontend start page.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import { TrainingFormSetup } from './TrainingFormSetup.js'
import { UserInputReader } from './UserInputReader.js'
import { UserInputSaver } from './UserInputSaver.js'

const userInputReader = new UserInputReader()
const userInputSaver = new UserInputSaver()
const trainingForm = document.querySelector('#trainingInformation')
const trainingFormSetup = new TrainingFormSetup(trainingForm)

trainingFormSetup.setDefaultValues()

trainingForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  const values = userInputReader.readTrainingInformation(event.target)
  const result = await userInputSaver.saveTrainingInformation(values)
  trainingForm.reset()
})
