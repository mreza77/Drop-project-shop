import React, { Component } from 'react';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { Styles } from '../../Style/Style';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Cart from '../Cart/Cart';

class BottomSheetComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <BottomSheet
                isOpen={true}
                sliderMinHeight={hp(8)}
                sliderMaxHeight={hp(70)}
                outerContentStyle={Styles.outerContentStyle}
                wrapperStyle={Styles.wrapperStyle}
                lineContainerStyle={Styles.lineContainerStyle}
                lineStyle={Styles.lineStyle}
            >
                <Cart />
            </BottomSheet>
        );
    }
}

export default BottomSheetComponent;
