'use strict';
// Inspiration
// @see https://github.com/jedireza/hapi-react-views

import Hoek from 'hoek';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const DEFAULTS = {
    doctype: '<!DOCTYPE html>',
    renderMethod: 'renderToStaticMarkup',
    isCached: false
};

function compile(baseViewPath, template, compileOptions) {
    compileOptions = Hoek.applyToDefaults(DEFAULTS, compileOptions);
    let localCache = {
        Component: null,
        Element: null,
        baseViewPath
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

        Object.keys(require.cache)
            .filter((module) => module.indexOf(localCache.baseViewPath) === 0)
            .forEach((module) => delete require.cache[module]);
    }

    return dest;
}

function factory(viewPath) {
    if (typeof viewPath !== 'string') {
        viewPath = '.';
    }

    return {
        compile: (template, compileOptions) => compile(viewPath, template, compileOptions)
    };
}

export default factory;