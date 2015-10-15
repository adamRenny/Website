const CODE_GROUPS = {
    NOT_FOUND: 400,
    INTERNAL_ERROR: 500
};

export default class ResponseStatusCodeService {
    extractStatusCode(response) {
        if (response instanceof Error) {
            return response.output.statusCode;
        }

        return response.statusCode;
    }

    isErroneous(statusCode) {
        return this.isNotFound(statusCode) || this.isInternalError(statusCode);
    }

    isNotFound(statusCode) {
        return Math.floor(statusCode / CODE_GROUPS.NOT_FOUND) >= 1;
    }

    isInternalError(statusCode) {
        return Math.floor(statusCode / CODE_GROUPS.INTERNAL_ERROR) >= 1;
    }
};