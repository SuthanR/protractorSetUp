'use strict';
(function () {
    const waitForElement = function (id) {
        return commonWaitFor(id, function (promise) {
            promise.fulfill();
        })
    };

   

    const waitForText = function (element, text) {
        return commonWaitFor(element, function (promise, pollAgain) {
            browser.driver.findElement(element).getText().then(function (value) {
                if (value === text) {
                    promise.fulfill();
                } else {
                    pollAgain();
                }
            }, function () {
                pollAgain();
            });
        })
    };

    const commonWaitFor = function (id, handler) {
        return function () {
            let pollTimeout = 120000;
            let pollInterval = 100;

            let pollCount = 0;

            let deferred;
            let promise;

            let maxPollCount = (pollTimeout / pollInterval);

            let createPollInterval = function () {
                if (maxPollCount <= pollCount) {
                    console.error('Wait timeout reached.')
                    deferred.reject();
                } else {
                    poll();
                }
            };

            const poll = function () {
                const pollLoop = function () {
                    pollCount++;

                    browser.isElementPresent(id).then(function (isPresent) {
                        // IDE complains isPresent is a promise. It is not.
                        if (true === isPresent) {
                            handler(deferred, createPollInterval);
                        } else {
                            createPollInterval();
                        }
                    });
                };

                setTimeout(pollLoop, pollInterval);
            };

            const getPromise = function () {
                return promise;
            };

            deferred = protractor.promise.defer();
            promise = deferred.promise;

            createPollInterval();

            return getPromise();
        }();
    };

    module.exports = {
        waitForElement: waitForElement,

        waitForText: waitForText
    };
})();