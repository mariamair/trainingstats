/**
 * The script file of the frontend start page.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import { MessageDisplay } from './MessageDisplay.js'
import { TrainingFormSetup } from './TrainingFormSetup.js'
import { UserInput } from './UserInput.js'

const messageDisplay = new MessageDisplay()
const trainingForm = document.querySelector('#trainingInformation')
const trainingFormSetup = new TrainingFormSetup(trainingForm)
trainingFormSetup.setDefaultValues()

trainingForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  try {
    const userInput = new UserInput(event.target)
    const response = await userInput.save()
    messageDisplay.displayInfoMessage(response)
    trainingForm.reset()
  } catch (error) {
    messageDisplay.displayErrorMessage(error.message)
  }
})
