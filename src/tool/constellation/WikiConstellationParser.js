import program from 'commander';
import csv from 'csv';

import fs from 'fs';
import path from 'path';

const CONSTELLATION = {
    PROPER_NAME: 0,
    BAYER_DESIGNATION: 1,
    FLAMSTEED_DESIGNATION: 2,
    VARIABLE_STAR_DESIGNATION: 3,
    HENRY_DRAPER_CATALOGUE: 4,
    HIPPARCOS_CATALOGUE: 5,
    RIGHT_ASCENSION: 6,
    DECLINATION: 7,
    VISUAL_MAGNITUDE: 8,
    ABSOLUTE_MAGNITUDE: 9,
    DISTANCE: 10,
    SPECTRAL_CLASSIFICATION: 11,
    NOTES: 12
};

const WHITESPACE = /\s+/;

const RIGHT_ASCENSION = {
    HOURS: 0,
    MINUTES: 1,
    SECONDS: 2
};

const DECLINATION = {
    DEGREES: 0,
    MINUTES: 1,
    SECONDS: 2
};
const REPLACEMENT_HYPHEN = {
    INCORRECT: '−',
    CORRECT: '-'
};

let basePath = '';
let constellation = '';

program
    .version('1.0.0')
    .arguments('[csvFilepath] [constellationName]', 'CSV Filepath to process')
    .action(onFilepathReceived)
    .parse(process.argv);

function onFilepathReceived(csvFilepath, constellationName) {
    if (!fs.existsSync(csvFilepath)) {
        process.stdout.write('File provided (' + csvFilepath + ') doesn\'t exist\n');
        process.exit();
    }

    if (typeof constellationName !== 'string' || constellationName.length === 0) {
        throw new TypeError('Expected a constellation name as a second parameter');
    }

    basePath = path.dirname(csvFilepath);

    let csvData = fs.readFileSync(csvFilepath, {
        encoding: 'utf8'
    });

    constellation = constellationName;
    
    csv.parse(csvData, onCSVParsed);
}

function onCSVParsed(error, csvData) {
    csv.transform(csvData, onTransformData, onCSVTransformed);
}

function onCSVTransformed(error, csvJSON) {
    var csvStr = JSON.stringify({
        name: constellation,
        stars: csvJSON
    });

    fs.writeFileSync(
        path.join(
            basePath,
            constellation + '.json'
        ),
        csvStr
    );
}

function transformRightAscension(rightAscension) {
    var preparedRightAscension = rightAscension.split(WHITESPACE)
                                               .map(parseFloat);
    return {
        hours: preparedRightAscension[RIGHT_ASCENSION.HOURS],
        minutes: preparedRightAscension[RIGHT_ASCENSION.MINUTES],
        seconds: preparedRightAscension[RIGHT_ASCENSION.SECONDS]
    };
}

function transformDeclination(declination) {
    var preparedDeclination = declination.split(WHITESPACE)
                                         .map(parseFloat);
    return {
        degrees: preparedDeclination[DECLINATION.DEGREES],
        minutes: preparedDeclination[DECLINATION.MINUTES],
        seconds: preparedDeclination[DECLINATION.SECONDS]
    };
}

function transformMagnitude(magnitude) {
    let transformedMagnitude = parseFloat(
        magnitude.replace(
            REPLACEMENT_HYPHEN.INCORRECT,
            REPLACEMENT_HYPHEN.CORRECT
        )
    );

    return transformedMagnitude;
}

function onTransformData(data) {
    if (data[CONSTELLATION.PROPER_NAME] === 'Name' && data[CONSTELLATION.VARIABLE_STAR_DESIGNATION] === 'Var') {
        return null;
    }
    
    let transformed = {
        name: data[CONSTELLATION.PROPER_NAME],
        designations: {
            bayer: data[CONSTELLATION.BAYER_DESIGNATION],
            flamsteed: data[CONSTELLATION.FLAMSTEED_DESIGNATION],
            variable: data[CONSTELLATION.VARIABLE_STAR_DESIGNATION],
            henryDraper: data[CONSTELLATION.HENRY_DRAPER_CATALOGUE],
            hipparcos: data[CONSTELLATION.HIPPARCOS_CATALOGUE]
        },
        coordinates: {
            rightAscension: transformRightAscension(data[CONSTELLATION.RIGHT_ASCENSION]),
            declination: transformDeclination(data[CONSTELLATION.DECLINATION]),
            distance: parseFloat(data[CONSTELLATION.DISTANCE])
        },
        magnitude: {
            visual: transformMagnitude(data[CONSTELLATION.VISUAL_MAGNITUDE]),
            absolute: transformMagnitude(data[CONSTELLATION.ABSOLUTE_MAGNITUDE])
        },
        spectralClassification: data[CONSTELLATION.SPECTRAL_CLASSIFICATION]
    };
    
    return transformed;
}