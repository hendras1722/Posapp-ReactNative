import React, { Component, Fragment } from 'react'
import { View, Text, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import { connect } from 'react-redux';
import { addQty, reduceQty, addCart, deleteCart } from '../../redux/actions/carts'
import { ScrollView } from 'react-native-gesture-handler';
import { orderCheckout } from '../../redux/actions/order'

class Order extends Component {
    addQuantity = (id) => {
        console.log('wkwkwowek')
        this.props.dispatch(addQty(id))
    }
    reduceQuantity = (id) => {
        // console.log(qty)

        this.props.dispatch(reduceQty(id))

    }

    deleteQuantitiy = (id) => {
        this.props.dispatch(deleteCart(id))
    }

    onSubmit = async () => {
        const data = {
            idBuyer: parseInt(AsyncStorage.getItem('id')),
            products: this.props.cart
        }
        console.log('ndjwqndwqjdnk')
        await this.props.dispatch(orderCheckout(data))
    }

    render() {
        const { cart, total } = this.props
        // console.log("hello", this.props.carts)
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    {cart.map((cart) =>
                        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 10 }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                {/* <Text>{cart.image}</Text> */}
                                <Image source={{ uri: `${cart.image}`, width: 50, height: 50 }} />
                            </View>
                            <View style={{
                                flex: 3, marginHorizontal: 10, padding: 10
                            }}>
                                <Text>{cart.name}</Text>
                                <Text>{cart.price}</Text>
                            </View>
                            <View style={{
                                flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'
                            }}>
                                <TouchableOpacity style={{ backgroundColor: 'red', padding: 5, width: 20, justifyContent: 'center', alignItems: 'center' }} onPress={() => (this.reduceQuantity(cart.id))}>
                                    <Text>
                                        -
                        </Text>
                                </TouchableOpacity>

                                <Text style={{ marginHorizontal: 5 }}>{cart.qty}</Text>

                                <TouchableOpacity style={{ backgroundColor: 'red', padding: 5, width: 20, justifyContent: 'center', alignItems: 'center' }} onPress={() => (this.addQuantity(cart.id))}>
                                    <Text>
                                        +
                        </Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    )}

                </ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, paddingLeft: 20 }}>
                        <Text>TotalHarga :</Text>
                        <Text>{total}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: '#fff', padding: 5, borderRadius: 10 }} onPress={this.onSubmit}>
                            <Text>Checkout</Text>

                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('hello', state)
    return {
        // products: state.products.products,
        cart: state.cart.cart,
        total: state.cart.total
    }
}

export default connect(mapStateToProps)(Order);