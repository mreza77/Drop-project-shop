import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Axios from 'axios';
import Global from '../../Global/Global';
import { Styles } from '../../Style/Style';
import Alert from 'react-native-android-alert-mjr';
import LottieView from 'lottie-react-native';
import ModalProduct from '../../Component/ModalProduct/ModalProductPizaa';
const numColumns = 3

class TabPizza extends Component {
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



  formatdata(data, numColumns) {
    const totalRows = Math.floor(data.length / numColumns)
    let totalLastRows = data.length - (totalRows * numColumns)

    while (totalLastRows !== 0 && totalLastRows !== numColumns) {
      data.push({ id: "blank", empty: true })
      totalLastRows++
    }
    return data
  }

  sendItem(item) {
    this.setState({ dataItem: item })
  }

  render() {

    const renderItem1 = ({ item }) => {

      if (item.empty) {
        return <View style={Styles.RenderItemFlatlist1Empty}></View>
      }

      return (
        <TouchableOpacity
          onPress={() => {
            this.setState({ visibleModalProduct: true }, () => {
              this.sendItem(item)
            })
          }}
          style={Styles.RenderItemFlatlist1}>
          <View style={Styles.RenderItemFlatlist1View}>
            <Image
              source={require("../../Assets/Pngs/pizza.png")}
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
        />
        <FlatList
          data={this.formatdata(this.state.Beers, numColumns)}
          renderItem={renderItem1}
          numColumns={numColumns}
          keyExtractor={item => item.id}
          ListFooterComponent={() => this.state.visibleLoading == true ?
            <View style={Styles.LottieView}>
              <LottieView
                source={require("../../Assets/LottieFiles/fastFood.json")}
                loop
                autoPlay
                style={Styles.Lottie}
              />
            </View>
            : null
          }
        ></FlatList>
      </View>
    );
  }
}

export default TabPizza;
