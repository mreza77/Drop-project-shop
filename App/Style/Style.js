import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: "#fff"
    },
    ViewLogo: {
        height: hp(10),
        backgroundColor: "#F22705",
        justifyContent: "center",
        alignItems: "center"
    },
    TextLogo: {
        fontSize: wp(5),
        color: "#fff",
        fontWeight: "bold"
    },
    icon: {
        fontSize: wp(6),
        color: "#fff"
    },
    TabStyle: {
        backgroundColor: "#F22705"
    },
    TabUnderline: {
        height:hp(0)
    },
    CenterText: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    TextStyle: {
        fontSize: wp(5)
    },
    tabStyleCoco: {
        backgroundColor: "#353535",
    },
    activeTabStyleCoco: {
        backgroundColor: "#353535",
    },
    textStyleCoco: {
        color: "#aaa", fontSize: wp(3.2)
    },
    activeTextStyleCoco: {
        color: "#fff", fontSize: wp(3.7)
    },
    ScrollableTabProduct:{
        backgroundColor:"#F22705",
        height:hp(8)
    }


})

