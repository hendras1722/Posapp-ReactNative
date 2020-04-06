import React, { Component } from 'react';
import { View, Image, AsyncStorage, StatusBar } from 'react-native'
import { Container, Form, Item, Input, Label, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import axios from 'axios'
import { REACT_APP_API_URL, API_STORAGE } from 'react-native-dotenv'

class LoginScreen extends Component {

    static navigationOptions = {
        headerShown: false
        // headerTitle: () => null,
        // headerStyle: {
        //     backgroundColor: '#3346A8',
        // },
        // headerTintColor: '#fff',
        //     // headerTitleStyle: {
        //     //     fontWeight: 'bold',
        //     //     fontSize: 25,
        // },
    };

    state = {
        email: '',
        password: ''
    }

    onChangeEmail = (e) => {
        console.log(e)
        this.setState({
            email: e
        })
    }

    onChangePassword = (e) => {
        console.log(e)
        this.setState({
            password: e
        })
    }

    onSubmit = (e) => {
        console.log(REACT_APP_API_URL)
        console.log(this.state)
        axios
            .post(`http://20.20.20.148:4000/user/login`, this.state)
            .then(res => {
                console.log(res.data);
                AsyncStorage.setItem('token', res.data.token);
                AsyncStorage.setItem('user-id', res.data.id);
                AsyncStorage.setItem('isAuth', true);
                this.props.navigation.navigate('Home');
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        console.disableYellowBox = true
        return (
            <View >
                <StatusBar barStyle={"dark-content"} />
                <View style={{ backgroundColor: 'red', height: 200, maxHeight: 200, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Logo</Text>
                </View>
                <View style={{ top: 50 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Item stackedLabel >
                            <Label>E-mail</Label>
                            <Input onChangeText={this.onChangeEmail} />
                        </Item>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Item stackedLabel >
                            <Label>Password</Label>
                            <Input onChangeText={this.onChangeEmail} />
                        </Item>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', top: 20 }}>
                        <Button hasText onPress={this.onSubmit} style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Login</Text>
                        </Button>
                    </View>
                </View>
            </View>

        )
    }
}

export default LoginScreen;