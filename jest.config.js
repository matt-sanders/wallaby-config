function genConfig(localModule){
  return {
    testURL: "http://localhost/",
    moduleFileExtensions: [
      "js",
      "json",
      "vue"
    ],
    transform: {
      "^.+\\.vue$": "<rootDir>/node_modules/vue-jest",
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    },
    verbose: true
  }
}

// This setup works
// module.exports = {
//   testMatch: ["<rootDir>/proj1/**/*.spec.js"],
//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/proj1/$1"
//   },
//   ...genConfig()
// }
// This setup does not
module.exports = {
  projects: [
    {
      displayName: "Project 1",
      testMatch: ["<rootDir>/proj1/**/*.spec.js"],
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/proj1/$1"
      },
      ...genConfig()
    },
    {
      displayName: "Project 2",
      testMatch: ["<rootDir>/proj2/**/*.spec.js"],
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/proj2/$1"
      },
      ...genConfig()
    }
  ]
}