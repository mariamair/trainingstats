/* eslint-disable no-unused-vars */
/**
 * This module handles errors in the backend.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

export class ErrorHandler {

  /**
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
