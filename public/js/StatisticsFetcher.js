/**
 * Fetches statistics data.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

export class StatisticsFetcher {

  /**
   * Fetch training data according to user selection.
   * 
   * @param {string} option - The option that the user has selected.
   * @returns {object} - The training data for the selection.
   */
  async getStatisticsForOption (option) {
    const res = await window.fetch(`/statistics/${option}`)
    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message)
    } 
    return JSON.parse(data)
  }
}
