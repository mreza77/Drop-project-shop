import React, { Component } from 'react';
import { View } from 'react-native';
import { Styles } from '../../Style/Style';
import { TabAll, TabPizza, TabSteak } from '../CocaTabs';
import { Tab, Tabs } from 'native-base';

class Coca extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Styles.body}>
        <Tabs
          initialPage={0}
          locked={false}
          scrollWithoutAnimation={true}
          tabBarUnderlineStyle={Styles.TabUnderline}
        >
          <Tab heading={"ALL"}
            tabStyle={Styles.tabStyleCoco}
            activeTabStyle={Styles.activeTabStyleCoco}
            textStyle={Styles.textStyleCoco}
            activeTextStyle={Styles.activeTextStyleCoco} >
            <TabAll />
          </Tab>
          <Tab heading={"PIZZA"}
            tabStyle={Styles.tabStyleCoco}
            activeTabStyle={Styles.activeTabStyleCoco}
            textStyle={Styles.textStyleCoco}
            activeTextStyle={Styles.activeTextStyleCoco} >
            <TabPizza />
          </Tab>
          <Tab heading={"STEAK"}
            tabStyle={Styles.tabStyleCoco}
            activeTabStyle={Styles.activeTabStyleCoco}
            textStyle={Styles.textStyleCoco}
            activeTextStyle={Styles.activeTextStyleCoco} >
            <TabSteak />
          </Tab>
        </Tabs>
      </View>

    );
  }
}

export default Coca;
