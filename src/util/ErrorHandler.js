/* eslint-disable no-unused-vars */
/* eslint-disable max-params */
/**
 * This module handles errors in the backend.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

export class ErrorHandler {

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
