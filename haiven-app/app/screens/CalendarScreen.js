import React from "react";
import { View, StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import colors from "../config/colors";
import { Footer } from "../components/Footer";
import { FontAwesome5 } from "@expo/vector-icons";

export class Insight extends React.Component {
  render() {
    return (
      <View style={styles.insight}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: colors.primary, fontWeight: "bold" }}>
            {this.props.insight}
          </Text>
          <FontAwesome5 name={this.props.icon} size={24} color="black" />
        </View>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

function CalendarScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Calendar
            onDayPress={(day) => {
              var dateSelected = new Date(
                day["year"],
                day["month"] - 1,
                day["day"]
              );
              navigation.navigate("Journal", {
                date: dateSelected.toDateString(),
              });
            }}
            theme={{
              textSectionTitleColor: colors.primary,
              monthTextColor: colors.primary,
              indicatorColor: "blue",
              selectedDotColor: colors.secondary,
              selectedDayTextColor: colors.secondary,
              todayTextColor: colors.primary,
              arrowColor: colors.primary,
              textMonthFontWeight: "bold",
              textMonthFontSize: 30,
            }}
            // Collection of dates that have to be colored in a special way. Default = {}
            markedDates={{
              "2020-07-19": {
                disabled: true,
                startingDay: true,
                color: colors.happy,
                endingDay: true,
              },
              "2020-07-20": {
                disabled: true,
                startingDay: true,
                color: colors.happy,
                endingDay: true,
              },
              "2020-07-21": {
                disabled: true,
                startingDay: true,
                color: colors.happy,
                endingDay: true,
              },
              "2020-07-22": {
                disabled: true,
                startingDay: true,
                color: colors.sad,
                endingDay: true,
              },
              "2020-07-23": {
                disabled: true,
                startingDay: true,
                color: colors.angry,
                endingDay: true,
              },
              "2020-07-24": {
                disabled: true,
                startingDay: true,
                color: colors.angry,
                endingDay: true,
              },
              "2020-07-25": {
                disabled: true,
                startingDay: true,
                color: colors.sad,
                endingDay: true,
              },
              "2020-07-26": {
                disabled: true,
                startingDay: true,
                color: colors.happy,
                endingDay: true,
              },
              "2020-07-27": {
                disabled: true,
                startingDay: true,
                color: colors.sad,
                endingDay: true,
              },
            }}
            // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
            markingType={"period"}
          />
        </View>
        <View style={{ padding: 20 }}>
          <Text style={styles.subheading}>Insights</Text>
          <Insight
            insight="Happiness"
            icon="smile-beam"
            text="This month you were on average happier than last month."
          />
          <Insight
            insight="Anger"
            icon="sad-tear"
            text="We've noticd that there is usally anger detected Saturday nights."
          />
        </View>
      </ScrollView>
      <View>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.background,
  },
  insight: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  subheading: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default CalendarScreen;
