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
    if (
      x < this.props.navigation.state.params.rows &&
      y < this.props.navigation.state.params.rows &&
      x >= 0 &&
      y >= 0
    ) {
      if (
        this.state.mines.includes(
          y * this.props.navigation.state.params.rows + x
        )
      ) {
        return true;
      } else return false;
    } else return false;
  };
  checkImage = id => {
    // const id = y * this.props.navigation.state.params.rows + x;
    const rows = this.props.navigation.state.params.rows;
    const columns = this.props.navigation.state.params.rows;
    if (id < 0) id = 0;
    else if (id > rows * columns) id = rows * columns;
    const board = this.state.board;
    if (board[id] === require("../../assets/images/emptyBox.png")) {
      console.log(board[id]);
      return true;
    } else {
      console.log(board[id]);
      return false;
    }
  };
  handleFindMine = (x, y) => {
    let counter = 0;
    // const x = id % this.props.navigation.state.params.rows;
    // const y = Math.floor(id / this.props.navigation.state.params.rows);
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
  handleReveal = (x, y) => {
    const id = y * this.props.navigation.state.params.rows + x;
    const rows = this.props.navigation.state.params.rows;
    const columns = this.props.navigation.state.params.rows;
    let board = this.state.board;
    // const count = this.handleFindMine(x, y);
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
    if (x < 0 && y < 0 && x >= rows && y >= columns) return;
    else if ((this.checkImage(id), this.handleFindMine(x, y) === 0)) {
      board[id] = require("../../assets/images/0.png");
      if (this.handleFindMine(x - 1, y) === 0 && x > 0 && x < rows)
        this.handleReveal(x - 1, y);
      else if (this.handleFindMine(x - 1, y) !== 0 && x > 0) {
        board[id - 1] = images[this.handleFindMine(x - 1, y)];
      }
      if (this.handleFindMine(x + 1, y) === 0 && x < rows - 1 && x >= 0)
        this.handleReveal(x + 1, y);
      else if (this.handleFindMine(x + 1, y) !== 0 && x < rows - 1 && x >= 0) {
        board[id + 1] = images[this.handleFindMine(x + 1, y)];
      }
      if (this.handleFindMine(x, y + 1) === 0 && y < columns - 1)
        this.handleReveal(x, y + 1);
      else if (this.handleFindMine(x, y + 1) !== 0 && y < columns - 1) {
        board[id + columns] = images[this.handleFindMine(x, y + 1)];
      }
      if (this.handleFindMine(x, y - 1) === 0 && y > 0)
        this.handleReveal(x, y - 1);
      else if (this.handleFindMine(x, y - 1) !== 0 && y > 0) {
        board[id - columns] = images[this.handleFindMine(x, y - 1)];
      }
      if (this.handleFindMine(x - 1, y - 1) === 0 && x > 0 && y > 0)
        this.handleReveal(x - 1, y - 1);
      else if (this.handleFindMine(x - 1, y - 1) !== 0 && x > 0 && y > 0) {
        board[id - columns - 1] = images[this.handleFindMine(x - 1, y - 1)];
      }
      if (
        this.handleFindMine(x + 1, y - 1) === 0 &&
        x < columns - 1 &&
        y > 0
      )
        this.handleReveal(x + 1, y - 1);
      else if (
        this.handleFindMine(x + 1, y - 1) !== 0 &&
        x < columns - 1 &&
        y > 0
      ) {
        board[id - columns + 1] = images[this.handleFindMine(x + 1, y - 1)];
      }
      if (this.handleFindMine(x - 1, y + 1) === 0 && x > 0 && y < columns - 1)
        this.handleReveal(x - 1, y + 1);
      else if (
        this.handleFindMine(x - 1, y + 1) !== 0 &&
        x > 0 &&
        y < columns - 1
      ) {
        board[id + columns - 1] = images[this.handleFindMine(x - 1, y + 1)];
      }
      if (
        this.handleFindMine(x + 1, y + 1) === 0 &&
        x < columns - 1 &&
        y < columns - 1
      )
        this.handleReveal(x + 1, y + 1);
      else if (
        this.handleFindMine(x + 1, y + 1) !== 0 &&
        x < columns - 1 &&
        y < columns - 1
      ) {
        board[id + columns + 1] = images[this.handleFindMine(x + 1, y + 1)];
      }
      this.setState({ board });
    }
  };
  handlePressEmptyBox = id => {
    const x = id % this.props.navigation.state.params.rows;
    const y = Math.floor(id / this.props.navigation.state.params.rows);
    let board = this.state.board;
    if (this.state.mines.includes(id)) {
      board[id] = require("../../assets/images/mine.png");
      this.setState({ board });
    } else {
      const count = this.handleFindMine(x, y);
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
      if (count === 0) this.handleReveal(x, y);
      else {
        board[id] = images[count];
      }
      this.setState({ board });
    }
  };
  handleLongPressEmptyBox = id => {
    if (this.checkImage(id)) {
      let board = this.state.board;
      board[id] = require("../../assets/images/flag.png");
      this.setState({ board });
    }
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
