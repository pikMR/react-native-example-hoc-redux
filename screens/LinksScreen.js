import React from 'react';
import { ScrollView, StyleSheet,Text,Dimensions } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {COLORS,PADDING,FONTS} from '../themes'
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      <Text style={styles.header}>
        Tu Mensaje :
      </Text>
      <Text style={styles.section}>
        {this.props.navigation.state.params.msg}
      </Text>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links
            <ExpoLinksView />
           */
         }

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },header: {
    fontSize: FONTS.lg,
    fontFamily: FONTS.primary
  },
  section: {
    paddingVertical: PADDING.lg,
    paddingHorizontal: PADDING.xl
  }
});
