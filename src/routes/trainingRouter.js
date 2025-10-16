/**
 * Defines the training router.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import express from 'express'
import { TrainingController } from '../controller/TrainingController.js'

export const router = express.Router()

const trainingController = new TrainingController()

// Map HTTP verbs and route paths to controller action methods.
router.post('/', (req, res, next) => trainingController.create(req, res, next))
