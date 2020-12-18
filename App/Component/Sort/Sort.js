import { View } from 'react-native';
import React, { Component } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Styles } from '../../Style/Style';
import Global from '../../Global/Global';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Styles.BodySort}>
        <DropDownPicker
          items={[
            { label: '- Default -', value: 'Normal' },
            { label: 'Ascending based on abv', value: 'AscendingAbv' },
            { label: 'Descending based on abv', value: 'DescendingAbv' },
            { label: 'Ascending based on name', value: 'AscendingName' },
            { label: 'Descending based on name', value: 'DescendingName' },
          ]}
          defaultValue={Global.Filter}
          containerStyle={Styles.containerStyle}
          style={Styles.Stylesort}
          itemStyle={Styles.ItemSort}
          dropDownStyle={Styles.dropDownStyle}
          labelStyle={Styles.labelStyle}
          arrowStyle={Styles.arrowStyle}
          onChangeItem={item => Global.Filter = item.value}
        />
      </View>

    );
  }
}

export default Sort;
