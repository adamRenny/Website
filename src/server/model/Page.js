'use strict';

const DEFAULTS = {
    TITLE: {
        PREFIX: 'adamRenny',
        SEPARATOR: ' | '
    }
};

export default class Page {
    constructor({ title = '', bodyScripts = [] } = {}) {
        this._title = title;
        this._bodyScripts = bodyScripts;
    }

    get title() {
        if (this._title.length > 0) {
            return DEFAULTS.TITLE.PREFIX + DEFAULTS.TITLE.SEPARATOR + this._title;
        }

        return DEFAULTS.TITLE.PREFIX;
    }

    get scripts() {
        return this._bodyScripts.slice(0);
    }
};