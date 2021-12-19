"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var employe_1 = require("./employe");
var develop = /** @class */ (function (_super) {
    __extends(develop, _super);
    function develop(_name, _dept, _id, _projectName) {
        var _this = _super.call(this, _name, _dept, _id) || this;
        _this.projectName = _projectName;
        return _this;
    }
    develop.prototype.writeCode = function () {
        console.log("Writing Code");
    };
    develop.prototype.PrintProjectName = function () {
        console.log("Hi All" + this.projectName);
    };
    return develop;
}(employe_1.Employee));
var dev = new develop("manocha", "bank", 2, "ICICI BANK");
dev.print();
dev.writeCode();
dev.PrintProjectName();
