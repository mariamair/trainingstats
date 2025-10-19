/**
 * The starting point of the application.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import express from 'express'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { router } from './routes/router.js'
import { ErrorHandler } from './util/ErrorHandler.js'


const app = express()

const directoryFullName = dirname(fileURLToPath(import.meta.url))

// Parse incoming requests of content type 'application/x-www-form-urlencoded'.
app.use(express.urlencoded({ extended: false }))

// Parse incoming requests of content type 'application/json'.
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(join(directoryFullName, '..', 'index.html'))
})

app.use('/public', express.static(join(directoryFullName, '..', 'public')))

app.use('/', router)

const errorHandler = new ErrorHandler()
app.use(errorHandler.globalError)

const server = app.listen(process.env.PORT, () => {
  console.log('Server running at port: ' + server.address().port)
  console.log('Press Ctrl + C to terminate application')
})
