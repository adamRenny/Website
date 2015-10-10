'use strict';

const DEFAULTS = {
    TITLE: {
        PREFIX: 'adamRenny',
        SEPARATOR: ' | '
    }
};

export default class Page {
    constructor({ title = '', content = '' } = {}) {
        console.log('?!@#?');
        this._title = title;

        this._content = content;
    }

    get title() {
        if (this._title.length > 0) {
            return DEFAULTS.TITLE.PREFIX + DEFAULTS.TITLE.SEPARATOR + this._title;
        }

        return DEFAULTS.TITLE.PREFIX;
    }

    get content() {
        return this._content;
    }
};