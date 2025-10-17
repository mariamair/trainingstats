/* eslint-disable no-undef */
/**
 * Handles the display of the histogram.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

export class HistogramDisplay {
  #container = document.querySelector('#trainingStatistics')

  displayHistogram (intervals) {
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
