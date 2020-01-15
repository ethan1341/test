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
var native_1 = require("styled-components/native");
var theme_1 = require("./styles/theme");
var TextInput_1 = require("./styles/TextInput");
/**
 * - AppSwitchNavigator
 *    - WelcomeScreen
 *      - Login Button
 *      - Sign Up Button
 *    - AppDrawerNavigator
 *          - Dashboard - DashboardStackNavigator(needed for header and to change the header based on the                     tab)
 *            - DashboardTabNavigator
 *              - Tab 1 - FeedStack
 *              - Tab 2 - ProfileStack
 *              - Tab 3 - SettingsStack
 *            - Any files you don't want to be a part of the Tab Navigator can go here.
 *            Grey Background = #f5f5f7
 *            Light Grey Font Color = #85858f
 *            Dark Grey Font Color = #39394a
 *            Purple = #a9a8da
 *            White = #f2f2f4
 */
var react_navigation_stack_1 = require("react-navigation-stack");
var react_navigation_tabs_1 = require("react-navigation-tabs");
var react_navigation_drawer_1 = require("react-navigation-drawer");
var react_navigation_1 = require("react-navigation");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (<native_1.ThemeProvider theme={theme_1.default}>
         <AppContainer />)
            </native_1.ThemeProvider>);
    };
    return App;
}(react_1.Component));
exports.default = App;
var WelcomeScreen = /** @class */ (function (_super) {
    __extends(WelcomeScreen, _super);
    function WelcomeScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WelcomeScreen.prototype.render = function () {
        return (<react_native_1.View style={{
            flex: 10,
            flexDirection: 'column',
            justifyContent: 'flex-start',
        }}>

                    <react_native_1.View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <react_native_1.ImageBackground style={{ width: '100%', height: '100%', flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} resizeMode='cover' source={require('./vendor/img/login.jpg')}>
                           <react_native_1.Button title="login"/>
                            <react_native_1.Text style={{ color: 'white' }}>Renter the battle!</react_native_1.Text>

                        </react_native_1.ImageBackground>
                    </react_native_1.View>

                    <react_native_1.View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'blue' }}>
                        <react_native_1.ImageBackground style={{ width: '100%', height: '100%', flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} resizeMode='cover' source={require('./vendor/img/register.jpg')}>
                            <TextInput_1.default />
                            <react_native_1.Text style={{ color: 'white' }}>Join The Fight!</react_native_1.Text>
                        </react_native_1.ImageBackground>
                    </react_native_1.View>




            </react_native_1.View>);
    };
    return WelcomeScreen;
}(react_1.Component));
var DashboardScreen = /** @class */ (function (_super) {
    __extends(DashboardScreen, _super);
    function DashboardScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DashboardScreen.prototype.render = function () {
        return (<react_native_1.View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'space-around', flexDirection: 'column' }}>
                <react_native_1.Text>DashboardScreen</react_native_1.Text>
                <react_native_1.Text>DashboardScreen1</react_native_1.Text>
            </react_native_1.View>);
    };
    return DashboardScreen;
}(react_1.Component));
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
                return <react_native_1.View style={{ flexInline: 1, alignItems: 'flex-start', flexDirection: 'row', paddingRight: 30, paddingTop: 15 }}>
                <react_native_1.Text style={{ fontSize: 18, flex: 3, marginTop: 10, marginRight: 20, color: '#85858f' }}>{_this.state.inputMap[inputName].name}</react_native_1.Text>
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
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Profile.prototype.render = function () {
        return (<react_native_1.View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                <react_native_1.Text>Profile</react_native_1.Text>
            </react_native_1.View>);
    };
    return Profile;
}(react_1.Component));
var settingsStack = react_navigation_stack_1.createStackNavigator({
    settings: Settings,
    settingDetails: SettingsDetails
});
var passwordStack = react_navigation_stack_1.createStackNavigator({
    passwordSettings: PasswordSettings,
    passwordDetails: SettingsDetails
});
// Pass the 3 Components to the Bottom Tab Navigator
var SettingsTabNavigator = react_navigation_tabs_1.createBottomTabNavigator({
    settingsStack: settingsStack, passwordStack: passwordStack
}, {
    navigationOptions: function (_a) {
        var navigation = _a.navigation;
        return {
            header: null
        };
    }
});
var DashboardTabNavigator = react_navigation_tabs_1.createBottomTabNavigator({
    Profie: Profile,
    CreateGroup: CreateGroup,
});
var SettingsStackNavigator = react_navigation_stack_1.createStackNavigator({
    SettingsTabNavigator: SettingsTabNavigator
}, {
    // These options will go on every screen this just opens the drawer
    defaultNavigationOptions: function (_a) {
        var navigation = _a.navigation;
        return {
            headerLeft: (<react_native_1.Button style={{ paddingLeft: 10 }} onPress={function () { return navigation.openDrawer(); }} name="md-menu" title="HELLO" size={30}/>)
        };
    }
});
var DashboardStackNavigator = react_navigation_stack_1.createStackNavigator(
//Passing the bottom navigator and naming it
{
    DashboardTabNavigator: DashboardTabNavigator
}, {
    // These options will go on every screen this just opens the drawer
    defaultNavigationOptions: function (_a) {
        var navigation = _a.navigation;
        return {
            headerLeft: (<react_native_1.Button style={{ paddingLeft: 10 }} onPress={function () { return navigation.openDrawer(); }} name="md-menu" title="HELLO" size={30}/>)
        };
    }
});
//Creating the Drawer
var AppDrawerNavigator = react_navigation_drawer_1.createDrawerNavigator({
    Dashboard: {
        screen: DashboardStackNavigator
    },
    Settings: {
        screen: SettingsStackNavigator
    }
});
var AppSwitchNavigator = react_navigation_1.createSwitchNavigator({
    Welcome: { screen: WelcomeScreen },
    Dashboard: { screen: AppDrawerNavigator }
});
var AppContainer = react_navigation_1.createAppContainer(AppSwitchNavigator);
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
