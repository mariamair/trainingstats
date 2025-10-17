/* eslint-disable no-undef */
/**
 * Handles the display of statistics.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import { HistogramDisplay } from './HistogramDisplay.js'

export class StatisticsDisplay {
  #container = document.querySelector('#trainingStatistics')

  displayStatistics(option, data) {
    if (option === 'occasions') {
      this.#displayNumberOfOccasions(data)
    }
    if (option === 'numberOfDays') {
      this.#displayNumberOfDays(data)
    }
    if (option === 'trainingTypes') {
      this.#displayTrainingTypes(data)
    }
    if (option === 'totalTime') {
      this.#displayTotalTime(data)
    }
    if (option === 'histogram') {
      const histogramDisplay = new HistogramDisplay()
      histogramDisplay.displayHistogram(data)
    }
  }

  #displayNumberOfOccasions(result) {
    this.#clearDisplay()
    this.#displayHeading('You have been training ' + result + ' times')
  }

  #displayNumberOfDays(result) {
    this.#clearDisplay()
    this.#displayHeading('You have been training ' + result + ' days')
  }

  #displayTrainingTypes(result) {
    this.#clearDisplay()
    this.#displayHeading('Training types')
    this.#displayList(result)
  }

  #displayTotalTime(result) {
    this.#clearDisplay()
    this.#displayHeading('Your total training time is ' + result + ' minutes')
  }

  #clearDisplay() {
    while (this.#container.firstChild) {
      this.#container.firstChild.remove()
    }
  }

  #displayHeading(text) {
    const heading = document.createElement('h3')
    heading.textContent = text
    this.#container.appendChild(heading)
  }

  #displayList(result) {
    for (const item of result) {
      const p = document.createElement('p')
      p.textContent = item
      this.#container.appendChild(p)
    }
  }
}
