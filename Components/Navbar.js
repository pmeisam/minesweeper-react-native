import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Header, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class Navbar extends Component {
  state = {
    name: ""
  };

  handleScoreBoard = () =>
    this.props.navigation.navigate("ScoreBoard", { name: this.state.name });
  handleHomepage = () => {
    this.props.navigation.navigate("HomePage", { name: this.state.name });
  };
  render() {
    return (
      <Header
        containerStyle={{
          backgroundColor: "#f04",
          justifyContent: "space-around"
        }}
        leftComponent={
          <Button
            onPress={this.handleScoreBoard}
            type="clear"
            icon={<Icon name="star" size={15} color="white" size="25px" />}
          />
        }
        centerComponent={{
          text: "Minesweeper",
          style: { color: "#fff", fontSize: "30px" }
        }}
        rightComponent={
          <Button
            onPress={this.handleHomepage}
            type="clear"
            icon={<Icon name="home" color="white" size="25px" />}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Navbar;
