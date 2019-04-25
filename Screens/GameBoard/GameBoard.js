import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableHighlight
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

class GameBoard extends Component {
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
  state = {
    board: [],
    mines: []
  };
  handleArrayCheck = (x, y) => {
    if (x < this.props.navigation.state.params.rows && y < this.props.navigation.state.params.rows && x >= 0 && y >= 0) {
      if (this.state.mines.includes(y * this.props.navigation.state.params.rows + x)) {
        return true;
      } else return false;
    } else return false;
  };
  handleFindMine = id => {
    let counter = 0;
    const x = id % this.props.navigation.state.params.rows;
    const y = Math.floor(id / this.props.navigation.state.params.rows);
    console.log(`(${x}, ${y})`);
    if (this.handleArrayCheck(x - 1, y - 1)) counter++;
    if (this.handleArrayCheck(x, y - 1)) counter++;
    if (this.handleArrayCheck(x + 1, y - 1)) counter++;
    if (this.handleArrayCheck(x - 1, y)) counter++;
    if (this.handleArrayCheck(x + 1, y)) counter++;
    if (this.handleArrayCheck(x - 1, y + 1)) counter++;
    if (this.handleArrayCheck(x, y + 1)) counter++;
    if (this.handleArrayCheck(x + 1, y + 1)) counter++;
    return counter;
  };
  handlePressEmptyBox = id => {
    let board = this.state.board;
    if (this.state.mines.includes(id)) {
      board[id] = require("../../assets/images/mine.png");
      this.setState({ board });
    } else {
      const count = this.handleFindMine(id);
      const images = [
        require("../../assets/images/0.png"),
        require("../../assets/images/1.png"),
        require("../../assets/images/2.png"),
        require("../../assets/images/3.png"),
        require("../../assets/images/4.png"),
        require("../../assets/images/5.png"),
        require("../../assets/images/6.png"),
        require("../../assets/images/7.png"),
        require("../../assets/images/8.png")
      ];
      board[id] = images[count];
      this.setState({ board });
    }
  };
  handleLongPressEmptyBox = id => {
    let board = this.state.board;
    board[id] = require("../../assets/images/flag.png");
    this.setState({ board });
  };
  async componentWillMount() {
    await this.setState({
      board: new Array(
        this.props.navigation.state.params.rows *
          this.props.navigation.state.params.rows
      ).fill(require("../../assets/images/emptyBox.png"))
    });
    let count = 0;
    const mineArray = [];
    while (count < this.props.navigation.state.params.mines) {
      const i = Math.floor(Math.random() * this.state.board.length);
      if (!mineArray.includes(i)) {
        mineArray.push(i);
        count++;
      }
    }
    await this.setState({ mines: mineArray });
  }
  render() {
    return (
      <View>
        <View style={styles.scoreBoard}>
          <Text>{this.state.mines.length}</Text>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../../assets/images/smile.png")}
          />
          <Text>00:00</Text>
        </View>
        <ScrollView horizontal={true} vertical={true}>
          <View
            style={styles.gameBoard}
            width={35 * this.props.navigation.state.params.rows}
          >
            {this.state.board.map((brd, idx) => (
              <TouchableHighlight
                key={`box${idx}`}
                onLongPress={() => this.handleLongPressEmptyBox(idx)}
                onPress={() => this.handlePressEmptyBox(idx)}
              >
                <Image
                  key={`empty${idx}`}
                  style={{ width: 35, height: 35 }}
                  source={brd}
                />
              </TouchableHighlight>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameBoard: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  scoreBoard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default GameBoard;
