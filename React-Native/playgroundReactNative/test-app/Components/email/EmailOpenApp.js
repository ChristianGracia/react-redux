import React, { Component } from "react";
import { View, Text, Alert, Button } from "react-native";
import Mailer from "react-native-mail";
import { Linking } from "react-native";
import { sendEmailViaEmailApp } from "./Components/email/EmailUtil";

export default class Email extends Component {
  openEmail = () => {
    // opens email in ios
    alert("hi");
    Linking.canOpenURL("message:")
      .then(supported => {
        if (!supported) {
          console.log("Cant handle url");
        } else {
          return Linking.openURL("message:");
        }
      })
      .catch(err => {
        console.error("An error occurred", err);
      });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button onPress={this.openEmail} title="email" />
      </View>
    );
  }
}
