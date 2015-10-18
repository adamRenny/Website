/**
 * Page defaults
 * Used to apply to any sub objects
 *
 * @for Page
 * @property DEFAULTS
 * @type {object}
 * @static
 * @final
 */
const DEFAULTS = {
    TITLE: {
        PREFIX: 'adamRenny',
        SEPARATOR: ' | '
    }
};

/**
 * Represents a Web Page
 * Server-level model
 * Used to store any relevant referenced data for a page to render with
 *
 * @class Page
 */
export default class Page {
    /**
     * @for Page
     * @constructor
     * @param {object} [options] Page settings
     * @param {string} [options.title] Page-level title
     * @param {string[]} [options.bodyScripts] List of
     *   script URIs, relative to the web root
     */
    constructor({ title = '', bodyScripts = [] } = {}) {
        /**
         * User provided page title
         *
         * @private
         * @for Page
         * @property _title
         * @type {string}
         * @default ''
         */
        this._title = title;

        /**
         * Collection of scripts, relative to the web root
         *
         * @private
         * @for Page
         * @property _bodyScripts
         * @type {string[]}
         * @default []
         */
        this._bodyScripts = bodyScripts;

        this._prepareBodyScripts();
    }

    /**
     * Initialization support method
     * Used to validate each of the script items is prepared as a React-prepared
     * React lists must be objects that include keys
     *
     * @private
     * @for Page
     * @method _prepareBodyScripts
     */
    _prepareBodyScripts() {
        let isValid = this._bodyScripts.every(
            (scriptItem) => typeof scriptItem === 'object' && typeof scriptItem.key !== 'undefined'
        );

        if (!isValid) {
            this._bodyScripts = this._bodyScripts.map(
                (scriptItem, index) => {
                    return {
                        key: 'script-' + index,
                        source: scriptItem
                    };
                }
            );
        }
    }

    /**
     * Accessor for the page title
     * Will provide a title with any additional decoration
     * Read-only
     *
     * @for Page
     * @property title
     * @type {string}
     */
    get title() {
        if (this._title.length > 0) {
            return DEFAULTS.TITLE.PREFIX + DEFAULTS.TITLE.SEPARATOR + this._title;
        }

        return DEFAULTS.TITLE.PREFIX;
    }

    /**
     * Accessor for the scripts for the page
     * Scripts added are assumed to be placed in the body
     * Script URIs are relative to the web root
     * Read-only
     *
     * @for Page
     * @property scripts
     * @type {string[]}
     */
    get scripts() {
        return this._bodyScripts.slice(0);
    }
};