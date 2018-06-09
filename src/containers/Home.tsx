import React, { Component } from "react";
import { bindActionCreators } from "redux";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Button
} from "react-native";
import * as QuestionActions from "../redux/Questions/action";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux";
import Questions from "./Questions";
import Loader from "./Loader";
import DataService from "../Services/DataService";
import { ViewModels } from "../Models/ViewModels";

interface IHomeProps {
  questions: Array<ViewModels.Question>;
  navigation? : any;
}

interface IHomeDispatchProps {
  loadQuestions: () => any;
}

interface IHomeState {
  UserName: string;
  Questions: Array<ViewModels.Question>;
  animating: boolean;
}

class Home extends Component<IHomeProps & IHomeDispatchProps, IHomeState> {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      Questions: [],
      animating: false
    };
  }

  componentDidMount() {
    this.setState({
      animating: true
    });
    DataService.GetQuestions().then(questions => {
      debugger;
      this.setState({
        Questions: questions,
        animating: false
      });
    });

    // fetch("https://catalystwebap.azurewebsites.net/api/demo", {
    //   method: "GET",
    //   headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //   .then(response => response.json())
    //   .then(reponseJson => {
    //     this.setState({
    //       UserName: reponseJson
    //     });
    //   })
    //   .catch(error => {});
  }
  static navigationOptions = {
    title: 'Catalyst',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.state.animating && <Loader animating={this.state.animating} />}
        {this.state.Questions.length > 0 && (
          <Questions questions={this.state.Questions} navigation={navigate} />
        )}
        <TouchableOpacity style={styles.addButtonContainer} onPress={() =>
            navigate('NewQuestion', { title: 'NewQuestion' })
          }>
          <Text style={{ color: "#fff", fontSize: 20 }}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect<IHomeProps, IHomeDispatchProps>(
  (state: AppState) => ({
    questions: state.questions
  }),
  (dispatch: Dispatch) => ({
    loadQuestions: () => dispatch(QuestionActions.loadQuestions())
  })
)(Home);

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  WelcomeText: { fontSize: 24, fontWeight: "bold" },
  addButtonContainer: {
    position: "absolute",
    top: 0,
    right: 15,
    borderRadius: 50,
    backgroundColor: "#4f6b51",
    padding: 15
  }
});
