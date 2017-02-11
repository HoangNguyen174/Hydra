"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var component_1 = require("./component");
var Graphic2DComponent = (function (_super) {
    __extends(Graphic2DComponent, _super);
    function Graphic2DComponent() {
        var _this;
        var name = "Graphic2DComponent";
        _this = _super.call(this, name) || this;
        return _this;
    }
    Graphic2DComponent.prototype.startup = function () {
    };
    Graphic2DComponent.prototype.shutdown = function () {
    };
    Graphic2DComponent.prototype.update = function () {
    };
    return Graphic2DComponent;
}(component_1.Component));
