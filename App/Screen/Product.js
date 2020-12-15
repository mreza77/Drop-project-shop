import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Styles} from '../Style/Style';


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Styles.body}>
        <Text> Product </Text>
      </View>
    );
  }
}

export default Product;
