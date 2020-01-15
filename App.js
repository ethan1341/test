import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput,ImageBackground} from 'react-native';
import {ThemeProvider} from 'styled-components/native'
import theme from './styles/theme';
import TextInputColor from './styles/TextInput'
import AppSwitchNavigator from './routing/routing'

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
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';

class App extends Component {
    render() {
        return(
            <ThemeProvider theme={theme}>
         <AppContainer/>
            </ThemeProvider>
                )
    }
}

export default App;

// class WelcomeScreen extends Component {
//     render() {
//         return (
//
//
//         );
//     }
// }
//
// class DashboardScreen extends Component {
//     render() {
//         return (
//             <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'space-around', flexDirection: 'column'}}>
//                 <Text>DashboardScreen</Text>
//                 <Text>DashboardScreen1</Text>
//             </View>
//         );
//     }
// }
//
//
//
// class Settings extends Component {
//     render() {
//         return (
//             <View style={{flex: 1, justifyContent: 'flex-start'}}>
//                 <Button title="go to settings details"/>
//             </View>
//         );
//     }
// }
//
// class SettingsDetails extends Component {
//     render() {
//         return (
//             <View style={{flex: 1, justifyContent: 'flex-start'}}>
//                <Text>THIS IS DETAILS </Text>
//             </View>
//         );
//     }
// }
//
// class PasswordSettings extends Component {
//     render() {
//         return (
//             <View style={{flex: 1, justifyContent: 'flex-start'}}>
//                 <Button onPress={()=>this.props.navigation.navigate('passwordDetails')} title="go to password details"/>
//             </View>
//         );
//     }
// }
//
// class PasswordDetails extends Component {
//     render() {
//         return (
//             <View style={{flex: 1, justifyContent: 'flex-start'}}>
//                 <Text>Passowrd Detaisl</Text>
//             </View>
//         );
//     }
// }
//
// class Profile extends Component {
//     render() {
//         return (
//             <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
//                 <Text>Profile</Text>
//             </View>
//         );
//     }
// }
//


const AppContainer = createAppContainer(AppSwitchNavigator);

