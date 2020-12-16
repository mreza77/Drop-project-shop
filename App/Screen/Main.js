import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { Tab, Tabs, TabHeading, ScrollableTab } from 'native-base';
import { Coca, Food, Offer, Search } from './MainTab';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Styles } from '../Style/Style';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={Styles.body}>
                <StatusBar backgroundColor={"#F22705"} barStyle={"light-content"} />
                <View style={Styles.ViewLogo}>
                    <Text style={Styles.TextLogo}>KFC GORGAN</Text>
                </View>
                <Tabs
                    initialPage={0}
                    locked={true}
                    scrollWithoutAnimation={false}
                    >
                    <Tab heading={
                        <TabHeading style={Styles.TabStyle} >
                            <FontAwesome5 name="coffee" style={Styles.icon} ></FontAwesome5>
                        </TabHeading>
                    }><Coca /></Tab>
                    <Tab heading={
                        <TabHeading style={Styles.TabStyle} >
                            <FontAwesome5 name="utensils" style={Styles.icon} ></FontAwesome5>
                        </TabHeading>
                    }><Food /></Tab>
                    <Tab heading={
                        <TabHeading style={Styles.TabStyle} >
                            <FontAwesome5 name="percent" style={Styles.icon} ></FontAwesome5>
                        </TabHeading>
                    }><Offer /></Tab>
                    <Tab heading={
                        <TabHeading style={Styles.TabStyle} >
                            <FontAwesome5 name="search" style={Styles.icon} ></FontAwesome5>
                        </TabHeading>
                    }><Search /></Tab>
                </Tabs>
            </View>


        );
    }
}

export default Product;
