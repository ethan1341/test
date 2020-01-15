"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var SettingsDetails = /** @class */ (function (_super) {
    __extends(SettingsDetails, _super);
    function SettingsDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsDetails.prototype.render = function () {
        return (<react_native_1.View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <react_native_1.Text>THIS IS DETAILS </react_native_1.Text>
            </react_native_1.View>);
    };
    return SettingsDetails;
}(react_1.Component));
