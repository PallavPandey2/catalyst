import React, { Component } from "react";
import { bindActionCreators } from "redux";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Image,
  Button
} from "react-native";
import ActionButton from "react-native-action-button";
import Counter from "../components/Counter";
import * as QuestionActions from "../redux/Questions/action";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux";
import DataService from "../Services/DataService";

import { ViewModels } from "../Models/ViewModels";

interface IQuestionsProps {
  questions: Array<ViewModels.Question>;
  navigation?: any;
}

interface IQuestionsDispatchProps {}

interface IQuestionsState {
  Questions: Array<ViewModels.Question>;
  refreshing: boolean;
}

class Questions extends Component<IQuestionsProps, IQuestionsState> {
  constructor(props: IQuestionsProps) {
    super(props);
    debugger;
    this.state = {
      Questions: props.questions,
      refreshing: false
    };
  }
  onRefresh() {
    this.setState({ refreshing: true });
    DataService.GetQuestions().then(questions => {
      this.setState({
        Questions: questions,
        refreshing: false
      });
    });
  }
  addQuestion() {}
  render() {
    return (
      <View style={{ width: "100%" }}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
        >
          {this.state.Questions.map(
            (item: ViewModels.Question, index: number) => (
              <View style={{ position: "relative" }}>
                <Text style={{ position: "absolute", top: 15, left: 5 }}>
                  {item.Likes}
                </Text>
                <Image
                  source={{
                    uri:
                      "https://cdn3.iconfinder.com/data/icons/black-easy/512/538774-like_512x512.png"
                  }}
                  style={{
                    width: 20,
                    height: 20,
                    position: "absolute",
                    top: 15,
                    left: 25
                  }}
                />
                <Text style={{ position: "absolute", top: 45, left: 5 }}>
                  {item.AnswersCount}
                </Text>
                <Image
                  source={{
                    uri:
                      "http://www.retns.ie/wp-content/uploads/sites/9/2016/11/comment-edit-icon.png"
                  }}
                  style={{
                    width: 20,
                    height: 20,
                    position: "absolute",
                    top: 45,
                    left: 25
                  }}
                />
                <TouchableOpacity style={styles.item} key={item.Id} onPress={() => this.props.navigation('Question', { title: 'Question' }) }>
                  <Text style={styles.text}>{item.Title}</Text>
                </TouchableOpacity>
              </View>
            )
          )}
        </ScrollView>
      </View>
    );
  }
}

export default Questions;

const styles = StyleSheet.create({
  item: {
    borderRadius: 4,
    borderWidth: 0.5,
    backgroundColor: "#e6e7ef",
    borderColor: "#e6e7ef",
    padding: 10,
    marginLeft: 50,
    marginRight: 15,
    marginBottom: 10,
    height: 80
  },
  text: { color: "#4f603c" }
});
