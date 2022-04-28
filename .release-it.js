const fs = require("fs");

const commitTemplate = fs.readFileSync("changelog.hbs").toString();

module.exports = {
  hooks: {
    /* 'before:init': ['npm test'], */
    // no tests yet, this command would fail
    /* "after:bump": ["npx conventional-changelog -p"], */
  },
  git: {
    /* requireBranch: 'main', */
    commit: true,
    commitMessage: "chore(release): ${version}",
    commitArgs: "",
    tag: true,
    tagName: "${version}",
    tagAnnotation: "${version}",
    push: true,
    requireCommits: true,
    /* changelog:
      "npx conventional-changelog --stdout --commit-limit false -u --template ./changelog.hbs", */
  },
  github: {
    release: true,
    releaseName: "${version}",
    assets: ["dist/*.zip"],
  },
  npm: {
    publish: true,
  },
  plugins: {
    "@release-it/conventional-changelog": {
      preset: "angular",
      infile: "CHANGELOG.md",
      /* writerOpts: {
        commitPartial: commitTemplate,
      }, */
      types: [
        { type: "feat", name: "Features" },
        { type: "fix", name: "Bug Fixes" },
        { type: "perf", name: "Performance Improvements" },
        { type: "revert", name: "Reverts" },
        { type: "docs", name: "Documentation", hidden: true },
        { type: "style", name: "Styles", hidden: true },
        { type: "chore", name: "Miscellaneous Chores", hidden: true },
        { type: "refactor", name: "Code Refactoring", hidden: true },
        { type: "test", name: "Tests", hidden: true },
        { type: "build", name: "Build System", hidden: true },
        { type: "ci", name: "Continuous Integration", hidden: true },
      ],
    },
  },
};
