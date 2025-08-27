const fs = require("fs");
const path = require("path");

function listMarkdownFiles(dir, fileList = [], baseDir = dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      listMarkdownFiles(filePath, fileList, baseDir);
    } else if (file.endsWith(".md") && file !== "README.md") {
      fileList.push(path.relative(baseDir, filePath));
    }
  });
  return fileList;
}

const repoRoot = process.cwd();
const readmePath = path.join(repoRoot, "README.md");

const files = listMarkdownFiles(repoRoot);

let newContent = `# QA Portfolio 🚀

This repository contains my QA practice projects and examples.

## Index of Exercises
`;

files.forEach((file) => {
  newContent += `- [${file}](${file})\n`;
});

fs.writeFileSync(readmePath, newContent);

console.log("✅ README.md updated successfully!");
