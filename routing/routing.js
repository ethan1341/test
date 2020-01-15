import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {Button} from "react-native";
import {createDrawerNavigator} from "react-navigation-drawer";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import React from "react";
import Roster from "../component/roster/Roster"
import CharacterHome from "../component/character/CharacterHome"
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faChevronLeft, faBars} from '@fortawesome/free-solid-svg-icons'
import SettingDetails from "../component/setting/SettingDetail"

// const settingsStack = createStackNavigator({
//     settings: Settings,
//     settingDetails: SettingDetails
// })
//
// const passwordStack = createStackNavigator({
//     passwordSettings: PasswordSettings,
//     passwordDetails: SettingsDetails
// })
//
// // Pass the 3 Components to the Bottom Tab Navigator
// const SettingsTabNavigator = createBottomTabNavigator(
//     {
//         settingsStack, passwordStack
//
//     },{
//         navigationOptions:({navigation})=>{
//             return {
//                 header: null
//             }
//         }
//     }
//
// );

//
const DashboardTabNavigator = createBottomTabNavigator(
    {
        Combos:CharacterHome,
        FrameTraps:CharacterHome,
        SetUps:Roster
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                headerTitle: routeName,

                headerTintColor:'#fdd985'

            };
        }
    }

);
//
// const SettingsStackNavigator = createStackNavigator({
//     SettingsTabNavigator: SettingsTabNavigator
// }, {
//     // These options will go on every screen this just opens the drawer
//     defaultNavigationOptions: ({navigation}) => {
//         return {
//             headerLeft: (
//                 <Button
//                     style={{paddingLeft: 10}}
//                     onPress={() => navigation.openDrawer()}
//                     name="md-menu"
//                     title="HELLO"
//                     size={30}
//                 />
//             )
//         };
//     }
// })
//
// const SettingsStackNavigator = createStackNavigator({
//     SettingsTabNavigator: SettingsTabNavigator
// }, {
//     // These options will go on every screen this just opens the drawer
//     defaultNavigationOptions: ({navigation}) => {
//         return {
//             headerLeft: (
//                 <Button
//                     style={{paddingLeft: 10}}
//                     onPress={() => navigation.openDrawer()}
//                     name="md-menu"
//                     title="HELLO"
//                     size={30}
//                 />
//             )
//         };
//     }
// })


const DashboardStackNavigator = createStackNavigator(
    //Passing the bottom navigator and naming it
    {
        DashboardTabNavigator:{screen: DashboardTabNavigator},
        Roster:{screen:Roster}



    },
    {
        // These options will go on every screen this just opens the drawer
        defaultNavigationOptions: ({navigation}) => {
            return {
                headerLeft: (


                    <FontAwesomeIcon onPress={() => navigation.openDrawer()} size={32} icon={faBars}
                                     style={{color: '#fdd985'}}/>



                ),
                headerStyle: {
                    backgroundColor: '#202632',
                    color:'#fdd985'
                },


            };
        }
    }
);
//
// //Creating the Drawer
const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashboardStackNavigator
    },
    // Settings: {
    //     screen: SettingsStackNavigator
    // }
});

const AppSwitchNavigator = createSwitchNavigator({
    Roster:{screen:Roster},
    Dashboard: {screen:AppDrawerNavigator}

});


const AppContainer = createAppContainer(AppSwitchNavigator);

export default  AppContainer