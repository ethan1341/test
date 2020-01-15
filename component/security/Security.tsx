
import {View, Text, StyleSheet, Button, TextInput,ImageBackground} from 'react-native';
import React, {Component} from 'react';

class PasswordSettings extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
                <Button onPress={()=>this.props.navigation.navigate('passwordDetails')} title="go to password details"/>
            </View>
        );
    }
}