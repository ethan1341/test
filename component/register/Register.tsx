import {View, Text, StyleSheet, Button, TextInput, ImageBackground} from 'react-native';
import React, {Component} from 'react';

class CreateGroup extends Component {

    state = {inputMap: {}};
    inputNames = ['Mail', 'First', 'Last', 'Email', 'Phone']

    componentDidMount() {

        this.createMap()
    }

    createMap() {
        var mapClone = this.state.inputMap;
        this.inputNames.map((inputName, i) => {

            var mapValue = {
                inputBackgroundColor: '#f5f5f7',
                inputBorderColor: 'transparent'
            }
            mapValue.name = inputName;
            mapClone[inputName] = mapValue;
        })
        this.setState({inputMap: mapClone});
    }

    onFocus(text, mapKey) {
        console.log(text.nativeEvent, 'WOO!!')
        var activeStateObject = {
            inputBackgroundColor: '#fdfdff',
            inputBorderColor: '#a9a8da',
            name: mapKey
        }

        var mapClone = this.state.inputMap;
        mapClone[mapKey] = activeStateObject

        this.setState({inputMap: mapClone})

    }

    onBlur(text, mapKey) {
        console.log(text.nativeEvent, 'wooo!!!')

        var activeStateObject = {
            inputBackgroundColor: '#f5f5f7',
            inputBorderColor: 'transparent',
            name: mapKey
        }

        var mapClone = this.state.inputMap;
        mapClone[mapKey] = activeStateObject

        this.setState({inputMap: mapClone})

    }

    onChange(info) {
    }

    createInputs() {


        return this.inputNames.map((inputName, i) => {
            if (this.state.inputMap[inputName]) {
                return <View style={{
                    flexInline: 1,
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    paddingRight: 30,
                    paddingTop: 15
                }}>
                    <Text style={{
                        fontSize: 18,
                        flex: 3,
                        marginTop: 10,
                        marginRight: 20,
                        color: '#85858f'
                    }}>{this.state.inputMap[inputName].name}</Text>
                    <TextInput
                        onFocus={e => this.onFocus(e, inputName)}
                        onEndEditing={e => this.onBlur(e, inputName)}
                        onChangeText={info => this.onChange(info)}
                        style={{
                            flex: 7,
                            height: 50,
                            borderRadius: 10,
                            backgroundColor: this.state.inputMap[inputName].inputBackgroundColor,
                            borderColor: this.state.inputMap[inputName].inputBorderColor,
                            borderWidth: 2
                        }}
                    />
                </View>
            } else []

            var htmlName = '';

        })
    }


    render() {
        return (
            <View style={{
                flex: 10,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                paddingLeft: 30,
                paddingRight: 30
            }}>
                {this.createInputs()}

            </View>

        );
    }
}