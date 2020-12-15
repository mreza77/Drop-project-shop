import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../Style/Style';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Styles.body}>
        <View style={Styles.CenterText}>
          <Text style={Styles.TextStyle}> Search </Text>
        </View>
      </View>
    );
  }
}

export default Search;
