import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../config/colors";

export class Feature extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text>{this.props.description}</Text>
        </View>
        <View style={styles.circle}>
          <FontAwesome name={this.props.icon} size={50} color="white" />
        </View>
      </View>
    );
  }
}

function FeatureScreen(props) {
  return (
    <SafeAreaView>
      <Feature
        icon="lock"
        title="Safe and Secure"
        description="All audio recordings are securely stored outside of your phone. All features are hidden behind the calculator app to ensure private access"
      />
      <Feature
        icon="phone"
        title="Emergency Option"
        description="You can set up an “Emergency Contact” option under settings. This contact can be notified based on a specific codeword that is set up."
      />
      <Feature
        icon="bell-slash-o"
        title="No Notifications"
        description="haiven will not send any notifications to your phone and will not download any automatic updates."
      />
      <Feature
        icon="exclamation"
        title="Quick Exit"
        description="The Quick Exit button can be found on every page. Pressing this will automatically close the app and remove the app from “Recently Used Apps”"
      />
      <View style={styles.nextButton}>
        <Button title="Next" color={colors.primary} />
      </View>
    </SafeAreaView>
  );
}

export default FeatureScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    margin: 20,
    flex: 1,
  },
  text: {
    flex: 1,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    padding: 20,
    paddingLeft: 50,
    width: "80%",
    alignSelf: "flex-end",
  },
  icon: {},
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    position: "absolute",
    alignSelf: "flex-start",
  },
  title: {
    color: colors.primary,
    fontWeight: "bold",
  },
  nextButton: {
    alignSelf: "flex-end",
    paddingRight: 20,
    borderRadius: 10,
  },
});
