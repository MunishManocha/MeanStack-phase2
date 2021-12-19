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
exports.UserProfile = void 0;
var ApiService_1 = require("./ApiService");
var baseModel_1 = require("./baseModel");
var UserProfile = /** @class */ (function (_super) {
    __extends(UserProfile, _super);
    function UserProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserProfile.prototype.add = function () {
        new ApiService_1.ApiService().add(new UserProfile());
    };
    UserProfile.prototype.mod = function () {
        new ApiService_1.ApiService().add(new UserProfile());
    };
    UserProfile.prototype.del = function () {
        new ApiService_1.ApiService().add(new UserProfile());
    };
    return UserProfile;
}(baseModel_1.baseModel));
exports.UserProfile = UserProfile;
