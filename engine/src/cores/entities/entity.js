"use strict";
var Entity = (function () {
    function Entity() {
    }
    Entity.prototype.addComponnent = function (component) {
        for (var i = 0; i < this.mComponents.length; i++) {
            if (this.mComponents[i].mType == component.mType)
                this.mComponents[i] = component;
            else
                this.mComponents.push(component);
        }
    };
    Entity.prototype.removeComponent = function (component) {
        for (var i = 0; i < this.mComponents.length; i++) {
            if (this.mComponents[i].mType == component.mType) {
                this.mComponents.splice(i, 1);
                return;
            }
        }
    };
    return Entity;
}());
exports.Entity = Entity;
