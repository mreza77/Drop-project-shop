
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import { Styles } from '../../Style/Style';
import TextCollapse from 'react-native-text-collapse';


class ModalProductPizza extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.isVisible,
            dataItem: this.props.data
        };

    }


    componentDidUpdate(prevProp, prevState) {

        if (prevProp.isVisible !== this.props.isVisible)
            this.setState({ visible: this.props.isVisible });

        if (prevProp.data !== this.props.data)
            this.setState({ dataItem: this.props.data });
    }

    render() {

        return (
            <Modal
                isVisible={this.state.visible}
                animationIn={"zoomIn"}
                backdropOpacity={0.5}
                animationOut={"zoomOut"}
                animationInTiming={0}
                animationOutTiming={0}
                onBackButtonPress={() => {
                    this.props.onClose();
                }}
            >
                <View style={Styles.ModalProductMain}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.onClose();
                        }}
                        style={Styles.Closebutton}>
                        <Text style={Styles.ClosebuttonText}>Close</Text>
                    </TouchableOpacity>
                    <View style={Styles.ModalProductView}>
                        <View style={Styles.ModalProductView1}>
                            <View style={Styles.ModalProductView2}>
                                <Image
                                    source={require("../../Assets/Pngs/pizza.png")}
                                    resizeMode={"center"}
                                    style={Styles.ModalProductImage}
                                ></Image>
                            </View>
                            <View style={Styles.ModalProductView3}>
                                <Text style={Styles.itemText}>{this.state.dataItem.name}</Text>
                                <Text style={Styles.itemText}>{this.state.dataItem.tagline}</Text>
                                <Text style={Styles.itemText}>Abv : {this.state.dataItem.abv}</Text>
                                <TextCollapse
                                    collapseType={"linear"}
                                    text={this.state.dataItem.description}
                                    textStyle={Styles.itemText}
                                    initialTextLength={50}
                                />
                                <Text style={Styles.itemText}>price : {this.state.dataItem.srm}</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={Styles.addtocartbutton}
                        >
                            <Text style={Styles.addtocartbuttonText}>ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        );
    }
}

export default ModalProductPizza;
