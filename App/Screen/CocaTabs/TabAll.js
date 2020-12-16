import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Axios from 'axios';
import Global from '../../Global/Global';
import { Styles } from '../../Style/Style';
import Alert from 'react-native-android-alert-mjr';
import ModalProduct from '../../Component/ModalProduct/ModalProduct';
import Function from '../../Function/functionFromatData';
import Lottie from '../../Component/LoadingFlatlist/LottieLoading';


class TabAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Beers: [],
      visibleLoading: false,
      visibleModalProduct: false,
      dataItem: {},
      visiblealert: false,
      Alert: ""
    };
  }


  async componentDidMount() {
    this.setState({ visibleLoading: true }, () => {
      Axios.get(`${Global.baseUrl}v2/beers`)
        .then(response => {
          this.setState({ visibleLoading: false }, async () => {
            await this.setState({ Beers: response.data })
          })
        })
        .catch(error => {
          this.setState({ visibleLoading: false }, () => {
            setTimeout(() => {
              this.setState({
                visiblealert: true,
                Alert: "Internet connection error ..."
              })
            }, 1000)
          })
        })
    })
  }


  render() {

    const renderItem1 = ({ item }) => {

      if (item.empty) {
        return <View style={Styles.RenderItemFlatlist1Empty}></View>
      }
      return (
        <TouchableOpacity
          onPress={() => {
            this.setState({
              visibleModalProduct: true,
              dataItem: item
            })
          }}
          style={Styles.RenderItemFlatlist1}>
          <View style={Styles.RenderItemFlatlist1View}>
            <Image
              source={require("../../Assets/Pngs/all.png")}
              resizeMode={"center"}
              style={Styles.RenderItemFlatlist1Image}
            ></Image>
          </View>
          <View style={Styles.RenderItemFlatlist1View2}>
            <Text style={Styles.RenderItemFlatlist1Text} numberOfLines={1}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )
    };

    return (
      <View style={Styles.body}>
        <Alert
          isVisible={this.state.visiblealert}
          text={this.state.Alert}
          closeText={"close"}
          onClose={() => {
            this.setState({ visiblealert: false })
          }}
        />
        <ModalProduct
          isVisible={this.state.visibleModalProduct}
          onClose={() => {
            this.setState({ visibleModalProduct: false })
          }}
          data={this.state.dataItem}
          Image={require("../../Assets/Pngs/all.png")}
        />
        <FlatList
          data={Function.formatdata(this.state.Beers,  Global.numColumns)}
          renderItem={renderItem1}
          numColumns={ Global.numColumns}
          keyExtractor={item => item.id}
          ListFooterComponent={() => this.state.visibleLoading == true ?
            <Lottie />
            : null
          }
        ></FlatList>
      </View>
    );
  }
}

export default TabAll;
