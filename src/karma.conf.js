// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
      // require('karma-sonarqube-unit-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcov', 'text','clover'],
      fixWebpackSourcePaths: true,
    },
    // sonarQubeUnitReporter:{
    //   sonarQubeVersion:'LATEST',
    //   outputFile: 'reports/ut_report.xml',
    //   useBrowserName: false
    // },
    reporters: ['progress', 'kjhtml','coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};

// karma.conf.js
// module.exports = function(config) {
//   config.set({
//     files: [
//       'src/**/*.js',
//       'test/**/*.js'
//     ],
//     reporters: ['progress', 'coverage'],
//     preprocessors: {
//       'src/**/*.js': ['coverage']
//     },
//     coverageReporter: {
//       // specify a common output directory
//       dir: 'build/reports/coverage',
//       reporters: [
//         // reporters not supporting the `file` property
//         { type: 'html', subdir: 'report-html' },
//         { type: 'lcov', subdir: 'report-lcov' },
//         // reporters supporting the `file` property, use `subdir` to directly
//         // output them in the `dir` directory
//         { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
//       ]
//     }
//   });
// };