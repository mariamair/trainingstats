/**
 * Wraps the group-into-intervals module.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import * as GroupIntoIntervals from 'group-into-intervals'
import http from 'node:http'

export class GroupIntoIntervalsWrapper {

  getAscendingIntervalsWithColors(minutes, colorSchemeId) {
    this.validateColorScheme(colorSchemeId)
    return GroupIntoIntervals.getAscendingIntervalsWithColors(minutes, colorSchemeId)
  }

  validateColorScheme(colorSchemeId) {
    if (!this.#isValidColorScheme(colorSchemeId)) {
      const httpStatusCode = 400
      const error = new Error(http.STATUS_CODES[httpStatusCode])
      error.status = httpStatusCode
      error.statusMessage = http.STATUS_CODES[httpStatusCode]
      error.message = 'Invalid color scheme'
      throw error
    }
  }

  #isValidColorScheme(colorSchemeId) {
    const result = JSON.parse(GroupIntoIntervals.getColorScheme(colorSchemeId))
    return result.hexValues
  }
}
