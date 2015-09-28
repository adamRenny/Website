'use strict';

var _ = require('lodash');
var APP_CONFIG = require('../../config/config');
var EXTERNAL_LINKS = APP_CONFIG.LINKS.EXTERNAL;

var nameList = {};

function prepareNameList() {
    var linkName;
    var namePartitions;
    var callName;
    var isFirst;

    for (linkName in EXTERNAL_LINKS) {
        namePartitions = linkName.split('_');
        callName = '';
        isFirst = true;

        _.each(namePartitions, function(partition) {
            partition = partition.toLowerCase();
            if (isFirst) {
                isFirst = false;
            } else {
                partition = partition.substr(0, 1).toUpperCase() + partition.substr(1);
            }

            callName = callName + partition;
        });

        nameList[callName] = linkName;
    }
}

function linkHelper(linkName) {
    var realLinkName = nameList[linkName];
    if (typeof realLinkName !== 'string') {
        console.log('Could not find link for external link: ' + linkName);
        return '#';
    }

    return EXTERNAL_LINKS[realLinkName];
}

prepareNameList();

module.exports = linkHelper;