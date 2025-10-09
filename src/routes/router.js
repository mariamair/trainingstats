/**
 * Define the router.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import express from 'express'
import { Controller } from './Controller.js'

export const router = express.Router()

const controller = new Controller()

// Map HTTP verbs and route paths to controller action methods.
router.post('/training', controller.saveInformation)
