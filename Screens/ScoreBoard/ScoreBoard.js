import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { withTheme } from "react-native-elements";
// import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class Login extends React.Component {
  static navigationOptions = {
    title: "Score Board",
    headerTitleStyle: {
      color: "white"
    },
    headerStyle: {
      backgroundColor: "#f04"
    }
  };
  render() {
    console.log("app is running console.log works");
    return (
      <View style={styles.container}>
        <Text>Score Board:</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
    // justifyContent: "center"
  }
});
