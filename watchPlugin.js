class MyWatchPlugin {
  apply(jestHooks) {
    jestHooks.shouldRunTestSuite(testSuiteInfo => {
      return testSuiteInfo.testPath.includes('my-keyword');
    });

    // or a promise
    // jestHooks.shouldRunTestSuite(testSuiteInfo => {
    //   return Promise.resolve(testSuiteInfo.testPath.includes('my-keyword'));
    // });
  }
}