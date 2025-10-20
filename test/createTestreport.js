/**
 * Module to create unit test reports as markdown and console output.
 *
 * @author Maria Mair <mm225mz@stundent.lnu.se>
 */

import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'
import console from 'node:console'

const directoryFullName = dirname(fileURLToPath(import.meta.url))
const inputPath = join(directoryFullName, 'reports', 'report.json')
const outputPathReport = join(directoryFullName, 'reports', 'unitTestReport.md')

const report = await readTestReport()
let markdownReport = '# Unit test results\n'
createSummary(report)
createTestCaseReport(report)
writeTestReportToMarkdown(outputPathReport, markdownReport)
console.log(markdownReport)

async function readTestReport () {
  const result = await fs.readFile(inputPath, 'utf8')

  if (!result) {
    const error = new Error('Could not read file')
    throw error
  }

  const data = await JSON.parse(result)
  return data
}

function createSummary(report) {
  const time = new Date(report.startTime).toString()
  const tableColumns = '\n\n|   | Failed | Passed | Total |\n|---|--------|--------|-------|\n'

  markdownReport += '\n**Latest run (UTC):** ' + time.substring(0, 21)
  markdownReport += '\n\n## Summary of test results\n'
  markdownReport += tableColumns
  markdownReport += '| Test suites | ' +
    report.numFailedTestSuites + ' | ' + report.numPassedTestSuites + ' | ' + report.numTotalTestSuites + ' |\n'
  markdownReport += '| Tests | ' +
    report.numFailedTests + ' | ' + report.numPassedTests + ' | ' + report.numTotalTests + ' |\n'
}

function createTestCaseReport(report) {
  const tableColumns = '| Test | Status |\n|------|--------|\n'

  for (const suite of report.testResults) {
    markdownReport += '\n\n## ' + suite.assertionResults[0].ancestorTitles + '\n\n'
    markdownReport += tableColumns
    for (const test of suite.assertionResults) {
      const status = test.status === 'passed' ? '✅' : '❌'
      markdownReport += '| ' + test.title + ' | ' + status + ' |\n'
    }
  }
}

async function writeTestReportToMarkdown (outputPath, report) {
  try {
    await fs.writeFile(outputPath, report)
  } catch (error) {
    error.text = new Error('Could not write to file')
    throw error
  }
}
