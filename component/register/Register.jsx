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
var CreateGroup = /** @class */ (function (_super) {
    __extends(CreateGroup, _super);
    function CreateGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { inputMap: {} };
        _this.inputNames = ['Mail', 'First', 'Last', 'Email', 'Phone'];
        return _this;
    }
    CreateGroup.prototype.componentDidMount = function () {
        this.createMap();
    };
    CreateGroup.prototype.createMap = function () {
        var mapClone = this.state.inputMap;
        this.inputNames.map(function (inputName, i) {
            var mapValue = {
                inputBackgroundColor: '#f5f5f7',
                inputBorderColor: 'transparent'
            };
            mapValue.name = inputName;
            mapClone[inputName] = mapValue;
        });
        this.setState({ inputMap: mapClone });
    };
    CreateGroup.prototype.onFocus = function (text, mapKey) {
        console.log(text.nativeEvent, 'WOO!!');
        var activeStateObject = {
            inputBackgroundColor: '#fdfdff',
            inputBorderColor: '#a9a8da',
            name: mapKey
        };
        var mapClone = this.state.inputMap;
        mapClone[mapKey] = activeStateObject;
        this.setState({ inputMap: mapClone });
    };
    CreateGroup.prototype.onBlur = function (text, mapKey) {
        console.log(text.nativeEvent, 'wooo!!!');
        var activeStateObject = {
            inputBackgroundColor: '#f5f5f7',
            inputBorderColor: 'transparent',
            name: mapKey
        };
        var mapClone = this.state.inputMap;
        mapClone[mapKey] = activeStateObject;
        this.setState({ inputMap: mapClone });
    };
    CreateGroup.prototype.onChange = function (info) {
    };
    CreateGroup.prototype.createInputs = function () {
        var _this = this;
        return this.inputNames.map(function (inputName, i) {
            if (_this.state.inputMap[inputName]) {
                return <react_native_1.View style={{
                    flexInline: 1,
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    paddingRight: 30,
                    paddingTop: 15
                }}>
                    <react_native_1.Text style={{
                    fontSize: 18,
                    flex: 3,
                    marginTop: 10,
                    marginRight: 20,
                    color: '#85858f'
                }}>{_this.state.inputMap[inputName].name}</react_native_1.Text>
                    <react_native_1.TextInput onFocus={function (e) { return _this.onFocus(e, inputName); }} onEndEditing={function (e) { return _this.onBlur(e, inputName); }} onChangeText={function (info) { return _this.onChange(info); }} style={{
                    flex: 7,
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: _this.state.inputMap[inputName].inputBackgroundColor,
                    borderColor: _this.state.inputMap[inputName].inputBorderColor,
                    borderWidth: 2
                }}/>
                </react_native_1.View>;
            }
            else
                [];
            var htmlName = '';
        });
    };
    CreateGroup.prototype.render = function () {
        return (<react_native_1.View style={{
            flex: 10,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingLeft: 30,
            paddingRight: 30
        }}>
                {this.createInputs()}

            </react_native_1.View>);
    };
    return CreateGroup;
}(react_1.Component));
