/**
 * Handles the display of the histogram.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

export class HistogramDisplay {
  #container = document.querySelector('#trainingStatistics')
  #histogramTableTemplate = document.querySelector('#histogram-table')
  #tableRowTemplate = document.querySelector('#interval-row')

  /**
   * Create and display a histogram.
   * 
   * @param {object} intervalData - Training data as intervals.
   */
  displayHistogram (intervalData) {
    this.#clearDisplay()
    this.#displayHeading('Frequency distribution of training time')

    this.#displayTableHeader()
    this.#displayTableRows(intervalData)
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

  #displayTableHeader() {
    const histogramTable = this.#histogramTableTemplate.content.cloneNode(true)
    const unit = histogramTable.querySelector('#interval-unit')
    unit.textContent = 'minutes'
    this.#container.appendChild(unit)

    const label = histogramTable.querySelector('#interval-label')
    label.textContent = 'training occasions'
    this.#container.appendChild(label)
  }

  #displayTableRows(intervals) {
    for (const interval of intervals) {
      const intervalRow = this.#tableRowTemplate.content.cloneNode(true)
      this.#displayBoundaries(intervalRow, interval)
      this.#displayFrequency(intervalRow, interval)
      this.#container.appendChild(intervalRow)
    }
  }

  #displayBoundaries (clone, interval) {
    const boundaries = clone.querySelector('.interval-boundaries')
    boundaries.textContent = interval.lowerBoundary + ' - ' + interval.upperBoundary
  }

  #displayFrequency(clone, interval) {
    const numberOfDataPoints = interval.data.length
    const swatch = clone.querySelector('.interval-swatch')
    swatch.style.backgroundColor = interval.color.hexValue
    swatch.style.width = 50 * numberOfDataPoints + 'px'

    const dataPoints = clone.querySelector('.interval-datapoints')
    dataPoints.textContent = '(' + numberOfDataPoints + ')'
  }
}
