// scripts/jest-to-md.js
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("jest-results.json", "utf-8"));

const result = `
### ✅ Jest Test Results

- **Suites**: ${data.numPassedTestSuites}/${data.numTotalTestSuites} passed
- **Tests**: ${data.numPassedTests}/${data.numTotalTests} passed
- **Time**: ${data.testResults[0].perfStats.runtime}ms

<details><summary>Show files</summary>

\`\`\`
${data.testResults.map((t) => t.name + "\n" + t.message).join("\n")}
\`\`\`

</details>
`;

fs.writeFileSync("jest-comment.md", result);
