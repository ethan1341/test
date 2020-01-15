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
var CharacterHome = /** @class */ (function (_super) {
    __extends(CharacterHome, _super);
    function CharacterHome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharacterHome.prototype.render = function () {
        return (<react_native_1.View style={{
            flex: 10,
            alignItems: 'flex-start',
            justifyContent: 'space-around',
            flexDirection: 'row',
            paddingTop: 15,
            backgroundColor: '#262d3d'
        }}>
                <react_native_1.View style={{ flexInline: 2, color: 'white' }}><react_native_1.Text style={{ color: 'white' }}>Confirms</react_native_1.Text></react_native_1.View>

                <react_native_1.View style={{ flexInline: 2, color: '#fdd985' }}><react_native_1.Text style={{ color: 'white' }}>Punish</react_native_1.Text></react_native_1.View>

                <react_native_1.View style={{ flexInline: 2, color: '#fdd985' }}><react_native_1.Text style={{ color: '#fdd985' }}>Critcal Arts</react_native_1.Text></react_native_1.View>

            </react_native_1.View>);
    };
    return CharacterHome;
}(react_1.Component));
exports.default = CharacterHome;
