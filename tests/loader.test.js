global.m = require('mithril');
const mq = require("mithril-query");
const test = require("ospec");

test.spec('Static Loader', () => {
    const LoaderView = require('../test/loader.view.js');

    test('should have some default classes', () => {
        const Loader = mq(m(LoaderView));
        test(Loader.should.have('.loader')).equals(true);
        test(Loader.should.have('.loader__spinner')).equals(true);
        test(Loader.should.have('.fas.fa-spin')).equals(true);
    });

    test('should have a default text', () => {
        const Loader = mq(m(LoaderView));
        test(Loader.should.contain('Daten werden geladen...')).equals(true);
        test(Loader.should.have('.fa-spinner')).equals(true);
    });

    test('should show customized text & icon', () => {
        const Loader = mq(m(LoaderView, { text: 'WORK HARD, PLAY HARD', iconname: 'fas fa-blabla' }));
        test(Loader.should.contain('WORK HARD, PLAY HARD')).equals(true);
        test(Loader.should.have('.fas.fa-blabla')).equals(true);
    });
});

test.spec('Overlay Loader', () => {
    const LoaderView = require('../test/loader.view.js');

    test('should have some default classes', () => {
        const Loader = mq(m(LoaderView, { type: "overlay" }));
        test(Loader.should.have('.loader.loader--overlay')).equals(true);
        test(Loader.should.have('.loader__spinner')).equals(true);
        test(Loader.should.have('.fab.fa-cuttlefish.fa-spin')).equals(true);
    });

    test('should have a default text', () => {
        const Loader = mq(m(LoaderView));
        test(Loader.should.contain('Daten werden geladen...')).equals(true);
        test(Loader.should.have('.fa-spinner')).equals(true);
    });

    test('should show customized text & icon', () => {
        const Loader = mq(m(LoaderView, { type: "overlay", text: "ICH BIN EIN OVERLAY", iconname: "fa-blublu" }));
        test(Loader.should.contain('ICH BIN EIN OVERLAY')).equals(true);
        test(Loader.should.have('.fa-blublu')).equals(true);
    });
});