'use strict';

import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput, ImageBackground, LayoutAnimation, UIManager,  SafeAreaView} from 'react-native';
import TextInputColor from '../../styles/TextInput'
import ButtonContainer from '../../styles/button'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faCoffee, faBeer, faCircle, faCheck, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';




UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Roster extends Component {

        state = {
            textOptions:['COMBOS','FRAME DATA','SET UPS'],
            currentIndex:0
        }

    onSwipe = (gestureName,gestureState,name) => {
            console.log('what is gesturename', gestureName)
        const clonedState = this.state;
        if (gestureName == "Left") {
                console.log(1)
            if (clonedState.currentIndex == 0) {
                console.log(2)
                clonedState.currentIndex = clonedState.textOptions.length - 1;
            }else{
                console.log(3)
                clonedState.currentIndex -= 1
            }
        }

        if (gestureName == "Right") {
            if (clonedState.currentIndex == clonedState.textOptions.length - 1) {
                clonedState.currentIndex = 0
            }else{
                clonedState.currentIndex += 1
            }


        }


        this.setState(clonedState)
        LayoutAnimation.easeInEaseOut();


        if(gestureName == "Up"){

            this.props.navigation.navigate('Dashboard' );
        }

    }

    tester(){
            console.log('hello')
    }

    render() {
        const config = {
            velocityThreshold: 0.05,
            directionalOffsetThreshold:80,
            gestureIsClickThreshold:5
        };
        return (




            <View style={{
                flex: 10,
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}>


                <View style={{flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>

                    <GestureRecognizer
                        onSwipeUp={()=>this.onSwipe('Up')}
                        onSwipeLeft={()=>this.onSwipe('Left','down','cody')}
                        onSwipeRight={()=>this.onSwipe('Right','down','cody')}
                        config={config}
                        style={{
                            flex: 1,
                            backgroundColor: 'blue'
                        }}
                    >


                    <ImageBackground style={{width: '100%', height: '100%'}}
                                     resizeMode='cover'
                                     source={require('../../vendor/img/portrait-cody.jpg')}>



                        <View style={{
                            flex: 10,
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexDirection: 'row',

                        }}>
                            <View style={{flexInline: 2}}><FontAwesomeIcon size={32} icon={faChevronLeft}
                                                                           style={{color: 'white'}}/></View>

                            <SafeAreaView style={{flexInline: 2}}><ButtonContainer ><Text onPress={() => {
                                console.log('DID THIS RUN')
                                this.props.navigation.navigate('Character' );
                            }}  style={{color: 'white',fontSize:30,marginTop:-25}}> {this.state.textOptions[this.state.currentIndex]}</Text></ButtonContainer></SafeAreaView>

                            <View style={{flexInline: 2}}><FontAwesomeIcon size={32} icon={faChevronRight}
                                                                           style={{color: 'white'}}/></View>
                        </View>

                    </ImageBackground>
                    </GestureRecognizer>
                </View>
                <View style={{
                    flex: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    backgroundColor: 'blue'
                }}>
                    <ImageBackground style={{
                        width: '100%',
                        height: '100%',
                        flex: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}
                                     resizeMode='cover'
                                     source={require('../../vendor/img/portrait-laura.jpg')}>

                        <TextInputColor>Join The Fight!</TextInputColor>
                    </ImageBackground>
                </View>

            </View>
        )
    }
}