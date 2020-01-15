'use strict';
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
var TextInput_1 = require("../../styles/TextInput");
var button_1 = require("../../styles/button");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_native_swipe_gestures_1 = require("react-native-swipe-gestures");
react_native_1.UIManager.setLayoutAnimationEnabledExperimental &&
    react_native_1.UIManager.setLayoutAnimationEnabledExperimental(true);
var Roster = /** @class */ (function (_super) {
    __extends(Roster, _super);
    function Roster() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            textOptions: ['COMBOS', 'FRAME DATA', 'SET UPS'],
            currentIndex: 0
        };
        _this.onSwipe = function (gestureName, gestureState, name) {
            console.log('what is gesturename', gestureName);
            var clonedState = _this.state;
            if (gestureName == "Left") {
                console.log(1);
                if (clonedState.currentIndex == 0) {
                    console.log(2);
                    clonedState.currentIndex = clonedState.textOptions.length - 1;
                }
                else {
                    console.log(3);
                    clonedState.currentIndex -= 1;
                }
            }
            if (gestureName == "Right") {
                if (clonedState.currentIndex == clonedState.textOptions.length - 1) {
                    clonedState.currentIndex = 0;
                }
                else {
                    clonedState.currentIndex += 1;
                }
            }
            _this.setState(clonedState);
            react_native_1.LayoutAnimation.easeInEaseOut();
            if (gestureName == "Up") {
                _this.props.navigation.navigate('Dashboard');
            }
        };
        return _this;
    }
    Roster.prototype.tester = function () {
        console.log('hello');
    };
    Roster.prototype.render = function () {
        var _this = this;
        var config = {
            velocityThreshold: 0.05,
            directionalOffsetThreshold: 80,
            gestureIsClickThreshold: 5
        };
        return (<react_native_1.View style={{
            flex: 10,
            flexDirection: 'column',
            justifyContent: 'flex-start',
        }}>


                <react_native_1.View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                    <react_native_swipe_gestures_1.default onSwipeUp={function () { return _this.onSwipe('Up'); }} onSwipeLeft={function () { return _this.onSwipe('Left', 'down', 'cody'); }} onSwipeRight={function () { return _this.onSwipe('Right', 'down', 'cody'); }} config={config} style={{
            flex: 1,
            backgroundColor: 'blue'
        }}>


                    <react_native_1.ImageBackground style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../vendor/img/portrait-cody.jpg')}>



                        <react_native_1.View style={{
            flex: 10,
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
        }}>
                            <react_native_1.View style={{ flexInline: 2 }}><react_native_fontawesome_1.FontAwesomeIcon size={32} icon={free_solid_svg_icons_1.faChevronLeft} style={{ color: 'white' }}/></react_native_1.View>

                            <react_native_1.SafeAreaView style={{ flexInline: 2 }}><button_1.default><react_native_1.Text onPress={function () {
            console.log('DID THIS RUN');
            _this.props.navigation.navigate('Character');
        }} style={{ color: 'white', fontSize: 30, marginTop: -25 }}> {this.state.textOptions[this.state.currentIndex]}</react_native_1.Text></button_1.default></react_native_1.SafeAreaView>

                            <react_native_1.View style={{ flexInline: 2 }}><react_native_fontawesome_1.FontAwesomeIcon size={32} icon={free_solid_svg_icons_1.faChevronRight} style={{ color: 'white' }}/></react_native_1.View>
                        </react_native_1.View>

                    </react_native_1.ImageBackground>
                    </react_native_swipe_gestures_1.default>
                </react_native_1.View>
                <react_native_1.View style={{
            flex: 5,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: 'blue'
        }}>
                    <react_native_1.ImageBackground style={{
            width: '100%',
            height: '100%',
            flex: 5,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }} resizeMode='cover' source={require('../../vendor/img/portrait-laura.jpg')}>

                        <TextInput_1.default>Join The Fight!</TextInput_1.default>
                    </react_native_1.ImageBackground>
                </react_native_1.View>

            </react_native_1.View>);
    };
    return Roster;
}(react_1.Component));
exports.default = Roster;
