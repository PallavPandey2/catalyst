import React, { Component } from "react";
import { bindActionCreators } from "redux";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  Image
} from "react-native";
import Counter from "../components/Counter";
import * as CounterActions from "../redux/counter/actions";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux";

interface IQuestionProps {}

interface IQuestionDispatchProps {}

interface IQuestionState {}

class Question extends Component<IQuestionProps & IQuestionDispatchProps,IQuestionState> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.question}>
            <Text>
              This is Question for adhuri si baat baaki h....?????!!!!!!!!1
            </Text>
            <View>
              <span>Date</span>
            </View>
          </View>
          <FlatList
            style={{ marginTop: 20 }}
            data={[
              {key:"Devinjsdflj flsjdfljsdl fsdfjlsjdfljsld fasdf jlsdfj lsjdfl jsfldjsldfjlsdjfl l jlsjdfl jsdl fjsldfj l "},
              {key:"Jackson Devinjsdflj flsjdfljsdl fsdfjlsjdfljsld fasdf jlsdfj lsjdfl jsfldjsldfjlsdjfl l jlsjdfl jsdl fjsldfj l "},
              {key: "James Devinjsdflj flsjdfljsdl fsdfjlsjdfljsld fasdf jlsdfj lsjdfl jsfldjsldfjlsdjfl l jlsjdfl jsdl fjsldfj l "},
              {key:"Joel Devinjsdflj flsjdfljsdl fsdfjlsjdfljsld fasdf jlsdfj lsjdfl jsfldjsldfjlsdjfl l jlsjdfl jsdl fjsldfj l "},
              {key:"JohnDevinjsdflj flsjdfljsdl fsdfjlsjdfljsld fasdf jlsdfj lsjdfl jsfldjsldfjlsdjfl l jlsjdfl jsdl fjsldfj l  "},
              {key:"Jillian Devinjsdflj flsjdfljsdl fsdfjlsjdfljsld fasdf jlsdfj lsjdfl jsfldjsldfjlsdjfl l jlsjdfl jsdl fjsldfj l "},
              {key: "Jimmy Devinjsdflj flsjdfljsdl fsdfjlsjdfljsld fasdf jlsdfj lsjdfl jsfldjsldfjlsdjfl l jlsjdfl jsdl fjsldfj l "},
              {key:"Julie Devinjsdflj flsjdfljsdl fsdfjlsjdfljsld fasdf jlsdfj lsjdfl jsfldjsldfjlsdjfl l jlsjdfl jsdl fjsldfj l "},
              {key:"Jackson Devinjsdflj flsjdfljsdl fsdfjlsjdfljsld fasdf jlsdfj lsjdfl jsfldjsldfjlsdjfl l jlsjdfl jsdl fjsldfj l "},
              {key:"James Devinjsdflj flsjdfljsdl fsdfjlsjdfljsld fasdf jlsdfj lsjdfl jsfldjsldfjlsdjfl l jlsjdfl jsdl fjsldfj l "},
              {key:"Joel Devinjsdflj flsjdfljsdl fsdfjlsjdfljsld fasdf jlsdfj lsjdfl jsfldjsldfjlsdjfl l jlsjdfl jsdl fjsldfj l "},
              {key:"JohnDevinjsdflj flsjdfljsdl fsdfjlsjdfljsld fasdf jlsdfj lsjdfl jsfldjsldfjlsdjfl l jlsjdfl jsdl fjsldfj l  "},
              {key:"Jillian Devinjsdflj flsjdfljsdl fsdfjlsjdfljsld fasdf jlsdfj lsjdfl jsfldjsldfjlsdjfl l jlsjdfl jsdl fjsldfj l "},
              {key:"Jimmy Devinjsdflj flsjdfljsdl fsdfjlsjdfljsld fasdf jlsdfj lsjdfl jsfldjsldfjlsdjfl l jlsjdfl jsdl fjsldfj l "},
              {key:"Julie Devinjsdflj flsjdfljsdl fsdfjlsjdfljsld fasdf jlsdfj lsjdfl jsfldjsldfjlsdjfl l jlsjdfl jsdl fjsldfj l "}
            ]}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.item}>{item.key}</Text>
                <View style={{}}>
                  <Image
                    source={{
                      uri:
                        "https://cdn3.iconfinder.com/data/icons/black-easy/512/538774-like_512x512.png"
                    }}
                    style={{
                      width: 20,
                      height: 20,
                      justifyContent: "flex-end"
                    }}
                  />
                  <Text>Date</Text>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

export default connect<IQuestionProps, IQuestionDispatchProps>(
  (state: AppState) => ({
    count: state.counter.count,
    sometthing: 0
  }),
  (dispatch: Dispatch) => ({})
)(Question);

const styles = StyleSheet.create({
  question: {},
  container: {},
  answersList: { marginTop: 80 },
  item: { backgroundColor: "gray", paddingLeft: 5, paddingRight: 5 }
});
