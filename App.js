import React from "react";
import Home from "./Screens/Home/Home";
import ScoreBoard from "./Screens/ScoreBoard/ScoreBoard";
import GameBoard from './Screens/GameBoard/GameBoard';
import { createStackNavigator, createAppContainer } from "react-navigation";
// import { StyleSheet, Text, View } from "react-native";
// import Navbar from "./Components/Navbar";

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  ScoreBoard: {
    screen: ScoreBoard
  },
  GameBoard: {
    screen: GameBoard
  }
});

const App = createAppContainer(RootStack);

// class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Navbar  />
//         <GameBoard />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center"
//     // justifyContent: "center"
//   }
// });

export default App;
