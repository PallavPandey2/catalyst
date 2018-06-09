import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
} from "react-native";
import { ViewModels } from "../Models/ViewModels";

class AddQuestion extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <View>
          <Text>Add New Question</Text>
      </View>
    );
  }
}

export default AddQuestion;

const styles = StyleSheet.create({
});
