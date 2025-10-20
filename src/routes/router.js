/**
 * Defines the main router.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import express from 'express'
import { router as trainingRouter } from '../routes/trainingRouter.js'
import { router as statisticRouter } from '../routes/statisticRouter.js'

export const router = express.Router()

// Serve training and statistic routes
router.use('/training', trainingRouter)
router.use('/statistics', statisticRouter)
