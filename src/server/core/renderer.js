'use strict';
// Inspiration
// @see https://github.com/jedireza/hapi-react-views

import Hoek from 'hoek';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

var EXT_REGEX = new RegExp('\\.jsx$');
var DEFAULTS = {
    doctype: '<!DOCTYPE html>',
    renderMethod: 'renderToStaticMarkup',
    isCached: false
};

function compile(template, compileOptions) {
    compileOptions = Hoek.applyToDefaults(DEFAULTS, compileOptions);
    let localCache = {
        Component: null,
        Element: null
    };

    return (context, renderOptions) => engineRuntime(localCache, compileOptions, context, renderOptions);
}

function engineRuntime(localCache, compileOptions, context, renderOptions) {
    renderOptions = Hoek.applyToDefaults(compileOptions, renderOptions);
    
    var dest = renderOptions.doctype;
    localCache.Component = localCache.Component || require(compileOptions.filename);
    localCache.Element = localCache.Element || React.createFactory(localCache.Component);
    dest = dest + ReactDOMServer[renderOptions.renderMethod](localCache.Element(context));

    // Clear the cache each time if its not cached
    if (!renderOptions.isCached) {
        localCache.Component = undefined;
        localCache.Element = undefined;

        // TODO: Come back and revise the cache removal
        Object.keys(require.cache).forEach(function (module) {

            if (EXT_REGEX.test(module)) {
                delete require.cache[module];
            }
        });
    }

    return dest;
}

export default {
    compile
};