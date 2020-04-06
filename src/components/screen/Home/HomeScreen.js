import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
// import { searchProduct } from '../../redux/actions/Product';
import { InputGroup, Input, Container, Header, Content, Card, CardItem, Button, Icon, Picker, } from 'native-base';
import { getProducts, deleteProducts, searchProduct } from '../../redux/actions/Product';
import { connect } from 'react-redux';

import { addCart } from '../../redux/actions/carts'

class HomeScreen extends Component {
    state = {
        id_category: ''
    }

    static navigationOptions = {
        title: "Home",
        headerStyle: {
            backgroundColor: '#3346A8',
        },
        headerLeft: null,
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    onAddChart = (product) => {
        product.qty = 1
        this.props.dispatch(addCart(product))
    }

    onValueChange(event) {
        this.setState({
            id_category: event
        });
    }

    onSearchProduct = (e) => {
        console.log(e)
        this.setState({
            searchName: e
        })
        this.props.dispatch(searchProduct(e));
    }

    async getProducts() {
        console.log(this.props)
        await this.props.dispatch(getProducts());
    }

    componentDidMount() {
        this.getProducts();
    }

    renderRow = ({ item }) => {
        return (

            <Content padder>
                <View style={{ flexDirection: 'row' }}>
                    <Card style={{ maxWidth: 350 }}>
                        <CardItem header button onPress={() => alert("click order")}>
                            <View>
                                <Image source={{ uri: `${item.image}`, width: 100, height: 100 }} /></View>
                            <View style={{ maxWidth: 100, left: 10 }}>
                                <Text onPress={() => this.onSubmit.bind(this, item.id)} style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{item.name}</Text>
                                <Text>{item.price}</Text>
                            </View>
                            <View style={{ marginHorizontal: 30, maxWidth: 50 }}>
                                <Button hasText onPress={() => this.onAddChart(item)} style={{ width: 80, justifyContent: 'center', marginTop: 5, borderRadius: 25 }}>
                                    <Text style={{ color: 'white' }}>Order</Text>
                                </Button>
                            </View>
                        </CardItem>
                    </Card>
                </View>
            </Content>
            // <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, borderBottomWidth: 1, borderBottomColor: "rgba(0,0,0,.1)", height: 110 }}>
            //     {/* <Image source={{ uri: "https://inc.mizanstore.com/aassets/img/com_cart/produk/mudah-membuat-dan-berbisnis-aplikasi-android-dengan-android-stud.jpg", width: 100, height: 100 }} /> */}
            //     <View style={{ flex: 1, flexDirection: 'column' }}>
            //         <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 5 }}>{item.name}</Text>
            //         <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 18 }}>Stock {item.stock}</Text>
            //         <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 18, position: 'absolute', marginLeft: 100, marginTop: 30 }}>Rp.{item.price}</Text>
            //     </View>
            // </View>
        )
    }


    render() {
        const { products } = this.props
        console.log(this.props.products)
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <InputGroup>
                        <Input style={{ backgroundColor: 'white', left: -50, marginHorizontal: 100, borderRadius: 20, paddingLeft: 50, paddingRight: 40 }} placeholder='Mau cari apa ..... ?' onChangeText={this.onSearchProduct} />
                    </InputGroup>
                    <Image source={require('../../../img/res/drawable-hdpi/baseline_search_black_18.png')} style={{ position: 'absolute', marginLeft: 65, marginTop: 12 }} />
                    <Picker
                        selectedValue={this.state.id_category}
                        style={{ height: 50, width: 100 }}
                        onValueChange={this.sortProduct}>
                        <Picker.Item label="Choose" value="" />
                        <Picker.Item label="Microcontroller" value="1" />
                        <Picker.Item label="Component" value="2" />
                    </Picker>
                </View>
                <View style={{ marginTop: 120, marginLeft: 10, marginBottom: 10, flex: 1 }}>
                    <FlatList
                        data={products}
                        renderItem={this.renderRow}
                        // refreshing={books.isLoading}
                        // onRefresh={this.onRefreshing}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>


            </View>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(HomeScreen);