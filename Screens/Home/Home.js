import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
// import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class Home extends React.Component {
  state = {
    name: "",
    ...this.getInitialState()
  };
  getInitialState() {
    return { rows: 16, mines: 50 };
  }
  static navigationOptions = {
    title: "Minesweeper",
    headerTitleStyle: {
      color: "white"
    },
    headerStyle: {
      backgroundColor: "#f04"
    },
    headerRight: (
      <Button
        onPress={() => alert("This app was created by Meisam Poorzand.")}
        type="clear"
        title="about us"
        color="white"
      />
    )
  };

  handleNavigateToScores = () =>
    this.props.navigation.navigate("ScoreBoard", { name: this.state.name });

  handleNavigateToGame = () =>
    this.props.navigation.navigate("GameBoard", {
      name: this.state.name,
      rows: this.state.rows,
      mines: this.state.mines
    });

  componentDidCatch() {
    console.log("component did catch");
  }
  componentDidMount() {
    console.log("3- component did mount");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillMount() {
    console.log("1- component will mount");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  componentWillReceiveProps() {
    console.log("component will receive props");
  }
  componentWillUpdate() {
    console.log("component will update");
  }

  render() {
    console.log("2- render console.log");
    return (
      <View style={styles.container}>
        <Text fontSize="30px">Welcome to Minesweeper</Text>
        <Button
          type="outline"
          raised
          onPress={this.handleNavigateToScores}
          title="Score Board"
          color="#f04"
        />
        <Input placeholder="Number of Mines" shake={true} />
        <Input placeholder="Number of Rows" shake={true} />
        <Button
          onPress={this.handleNavigateToGame}
          type="outline"
          raised
          title="Start Game"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
