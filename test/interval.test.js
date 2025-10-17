/**
 * Test module for testing the group-into-intervals module
 */

import * as GroupIntoIntervals from 'group-into-intervals'

const colorSchemeId = 1
const minutes = [ 60, 120, 30, 180, , ,  180, 40, 80 ]
const expectedOutput =       [
        {
          lowerBoundary: 30,
          upperBoundary: 67,
          data: [ 30, 40, 60 ],
          color: { hexValue: '#be2020', rgbValue: 'rgb(190, 32, 32)' }
        },
        {
          lowerBoundary: 68,
          upperBoundary: 105,
          data: [ 80 ],
          color: { hexValue: '#9a2964', rgbValue: 'rgb(154, 41, 100)' }
        },
        {
          lowerBoundary: 106,
          upperBoundary: 143,
          data: [ 120 ],
          color: { hexValue: '#7532a8', rgbValue: 'rgb(117, 50, 168)' }
        },
        {
          lowerBoundary: 144,
          upperBoundary: 181,
          data: [ 180, 180 ],
          color: { hexValue: '#481acc', rgbValue: 'rgb(72, 26, 204)' }
        }
      ]

describe('UT2: Test group-into-intervals module', () => {
  test('get all color schemes', () => {
    const colorSchemes = JSON.parse(GroupIntoIntervals.getAllColorSchemes())
    const firstColorScheme = colorSchemes[0]
    expect(firstColorScheme).toHaveProperty('name')
    expect(firstColorScheme).toHaveProperty('hexValues')
  })

test('check that the internally used colorSchemeId is valid', () => {
  const colorScheme = JSON.parse(GroupIntoIntervals.getColorScheme(colorSchemeId))
    expect(colorScheme).toHaveProperty('name')
    expect(colorScheme).toHaveProperty('hexValues')
  })

test('check that the internally used colorSchemeId has expected colors', () => {
  const colorScheme = JSON.parse(GroupIntoIntervals.getColorScheme(colorSchemeId))
    expect(colorScheme.name).toEqual('red, violet, blue')
    expect(colorScheme.hexValues).toEqual(['#be2020', '#7532a8', '#1a02f0'])
  })

 test('incorrect input should return error message', () => {
    expect(JSON.parse(GroupIntoIntervals.getAscendingIntervalsWithColors())).toEqual('Data has to be an array.')
  })

 test('get correct intervals', () => {
    const intervals = JSON.parse(GroupIntoIntervals.getAscendingIntervalsWithColors(minutes, colorSchemeId))
    expect(intervals).toStrictEqual(expectedOutput)
  })
})