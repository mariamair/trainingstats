/**
 * Fetches statistics data.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

export class StatisticsFetcher {

  async getStatisticsForOption (option) {
    const res = await window.fetch(`/statistics/${option}`)
    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message)
    } 
    return JSON.parse(data)
  }
}
