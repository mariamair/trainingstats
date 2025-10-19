/**
 * Defines the main router.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import express from 'express'
import http from 'node:http'
import { router as trainingRouter } from '../routes/trainingRouter.js'
import { router as statisticRouter } from '../routes/statisticRouter.js'

export const router = express.Router()

router.use('/training', trainingRouter)
router.use('/statistics', statisticRouter)

// Catch 404 (Not found) errors
router.use('/*splat', (req, res, next) => {
  const httpStatusCode = 404
  const error = new Error(http.STATUS_CODES[httpStatusCode])
  error.status = httpStatusCode
  error.statusMessage = http.STATUS_CODES[httpStatusCode]
  error.message = 'Information not found'
  next(error)
})

