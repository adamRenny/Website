define(["exports", "jquery"], function (exports, _jquery) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var $ = _interopRequire(_jquery);

    function prepareDocument() {
        console.log("Worked");
    }

    $(document).ready(prepareDocument);
});