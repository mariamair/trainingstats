/** 
 * Module to display test results.
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'

const directoryFullName = dirname(fileURLToPath(import.meta.url))
const lintResultPath = join(directoryFullName, 'reports', 'lintResult.json')
const outputPathReport = join(directoryFullName, 'reports', 'report.md')

const lintResults = await readTestResults(lintResultPath)
const markdownReport = createMarkdownReport(lintResults)
saveMarkdownReport(outputPathReport, markdownReport)
console.log(markdownReport)

async function readTestResults (resultPath) {
  const result = await fs.readFile(resultPath, 'utf8')

  if (!result) {
    const error = new Error('Could not read file')
    throw error
  }

  const data = await JSON.parse(result)
  return data
}

function createMarkdownReport(lintResults) {
  const tableColumns = '| Test | Status |\n|------|--------|\n'

  let markdownReport = '# Test results\n'
  markdownReport += '**Lint results:** ' + '\n\n'
  for (const lintResult of lintResults) {
    markdownReport += 'Errors: ' + lintResult.errorCount + '\n'
    markdownReport += 'Fatal errors: ' + lintResult.fatalErrorCount + '\n'
    markdownReport += 'Fixable errors: ' + lintResult.fixableErrorCount + '\n'
  }

  return markdownReport
}

async function saveMarkdownReport (outputPath, report) {
  try {
    await fs.writeFile(outputPath, report)
  } catch (error) {
    error.text = new Error('Could not write to file')
    throw error
  }
}