import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: "#fff"
    },
    ViewLogo: {
        height: hp(11),
        backgroundColor: "#F22705",
        alignItems: "center"
    },
    TextLogo: {
        fontSize: wp(5),
        color: "#fff",
        fontWeight: "bold",
        marginTop:hp(2)
    },
    icon: {
        fontSize: wp(6),
        color: "#fff"
    },
    TabStyle: {
        backgroundColor: "#F22705"
    },
    TabUnderline: {
        height: hp(0)
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
        color: "#aaa",
        fontSize: wp(3.2)
    },
    activeTextStyleCoco: {
        color: "#fff",
        fontSize: wp(3.7)
    },
    ScrollableTabProduct: {
        backgroundColor: "#F22705",
        height: hp(8)
    },
    LottieView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: hp(25)
    },
    Lottie: {
        width: wp(30),
        height: wp(30),
    },
    RenderItemFlatlist1: {
        flex: 1 / 3,
        width: wp(27),
        height: hp(19),
        marginHorizontal: wp(2),
        marginVertical: hp(1),
        alignItems: "center",
    },
    RenderItemFlatlist1View: {
        width: wp(27),
        height: wp(27),
        borderColor: "#353535",
        borderWidth: wp(0.8),
        borderRadius: wp(4),
        justifyContent: "center",
        alignItems: "center"
    },
    RenderItemFlatlist1Empty: {
        flex: 1 / 3,
        width: wp(27),
        height: wp(27),
        marginHorizontal: wp(2),
        marginVertical: hp(2),
        borderColor: "transparent",
        borderWidth: wp(0.5),
        borderRadius: wp(4),
    },
    RenderItemFlatlist1Image: {
        width: wp(25),
        height: wp(25)
    },
    RenderItemFlatlist1View2: {
        width: wp(20)
    },
    RenderItemFlatlist1Text: {
        color: "#000",
        fontSize: wp(3),
        textAlign: "center",
        fontWeight: "bold"
    },
    ModalProductMain: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    ModalProductView: {
        backgroundColor: "#353535",
        width: wp(90),
        borderRadius: wp(4),
        alignItems:"flex-end"
    },
    ModalProductView1:{
        flexDirection:"row-reverse"
    },
    Closebutton: {
        width: wp(20),
        height: hp(5),
        backgroundColor: "#F22705",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: wp(4),
        marginRight: wp(70),
        marginBottom: hp(1),
        elevation: wp(2)
    },
    ClosebuttonText: {
        color: "#fff",
        fontSize: wp(4),
        fontWeight:"bold"
    },
    ModalProductImage:{
        width:wp(23),
        height:wp(23)
    },
    ModalProductView2:{
        width:wp(25),
        height:wp(25),
        backgroundColor:"#fff",
        borderRadius:wp(4),
        marginTop:hp(7),
        marginRight:wp(5)
    },
    ModalProductView3:{
        width:wp(50),
        borderRadius:wp(4),
        marginTop:hp(5),
        marginRight:wp(3),
        marginBottom:hp(2)
    },
    itemText: {
        color: "#fff",
        fontSize: wp(4),
        fontWeight:"400",
        marginTop:hp(0.3)
    },
    addtocartbutton:{
        width:wp(35),
        height:hp(6),
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:wp(3),
        marginRight:wp(5),
        marginBottom:hp(2)
    },
    addtocartbuttonText:{
        color:"#000",
        fontWeight:"bold",
        fontSize:wp(4)
    }




})

