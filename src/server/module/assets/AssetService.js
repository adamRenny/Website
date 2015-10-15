import path from 'path';
import assert from 'assert';
import config from '../../config';

export default class AssetService {
    buildURI(assetPath) {
        assert.equal(typeof assetPath, 'string', 'Expected path provided to be a string, but received a ' + typeof assetPath);

        return path.join(config.get('/urls/uri/assets'), assetPath);
    }
};