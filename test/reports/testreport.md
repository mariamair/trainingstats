# Testreport

| Requirement | Type of test | Testcase | Status |
| ----------- | ------------ | -------- | ------ |
| R1: Application runs in browser | manual | [TC1: Run application in browser](#test-cases-for-manual-tests) | ✅ |
| R2: Application is deployed with CI/CD pipeline | manual | [TC2: Check pipeline run](#test-cases-for-manual-tests)  | ✅ |
| R3: User can add training information | manual | [TC3: Add training information](#test-cases-for-manual-tests)  | ✅ |
| R4: User can see statistics about training | manual | [TC4: See training statistics](#test-cases-for-manual-tests)  | ✅ |
| R5: User can see total training time | automatic | [UT1: Get saved information for user](unitTestReport.md#ut1-get-saved-information-for-user) | ✅ |
| R6: User can see number of training occasions | automatic | [UT1: Get saved information for user](unitTestReport.md#ut1-get-saved-information-for-user) | ✅ |
| R7: User can see the number of days | automatic | [UT1: Get saved information for user](unitTestReport.md#ut1-get-saved-information-for-user) | ✅ |
| R8: User can see list of training types | automatic | [UT1: Get saved information for user](unitTestReport.md#ut1-get-saved-information-for-user)| ✅ |
| R9: User can see a histogram about training minutes | manual, automatic | [TC5: See histogram about training minutes](#test-cases-for-manual-tests)  <br> [UT2: Test group-into-intervals module](unitTestReport.md#ut2-test-group-into-intervals-module) | ✅ |


## Test cases for manual tests

| Test case | Steps | Input | Expected output |
| --------- | ------| ----- | --------------- |
| TC1: Run application in browser | Step 1: Open [http://trainingstats.mariamair.se/](http://trainingstats.mariamair.se/) in a browser <br> Step 2: Click on "Get started" | none | The page opens with https and the "Get started" screen is displayed. |
| TC2: Check pipeline run | Step 1: Go to [https://github.com/mariamair/trainingstats/actions](https://github.com/mariamair/trainingstats/actions) <br> Step 2: Check the latest run. | none | The latest run has passed. |
| TC3: Add training information | Step 1: Open [https://trainingstats.mariamair.se/](https://trainingstats.mariamair.se/) in a browser <br> Step 2: Click on "Get started" <br> Step 3: Add the input and click on "Submit". | Name: **testuser** <br> Date: _use preselected value_ <br> Type of training: **Running** <br> Time (in minutes): _use preselected value_ | "Saved" is displayed beneath the form |
| TC4: See training statistics | Step 1: Open [https://trainingstats.mariamair.se/](https://trainingstats.mariamair.se/) in a browser <br> Step 2: Click on "Get started" <br> Step 3: Click on "View statistics". | none | A drop down with different options is displayed. |
| TC5: See histogram about training minutes | Step 1: Open [https://trainingstats.mariamair.se/](https://trainingstats.mariamair.se/) in a browser <br> Step 2: Click on "Get started" <br> Step 3: Click on "View statistics". <br> Step 4: Select "Time as histogram" and click on "Display". | none | A histogram showing the frequency distribution of training time is displayed. |


## Test cases for unit tests
See the [unit test report](unitTestReport.md)