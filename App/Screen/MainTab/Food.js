import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../Style/Style';


class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Styles.body}>
        <View style={Styles.CenterText}>
          <Text style={Styles.TextStyle}> Food </Text>
        </View>
      </View>
    );
  }
}

export default Food;
