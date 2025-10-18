# Contributing
Please be sure to read the contribution guidelines before making a change.

## The application setup
_Trainingstats_ is a Node.js/Express application that runs in a container.
- The backend is built with vanilla javascript.
- The frontend is built with html, css and vanilla javascript.
- An object-oriented approach is used.

## Getting started
1. Use `git clone` to clone the project.
2. Run `npm install` to install all dependencies.
3. Create a feature branch for the issue you want to solve. 
4. Start **Docker Desktop**.
5. Run `npm docker:dev` to build and start the container.
6. Run `docker logs -f app-trainingstats` to display the application log. 
7. Open localhost at the port specified in [Dockerfile.development](/Dockerfile.development).

## Working with the code
1. Create a new feature branch for every issue.
2. Add unit tests for the feature you are working on. All unit tests are placed in the `test` folder.
2. Run `git pull` regularly to be sure you are working on the latest version.
3. Use `git add` and `git commit` with clear commit messages to track your changes.
4. When you are done coding the feature, run `git pull`, before [carrying out the tests](#testing) one last time.
5. When all tests are green, run `git push`.
6. Create a pull request.

## Version control
Git with a [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) is used for version control.

## Testing 
A combination of unit tests and manual tests are used to test the application.

1. Run `npm run lint` to check the code quality.
1. Run `npm test` to run all unit tests, both the existing ones and the new ones you have added.
2. Run the manual test cases [TC3, TC4 and TC5](/test/reports/testreport.md#test-cases-for-manual-tests). 

Once you push your code, the linter and unit tests will also run in the CI/CD pipeline and update the [Unit test report](/test/reports/unitTestReport.md).

**Be sure to run the unit tests before you create a pull request!**

## Code style and linting
ESLint with recommended and stylistic settings is used to improve code quality and consistency.

## Requesting a change (Adding an issue)
When you add an issue, please include the following information:
- The number of the version you are using.
- A description of:
  - what you were trying to do
  - what happened
  - what you think should happen 
  

If possible, please add screenshots.


