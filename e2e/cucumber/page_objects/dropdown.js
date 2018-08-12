'use strict';
/**
 * ======================================================================================================================
 *
 * COPIED FROM THE IS PROJECT!
 *
 * ======================================================================================================================
 */
/**
 * This module interacts with dropdown elements.
 */
(function () {
    const syncTextCheck = require('./synctext');

    // If the script does not wait, the browser will not always accept the new dropdown value.
    const tinySleep = function () {
        return browser.sleep(10);
    };

    /**
     * Complicated function that selects the right option on a dropdown. Required because sendText() does not always set all select boxes.
     *
     * Using syncTextCheck, it loops over all select boxes while providing a callback function for each found select box. Then for each of the select boxes
     * it will use syncTextCheck again to loop over all the options, while providing a similar callback function for each of the options. If an option text
     * is the same as the desired value, it's selected.
     *
     * @param selector
     * @param value
     * @returns {Promise}
     */
    const selectOnAll = function (selector, value) {
        /**
         * Sets an option to the desired value
         *
         * @param dropdown The dropdown to select the option on
         * @param resolve callback function
         */
        const setOption = function (dropdown, resolve) {
            /**
             * Inspects a single option, selecting it if it matches the desired value
             * @param option
             * @returns {Promise}
             */
            const inspectOption = function (option) {
                return new Promise(function (resolveOption) {
                    option.getText().then(function (text) {
                        console.info('Comparing option ' + text + ' with expected ' + value);
                        if (text === value || text.startsWith(value)) {
                            option.click().then(resolveOption);
                        } else {
                            resolveOption();
                        }
                    });
                })
            };

            // Loop all options, selecting the one with the desired value.
            dropdown.all(by.tagName('option')).then(function (options) {
                syncTextCheck.recurseIntoElements(options, inspectOption, tinySleep, 0).then(resolve);
            });
        };

        /**
         * Sets the desired value on the given dropdown
         * @param dropdown
         * @returns {Promise}
         */
        const setTextOnDropdown = function (dropdown) {
            return new Promise(function (resolve) {
                setOption(dropdown, resolve);
            });
        };

        return new Promise(function (resolve) {
            browser.sleep(250).then(function () {
                // Loops over all dropdowns, setting the desired value on each of them.
                element.all(selector).then(function (dropdowns) {
                    syncTextCheck.recurseIntoElements(dropdowns, setTextOnDropdown, tinySleep, 0).then(resolve);
                });
            });
        });
    };

    module.exports = {
        /**
         * Selects a value on all select boxes matching the selector
         * @param selector selector that finds select boxes
         * @param value the value to set
         */
        selectOnAll: selectOnAll
    };
})();
