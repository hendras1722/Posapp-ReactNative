<View style={{ flex: 1 }}>
    <Image source={require('../../../img/arcreactor.png')} style={{ width: 130, height: 130, marginLeft: 130, position: 'relative', marginTop: 50 }} />
    <Text style={{ marginTop: 20, marginLeft: 130, fontSize: 20 }}>Cash Sir Apps</Text>
    <Form style={{ marginVertical: 20 }}>
        <Item stackedLabel style={{ width: 380 }}>
            <Label>E-mail</Label>
            <Input onChangeText={this.onChangeEmail} />
        </Item>
        <Item stackedLabel last style={{ width: 380, marginLeft: 12 }}>
            <Label style={{ marginLeft: -12 }}>Password</Label>
            <Input style={{ marginLeft: -12 }} onChangeText={this.onChangePassword} secureTextEntry={true} />
        </Item>
    </Form>
</View>
    <View>
        <Button hasText onPress={this.onSubmit} style={{ width: 100, justifyContent: 'center', marginTop: -160, marginHorizontal: 150, marginTop: 10 }}>
            <Text>Login</Text>
        </Button>
    </View> 