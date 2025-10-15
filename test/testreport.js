/**
 * Module to create unit test reports as markdown and console output.
 *
 * @author Maria Mair <mm225mz@stundent.lnu.se>
 * @version 0.0.1
 */

import { execSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'
import console from 'node:console'

// Run the tests, log the output from jest in the console and save the tests to report.json
console.log(execSync('npx --node-options=--experimental-vm-modules jest --json --outputFile=./test/reports/report.json || exit 0'))

const directoryFullName = dirname(fileURLToPath(import.meta.url))
const inputPath = join(directoryFullName, 'reports', 'report.json')
const outputPathReport = join(directoryFullName, 'reports', 'report.md')
const outputPathSummary = join(directoryFullName, 'reports', 'summary.md')

const report = await readTestReport()
const markdownReport = createMarkdownReport(report)
const summary = createSummary(report)
writeTestReportToMarkdown(outputPathReport, markdownReport)
writeTestReportToMarkdown(outputPathSummary, summary)
console.log(markdownReport)
console.log(summary)

async function readTestReport () {
  const result = await fs.readFile(inputPath, 'utf8')

  if (!result) {
    const error = new Error('Could not read file')
    throw error
  }

  const data = await JSON.parse(result)
  return data
}

function createMarkdownReport(report) {
  const time = new Date(report.startTime).toString()
  const tableColumns = '| Test | Status |\n|------|--------|\n'

  let markdownReport = '# Test results\n'
  markdownReport += '**Latest run:** ' + time.substring(0, 21)
  for (const suite of report.testResults) {
    markdownReport += '\n\n## ' + suite.assertionResults[0].ancestorTitles + '\n\n'
    markdownReport += tableColumns
    for (const test of suite.assertionResults) {
      const status = test.status === 'passed' ? '✅' : '❌'
      markdownReport += '| ' + test.title + ' | ' + status + ' |\n'
    }
  }

  return markdownReport
}

function createSummary(report) {
  const time = new Date(report.startTime).toString()
  const tableColumns = '\n\n|   | Failed | Passed | Total |\n|---|--------|--------|-------|\n'

  let summary = '# Summary of test results\n'
  summary += '**Latest run:** ' + time.substring(0, 21)
  summary += tableColumns
  summary += '| Test suites | ' +
    report.numFailedTestSuites + ' | ' + report.numPassedTestSuites + ' | ' + report.numTotalTestSuites + ' |\n'
  summary += '| Tests | ' +
    report.numFailedTests + ' | ' + report.numPassedTests + ' | ' + report.numTotalTests + ' |\n'

  return summary
}

async function writeTestReportToMarkdown (outputPath, report) {
  try {
    await fs.writeFile(outputPath, report)
  } catch (error) {
    error.text = new Error('Could not write to file')
    throw error
  }
}