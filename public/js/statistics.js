/* eslint-disable no-undef */
/**
 * The script file of the statistics page.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import { StatisticsDisplay } from './StatisticsDisplay.js'
import { StatisticsFetcher } from './StatisticsFetcher.js'

const statisticsDisplay = new StatisticsDisplay()
const statisticsFetcher = new StatisticsFetcher()
const form = document.querySelector('#statistics')

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const option = form.querySelector('select').value
  const result = await statisticsFetcher.getInformation(option)
  statisticsDisplay.displayStatistics(option, result)
})
