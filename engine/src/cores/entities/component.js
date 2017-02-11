"use strict";
var uuid_1 = require("../utilities/uuid");
var Component = (function () {
    function Component(type) {
        this.mId = uuid_1.default();
        this.mType = type;
    }
    return Component;
}());
exports.Component = Component;
