import React from "react";
import { SafeAreaView, View, StyleSheet, Text, Image } from "react-native";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import { QuickExit } from "../components/QuickExit";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function Section({ screenName, icon, description }) {
  const navigation = useNavigation();
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
        <Ionicons name={icon} size={50} color={colors.tertiary} />
        <Text style={styles.text}>{description}</Text>
      </TouchableOpacity>
    </View>
  );
}

function MainScreen({ navigation, props }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <View style={styles.layout}>
        <Section
          icon="md-calendar"
          description="Calendar"
          screenName="Calendar"
        />

        <Section icon="md-book" description="Journal" />

        <Section icon="ios-chatboxes" description="Check-In" />

        <Section icon="md-help-circle-outline" description="Support" />
      </View>
      <View>
        <QuickExit />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    height: "40%",
    width: "100%",
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  layout: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    margin: 20,
    width: "40%",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 15,
  },
});

export default MainScreen;
