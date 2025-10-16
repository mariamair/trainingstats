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
router.get('/occasions', (req, res, next) => statisticController.getNumberOfOccasions(req, res, next))
router.get('/numberOfDays', (req, res, next) => statisticController.getNumberOfDays(req, res, next))
router.get('/trainingTypes', (req, res, next) => statisticController.getTrainingTypes(req, res, next))
router.get('/totalTime', (req, res, next) => statisticController.getTotalTime(req, res, next))
router.get('/histogram', (req, res, next) => statisticController.getHistogram(req, res, next))
