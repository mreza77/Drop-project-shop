import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Styles } from '../../Style/Style';
import Global from '../../Global/Global';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CartData: Global.CartItem,
            TotalPrice: 0
        };
    }

    async componentDidMount() {
        setInterval(() => {
            if (this.state.CartData != Global.CartItem) {
                this.setState({ CartData: Global.CartItem })
            }
            this.CalculatePrice()
        }, 1000)
    }

    CalculatePrice() {
        this.setState({ TotalPrice: 0 })
        this.state.CartData.map((itm) => {
            const PriceItem = (itm.Number * itm.Price)
            this.setState({ TotalPrice: this.state.TotalPrice += PriceItem })
        })
    }


    render() {

        const renderItem1 = ({ item }) => {
            return (
                <View style={Styles.RenderFlatlistCart}>
                    <View style={Styles.RenderFlatlistView2}>
                        <Image
                            source={require("../../Assets/Pngs/all.png")}
                            resizeMode={"center"}
                            style={Styles.RenderFlatlistImage}
                        ></Image>
                    </View>
                    <View style={Styles.RenderFlatlistView3}>
                        <Text style={Styles.RenderFlatlistName} numberOfLines={1}>{item.name}</Text>
                        <Text style={Styles.RenderFlatlistTAgline} numberOfLines={1}>{item.Tagline}</Text>
                        <Text style={Styles.RenderFlatlistPrice} numberOfLines={1}>Price : {item.Price}</Text>
                    </View>
                    <View style={Styles.enderFlatlistKamZiadItemView}>
                        <TouchableOpacity
                            onPress={async () => {
                                const index = await Global.CartItem.findIndex(itm => itm.id == item.id)
                                Global.CartItem[index].Number = item.Number -= 1
                            }}
                            style={Styles.RenderFlatlistDashButton}>
                            <Octicons name="dash" style={Styles.RenderFlatlistIcon} ></Octicons>
                        </TouchableOpacity>
                        <View style={Styles.TextItemNumber}>
                            <Text style={Styles.TextItemNumbe}>{item.Number}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={async () => {
                                const index = await Global.CartItem.findIndex(itm => itm.id == item.id)
                                Global.CartItem[index].Number = item.Number += 1
                            }}
                            style={Styles.RenderFlatlistDashButton}>
                            <FontAwesome5 name="plus" style={Styles.RenderFlatlistplusicon} ></FontAwesome5>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.RenderFlatlistTrashButton}>
                        <TouchableOpacity
                            onPress={() => {
                                Global.CartItem = Global.CartItem.filter(itm => itm.id != item.id)
                            }}>
                            <FontAwesome5 name="trash-alt" style={Styles.RenderFlatlistIconTrash} ></FontAwesome5>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        };


        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Styles.BodyCart}>
                    <View style={Styles.TitleView}>
                        <Text style={Styles.TitleText}>Shopping Cart</Text>
                    </View>
                    <FlatList
                        data={this.state.CartData}
                        renderItem={renderItem1}
                        keyExtractor={item => item.id}
                    ></FlatList>
                    {this.state.CartData.length == 0 ? (
                        <View style={Styles.Emptycartview}>
                            <Text style={Styles.EmptycartText}>Your Cart Is Empty</Text>
                        </View>
                    ) : (
                            <View>
                                <View style={Styles.TotalPriceView}>
                                    <Text style={Styles.TotalPriceText}>Total Price :    {this.state.TotalPrice}</Text>
                                </View>
                                <View style={Styles.PaymentView}>
                                    <TouchableOpacity
                                        style={Styles.PaymentButton}>
                                        <Text style={Styles.PaymentButtonText}>Confirm Payment</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                </View>
            </ScrollView>
        );
    }
}

export default Cart;
