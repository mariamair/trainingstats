/**
 * The script file of the frontend application.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import { TrainingFormSetup } from './TrainingFormSetup.js'
import { ReadUserInput } from './ReadUserInput.js'
import { SaveUserInput } from './SaveUserInput.js'

const readUserInput = new ReadUserInput()
const saveUserInput = new SaveUserInput()
const trainingForm = document.querySelector('#trainingInformation')
const trainingFormSetup = new TrainingFormSetup(trainingForm)

trainingFormSetup.setDefaultValues()

trainingForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  const values = readUserInput.readTrainingInformation(event.target)
  const result = await saveUserInput.saveTrainingInformation(values)
  displayMessage(result)
  trainingForm.reset()
})

function displayMessage(result) {
  const p = document.createElement('p')
  p.textContent = result
  p.classList.add('result')
  document.querySelector('#messageDisplay').appendChild(p)
}

