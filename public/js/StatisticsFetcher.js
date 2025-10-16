/* eslint-disable no-undef */
/**
 * The script file of the statistics page.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import { ErrorHandler } from './ErrorHandler.js'

export class StatisticsFetcher {

  async getInformation (option) {
    try {
      const res = await window.fetch(`/statistics/${option}`)
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message)
      } 

      return JSON.parse(data)
    } catch (error) {
      const errorHandler = new ErrorHandler()
      errorHandler.displayErrorMessage(error.message)
    }
  }
}
