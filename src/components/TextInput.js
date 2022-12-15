import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { Icon } from "native-base";
import uuid from "react-native-uuid";
import { theme } from "./core/theme";

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordIcon: "eye-off",
      hidePassword: props.passwordSecure,
    };
  }

  _changeIcon() {
    this.setState((prevState) => ({
      passwordIcon: prevState.passwordIcon === "eye" ? "eye-off" : "eye",
      hidePassword: !prevState.hidePassword,
    }));
  }

  render() {
    const { errorText, passwordSecure, ...props } = this.props;
    let errors =
      errorText && typeof errorText === "object" && errorText.length > 0
        ? errorText.map((err) => {
            return `${err}
`;
          })
        : errorText;
    const id = props.testID ? props.testID : uuid.v4();
    return (
      <View style={styles.container}>
        <View style={styles.inputSection}>
          <Input
            style={styles.input}
            selectionColor={theme.colors.primary}
            theme={theme}
            underlineColor="transparent"
            mode="outlined"
            secureTextEntry={this.state.hidePassword}
            {...props}
          />

          {this.props.passwordSecure ? (
            <Icon
              testID={`icon--${id}`}
              accessibilityLabel={`icon--${id}`}
              style={styles.passwordIcon}
              name={this.state.passwordIcon}
              onPress={() => this._changeIcon()}
            />
          ) : null}
        </View>
        {errors ? (
          <Text testID={`error--${id}`} style={styles.error}>
            {errors}
          </Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 12,
  },
  input: {
    // backgroundColor: theme.colors.surface,
    backgroundColor: "#dabf66",
  },
  inputSection: {
    justifyContent: "center",
  },
  passwordIcon: {
    zIndex: 999,
    position: "absolute",
    right: 10,
    top: 30,
    bottom: 10,
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default TextInput;
