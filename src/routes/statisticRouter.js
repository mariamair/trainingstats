/**
 * Defines the statistic router.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import express from 'express'
import { StatisticController } from '../controller/StatisticController.js'

export const router = express.Router()

const statisticController = new StatisticController()

// Map HTTP verbs and route paths to controller action methods.
router.get('/statistics/occasions', (req, res, next) => statisticController.getNumberOfOccasions(req, res, next))
router.get('/statistics/histogram', (req, res, next) => statisticController.getHistogram(req, res, next))
router.get('/statistics/totalTime', (req, res, next) => statisticController.getTotalTime(req, res, next))
