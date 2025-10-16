/**
 * Test module for testing correct output of the saved training information
 */

import { Statistics } from '../src/model/Statistics.js'

const firstUser = 'unit-test-01'
const secondUser = 'unit-test-02'
const trainingInstances = [{
    username: firstUser,
    date: '2025-10-01',
    trainingType: 'Unit-Test: Cycling',
    minutes: '60'
  }, {
    username: firstUser,
    date: '2025-10-01',
    trainingType: 'Unit-Test: Cycling',
    minutes: '120'
  }, {
    username: firstUser,
    date: '2025-10-02',
    trainingType: 'Unit-Test: Wrestling',
    minutes: '30'
  }, {
    username: secondUser,
    date: '2025-10-01',
    trainingType: 'Unit-Test: Cycling',
    minutes: '180'
  }, {
    username: secondUser,
    date: '2025-10-01',
    trainingType: 'Unit-Test: Dancing',
    minutes: '80'
  }]

const trainingInstancesFirstUser = [{
    username: firstUser,
    date: '2025-10-01',
    trainingType: 'Unit-Test: Cycling',
    minutes: 60,
    intensity: 'medium'
  }, {
    username: firstUser,
    date: '2025-10-01',
    trainingType: 'Unit-Test: Cycling',
    minutes: 120,
    intensity: 'medium'
  }, {
    username: firstUser,
    date: '2025-10-02',
    trainingType: 'Unit-Test: Wrestling',
    minutes: 30,
    intensity: 'medium'
  }]

const statistics = new Statistics(trainingInstances)

describe('UT1: Get saved information for user', () => {
  test('all training information', () => {
    expect(statistics.getAllInstancesForUser(firstUser)).toStrictEqual(trainingInstancesFirstUser)
  })

  test('total time in minutes', () => {
    expect(statistics.getTotalTimeInMinutes(firstUser)).toEqual(210)
  })

  test('number of training occassions', () => {
    expect(statistics.getNumberOfOccasions(firstUser)).toEqual(3)
  })

  test('number of days', () => {
    expect(statistics.getNumberOfDays(firstUser)).toEqual(2)
  })

  test('types of training', () => {
    expect(statistics.getUniqueTrainingTypes(firstUser)).toStrictEqual(['Unit-Test: Cycling', 'Unit-Test: Wrestling'])
  })
})