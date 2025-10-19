/**
 * The script file of the statistics page.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import { MessageDisplay } from './MessageDisplay.js'
import { StatisticsDisplay } from './StatisticsDisplay.js'
import { StatisticsFetcher } from './StatisticsFetcher.js'

const messageDisplay = new MessageDisplay()
const statisticsDisplay = new StatisticsDisplay()
const statisticsFetcher = new StatisticsFetcher()
const statisticsSelectionForm = document.querySelector('#statistics')

statisticsSelectionForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  try {
    const option = statisticsSelectionForm.querySelector('select').value
    const result = await statisticsFetcher.getStatisticsForOption(option)
    statisticsDisplay.displayStatistics(option, result)
  } catch (error) {
    messageDisplay.displayErrorMessage(error.message)
  }
})
