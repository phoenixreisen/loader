global.m = require('mithril');
const mq = require("mithril-query");
const test = require("ospec");

test.spec('SPEC', () => {
    const View = require('../test/view.js');

    test('TEST', () => {
        test(true).equals(true);
    });
});
