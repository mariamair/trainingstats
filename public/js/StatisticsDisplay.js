/* eslint-disable no-undef */
/**
 * Handles the display of statistics.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

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
      this.#displayHistogram(data)
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

  #displayHistogram (intervals) {
    this.#clearDisplay()
    this.#displayHeading('Minutes of training time (frequency distribution)')

    let histogramClone
    const histogramTemplate = document.querySelector('#histogram')

    for (const interval of intervals) {
      histogramClone = histogramTemplate.content.cloneNode(true)
      this.#displayBoundaries(histogramClone, interval)
      this.#displayFrequency(histogramClone, interval)
      this.#displayDataPoints(histogramClone, interval)
      this.#container.appendChild(histogramClone)
    }
  }

  #displayFrequency(clone, interval) {
    const swatch = clone.querySelector('.interval-swatch')
    swatch.style.backgroundColor = interval.color.hexValue
    swatch.style.width = 50 * this.#getNumberOfDataPoints(interval.data) + 'px'
  }

  #displayBoundaries (clone, interval) {
    const boundaries = clone.querySelector('.interval-boundaries')
    boundaries.textContent = interval.lowerBoundary + ' - ' + interval.upperBoundary
  }

  #displayDataPoints(clone, interval) {
    const dataPoints = clone.querySelector('.interval-datapoints')
    dataPoints.textContent = 'Number of instances: ' + interval.data.length
  }

  #getNumberOfDataPoints (dataPoints) {
    return dataPoints.length
  }
}
