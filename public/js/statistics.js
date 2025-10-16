/* eslint-disable no-undef */
/**
 * The script file of the statistics page.
 *
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import { ErrorHandler } from './ErrorHandler.js'

const form = document.querySelector('#statistics')
const container = document.querySelector('#trainingStatistics')

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const option = form.querySelector('select').value
  const result = await getInformation(option)
  displayStatistics(option, result)
})

async function getInformation (option) {
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

function displayStatistics(option, result) {
  if (option === 'occasions') {
    displayNumberOfOccasions(result)
  }
  if (option === 'numberOfDays') {
    displayNumberOfDays(result)
  }
  if (option === 'trainingTypes') {
    displayTrainingTypes(result)
  }
  if (option === 'totalTime') {
    displayTotalTime(result)
  }
  if (option === 'histogram') {
    createHistogram(result)
  }
}

function displayNumberOfOccasions(result) {
  clearDisplay()
  displayHeading('You have been training ' + result + ' times')
}

function displayNumberOfDays(result) {
  clearDisplay()
  displayHeading('You have been training ' + result + ' days')
}

function displayTrainingTypes(result) {
  clearDisplay()
  displayHeading('Training types')
  displayList(result)
}

function displayTotalTime(result) {
  clearDisplay()
  displayHeading('Your total training time is ' + result + ' minutes')
}

function clearDisplay() {
  while (container.firstChild) {
    container.firstChild.remove()
  }
}

function displayHeading(text) {
  const heading = document.createElement('h3')
  heading.textContent = text
  container.appendChild(heading)
}

function displayList(result) {
  for (const item of result) {
    const p = document.createElement('p')
    p.textContent = item
    container.appendChild(p)
  }
}

function createHistogram (intervals) {
  clearDisplay()
  displayHeading('Minutes per training instance')

  let histogramClone
  const histogramTemplate = document.querySelector('#histogram')

  for (const interval of intervals) {
    histogramClone = histogramTemplate.content.cloneNode(true)
    displayHistogram(histogramClone, interval)
    displayBoundaries(histogramClone, interval)
    displayDataPoints(histogramClone, interval)
    container.appendChild(histogramClone)
  }
}

function displayHistogram(clone, interval) {
  const swatch = clone.querySelector('.interval-swatch')
  swatch.style.backgroundColor = interval.color.hexValue
  swatch.style.width = 50 * getNumberOfDataPoints(interval.data) + 'px'
}

function displayBoundaries (clone, interval) {
  const boundaries = clone.querySelector('.interval-boundaries')
  boundaries.textContent = interval.lowerBoundary + ' - ' + interval.upperBoundary
}

function displayDataPoints(clone, interval) {
  const dataPoints = clone.querySelector('.interval-datapoints')
  dataPoints.textContent = 'Number of instances: ' + interval.data.length
}

function getNumberOfDataPoints (dataPoints) {
  return dataPoints.length
}
