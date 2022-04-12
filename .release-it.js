module.exports = {
  hooks: {
    /* 'before:init': ['npm test'], */
    // no tests yet, this command would fail
    /* 'after:bump': ['npx auto-changelog -p'], */
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
    changelog:
      "npx conventional-changelog --stdout --commit-limit false -u --template ./changelog.hbs",
  },
  github: {
    release: true,
    releaseName: "${version}",
    assets: ["dist/*.zip"],
  },
  npm: {
    publish: false,
  },
  plugins: {
    "@release-it/conventional-changelog": {
      preset: "angular",
      infile: "CHANGELOG.md",
      template: "./changelog.hbs",
    },
  },
};
