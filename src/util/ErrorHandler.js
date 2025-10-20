/* eslint-disable no-unused-vars */
/**
 * This module handles errors in the backend.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import http from 'node:http'

export class ErrorHandler {

  /**
   * Handle 'Not found' errors and pass them on to the global error handler.
   * 
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function. 
   */
  notFoundError(req, res, next) {
    const httpStatusCode = 404
    const error = new Error(http.STATUS_CODES[httpStatusCode])
    error.status = httpStatusCode
    error.statusMessage = http.STATUS_CODES[httpStatusCode]
    error.message = 'Information not found'
    next(error)
  }

  /**
   * Handle global errors.
   * 
   * @param {object} error - Express error object.
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function. 
   * 
   */
  globalError(error, req, res, next) {
    const statusCode = error.status || 500
    const statusMessage = error.statusMessage || 'Unknown error'
    const message = error.message || 'Unknown error'

    if (process.env.NODE_ENV === 'development') {
      console.log(error)
    }

    res
      .status(statusCode)
      .json({
        statusCode,
        statusMessage,
        message
      })
  }
}
