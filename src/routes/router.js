/**
 * Define the router.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import express from 'express'
import { TrainingController } from '../controller/TrainingController.js'
import { StatisticController } from '../controller/StatisticController.js'

export const router = express.Router()

const trainingController = new TrainingController()
const statisticController = new StatisticController()

// Map HTTP verbs and route paths to controller action methods.
router.post('/training', (req, res, next) => trainingController.create(req, res, next))

router.get('/statistics/occasions', (req, res, next) => statisticController.getNumberOfOccasions(req, res, next))
router.get('/statistics/histogram', (req, res, next) => statisticController.getHistogram(req, res, next))
router.get('/statistics/totalTime', (req, res, next) => statisticController.getTotalTime(req, res, next))
