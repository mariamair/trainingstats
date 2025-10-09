/**
 * The starting point of the application.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import express from 'express'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()

const directoryFullName = dirname(fileURLToPath(import.meta.url))
console.log(directoryFullName)

app.get('/', (req, res) => {
  res.sendFile(join(directoryFullName, '..', 'index.html'))
})

app.use('/public', (req, res) => {
  res.sendFile(join(directoryFullName, '..', 'public', 'index.html'))
})

const port = 3000

const server = app.listen(port, () => {
  console.log('Server running at port: ' + port)
  console.log('Press Ctrl + C to terminate application')
})
