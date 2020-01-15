import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput, ImageBackground, LayoutAnimation, UIManager,  SafeAreaView} from 'react-native';
import TextInputColor from '../../styles/TextInput'
import ButtonContainer from '../../styles/button'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faCoffee, faBeer, faCircle, faCheck, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


export default class CharacterHome extends Component {
    render() {
        return (
            <View style={{
                flex: 10,
                alignItems: 'flex-start',
                justifyContent: 'space-around',
                flexDirection: 'row',
                paddingTop:15,
                backgroundColor:'#262d3d'
            }}>
                <View style={{flexInline: 2,color:'white'}}><Text style={{color:'white'}}>Confirms</Text></View>

                <View style={{flexInline: 2,color:'#fdd985'}}><Text style={{color:'white'}}>Punish</Text></View>

                <View style={{flexInline: 2,color:'#fdd985'}}><Text style={{color:'#fdd985'}}>Critcal Arts</Text></View>

            </View>
        )
    }
}