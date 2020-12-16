import React, { Component } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Styles } from '../../Style/Style';


class LottieLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={Styles.LottieView}>
        <LottieView
          source={require("../../Assets/LottieFiles/fastFood.json")}
          loop
          autoPlay
          style={Styles.Lottie}
        />
      </View>
    );
  }
}

export default LottieLoading;
