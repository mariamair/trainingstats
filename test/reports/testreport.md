# Testreport

| Requirement | Type of test | Testcase | Status <br>2025-10-16 |
| ----------- | ------------ | ---------- | ------ |
| R1: Application runs in browser | manual | [TC1: Run application in browser](#tc1-run-application-in-browser) | ✅ |
| R2: Application is deployed with CI/CD pipeline | manual | [TC2: Check pipeline run](#tc2-check-pipeline-run) | ✅ |
| R3: User can add training information | manual | [TC3: Add training information](#tc3-add-training-information) | ✅ |
| R4: User can see statistics about training | manual | [TC4: See training statistics](#tc4-see-training-statistics) | ✅ |
| R5: User can see total training time | automatic | UT1: Get saved information for user | ✅ |
| R6: User can see number of training occasions | automatic | UT1: Get saved information for user | ✅ |
| R7: User can see the number of days | automatic | UT1: Get saved information for user | ✅ |
| R8: User can see list of training types | automatic | UT1: Get saved information for user| ✅ |
| R9: User can see a histogram about training minutes #10 | manual | [TC5: See histogram about training minutes](#tc5-see-histogram-about-training-minutes) | ✅ |


## Test cases for manual tests

### TC1: Run application in browser
- Step 1: Open [https://trainingstats.mariamair.se/](https://trainingstats.mariamair.se/) in a browser
- Step 2: Click on "Get started"

### TC2: Check pipeline run
- Step 1: Go to [https://github.com/mariamair/trainingstats/actions](https://github.com/mariamair/trainingstats/actions) 
- Step 2: Check the latest run.

### TC3: Add training information
- Step 1: Open [https://trainingstats.mariamair.se/](https://trainingstats.mariamair.se/) in a browser
- Step 2: Click on "Get started"
- Step 3: Open the browser console. 
- Step 4: Add name, date, type of training and minutes.
- Step 5: `result: Saved` is displayed in the browser console.

### TC4: See training statistics
- Step 1: Open [https://trainingstats.mariamair.se/](https://trainingstats.mariamair.se/) in a browser
- Step 2: Click on "Get started"
- Step 3: Click on "View statistics". 
- Step 4: A drop down with different options is displayed.

### TC5: See histogram about training minutes
- Step 1: Open [https://trainingstats.mariamair.se/](https://trainingstats.mariamair.se/) in a browser
- Step 2: Click on "Get started"
- Step 3: Click on "View statistics". 
- Step 4: Select "Histogram" and click on "Display".
- Step 5: A histogram about training minutes is displayed.

## Test cases for unit tests
See the [unit test report](unitTestReport.md)