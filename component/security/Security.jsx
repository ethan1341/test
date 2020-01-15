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
var react_native_1 = require("react-native");
var react_1 = require("react");
var PasswordSettings = /** @class */ (function (_super) {
    __extends(PasswordSettings, _super);
    function PasswordSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PasswordSettings.prototype.render = function () {
        var _this = this;
        return (<react_native_1.View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <react_native_1.Button onPress={function () { return _this.props.navigation.navigate('passwordDetails'); }} title="go to password details"/>
            </react_native_1.View>);
    };
    return PasswordSettings;
}(react_1.Component));
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Settings.prototype.render = function () {
        return (<react_native_1.View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <react_native_1.Button title="go to settings details"/>
            </react_native_1.View>);
    };
    return Settings;
}(react_1.Component));
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
var PasswordDetails = /** @class */ (function (_super) {
    __extends(PasswordDetails, _super);
    function PasswordDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PasswordDetails.prototype.render = function () {
        return (<react_native_1.View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <react_native_1.Text>Passowrd Detaisl</react_native_1.Text>
            </react_native_1.View>);
    };
    return PasswordDetails;
}(react_1.Component));
