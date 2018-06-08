import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { View, StyleSheet, Text } from "react-native";
import Counter from "../components/Counter";
import * as CounterActions from "../redux/counter/actions";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux";

interface IHomeProps {}

interface IHomeDispatchProps {}

interface IHomeState {
  UserName: string;
}

class Home extends Component<IHomeProps & IHomeDispatchProps, IHomeState> {
  constructor(props) {
    super(props);
    this.state = {
      UserName: ""
    };
  }

  componentDidMount() {
    fetch("https://catalystwebap.azurewebsites.net/api/demo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/text"
      }
    })
      .then(response => response.json())
      .then(reponseJson => {
        debugger;
        this.setState({
          UserName: reponseJson
        });
      })
      .catch(error => {});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.WelcomeText}>Hello {this.state.UserName}!</Text>
      </View>
    );
  }
}

export default connect<IHomeProps, IHomeDispatchProps>(
  (state: AppState) => ({
    count: state.counter.count,
    sometthing: 0
  }),
  (dispatch: Dispatch) => ({})
)(Home);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  WelcomeText: { fontSize: 24, fontWeight: "bold" }
});
