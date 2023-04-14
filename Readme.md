## Repro steps:
1. install dependencies
2. Run the test:
```
npm run wdio
```
3. Open the generated report:
```
npx allure open
```
4. To see how the correct report should look like - comment the beforeEach hook in test/specs/example.e2e.js and check the new report
