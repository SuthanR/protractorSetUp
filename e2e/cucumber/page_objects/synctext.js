'use strict';
/**
 * This file contains functionality to sequentially check a list of items that return a promise.
 *
 * Verifying this can be difficult because a regular for(....) loop will not work. This contains functionality to check all items in a list of items that are
 * promises.
 *
 * For example:
 *
 * recurseIntoElements(listOfItems, function(item){return item.getSomethingPromised()}, function(i, item){assertSomething(i. item)},0);
 */
(function () {
    const chai = require('chai');
    const chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);


    /**
     * @param listItems a list of Elements having an async getText() function
     * @param itemFunction function that returns the promise for an element
     * @param itemEachFunction function to execute for each of the elements. Must return a promise!
     * @param i recursive function, starts with 0
     * @returns {Promise}
     */
    const recurseIntoElements = function ( listItems, itemFunction, itemEachFunction,i) {

        return new Promise(function (resolve) {
            if (i >= listItems.length) {

                resolve();
            }

            itemFunction(listItems[i]).then(function (data) {
                itemEachFunction( i ,data).then(function (){
                recurseIntoElements( listItems, itemFunction, itemEachFunction,i + 1).then(function () {

                    resolve();
                });
});
            })
        });
    };

    const verifyTexts = function (data, listItems) {
        return recurseIntoElements(listItems, function (listItem) {
            return listItem.getText();
        }, function (i, text) {
            return new Promise(function (resolve) {
                chai.expect(text).to.equal(data.raw()[i][0]);
                resolve();
            });
        }, 0);
    };

    const verifyTextsToEqual = function (data, texts) {
    	for(let i = 0; i < texts.length; i++) {
			chai.expect(texts[i]).to.equal(data.raw()[i][0]);
		}
    };

    module.exports = {
        /**
         * Verifies a list of texts with a data table.
         */
        verifyTexts: verifyTexts,

        /**
         * Verifies a list of texts don't equal with a data table.
         */
        verifyTextsToEqual: verifyTextsToEqual,

        recurseIntoElements: recurseIntoElements
    };
})();
