import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export class ThemeContextProvider extends Component {
  state = {
    isDarkTheme: true,
    darkTheme: {
      text: "#222",
      background: "#d8ddf1",
    },
    lightTheme: {
      text: "#5c5c5c",
      background: "#fff",
    },
  };
  changeTheme = () => {
    this.setState({ isDarkTheme: !this.state.isDarkTheme });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, changeTheme: this.changeTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
