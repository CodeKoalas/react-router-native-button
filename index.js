import React from "react";
import PropTypes from "prop-types";
import {
  ColorPropType,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from "react-native";
import { Link } from "react-router-native";

let defaultBlue = "#2196F3";
if (Platform.OS === "ios") {
  defaultBlue = "#0C42FD";
}

const styles = StyleSheet.create({
  button: Platform.select({
    ios: {},
    android: {
      elevation: 4,
      backgroundColor: defaultBlue,
      borderRadius: 2
    }
  }),
  text: Platform.select({
    ios: {
      color: defaultBlue,
      textAlign: "center",
      padding: 8,
      fontSize: 18
    },
    android: {
      textAlign: "center",
      color: "white",
      padding: 8,
      fontWeight: "500"
    }
  }),
  buttonDisabled: Platform.select({
    ios: {},
    android: {
      elevation: 0,
      backgroundColor: "#dfdfdf"
    }
  }),
  textDisabled: Platform.select({
    ios: {
      color: "#cdcdcd"
    },
    android: {
      color: "#a1a1a1"
    }
  })
});

function RouterButton({
  accessibilityLabel,
  color,
  title,
  disabled,
  testID,
  replace,
  to
}) {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  const Touchable =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  if (color && Platform.OS === "ios") {
    textStyles.push({
      color
    });
  } else if (color) {
    buttonStyles.push({
      backgroundColor: color
    });
  }
  if (disabled) {
    buttonStyles.push(styles.buttonDisabled);
    textStyles.push(styles.textDisabled);
  }
  const formattedTitle =
    Platform.OS === "android" ? title.toUpperCase() : title;
  const accessibilityTraits = ["button"];
  if (disabled) {
    accessibilityTraits.push("disabled");
  }

  function TouchableWithProps({ children, onPress }) {
    return (
      <Touchable
        accessibilityComponentType="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityTraits={accessibilityTraits}
        testID={testID}
        disabled={disabled}
        onPress={onPress}
      >
        {children}
      </Touchable>
    );
  }

  TouchableWithProps.propTypes = {
    onPress: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
  };

  return (
    <Link to={to} replace={replace} component={TouchableWithProps}>
      <View style={buttonStyles}>
        <Text style={textStyles}>{formattedTitle}</Text>
      </View>
    </Link>
  );
}

RouterButton.propTypes = {
  /**
     * Text to display inside the button
     */
  title: PropTypes.string.isRequired,
  /**
     * Text to display for blindness accessibility features
     */
  accessibilityLabel: PropTypes.string,
  /**
     * Color of the text (iOS), or background color of the button (Android)
     */
  color: ColorPropType,
  /**
     * If true, disable all interactions for this component.
     */
  disabled: PropTypes.bool,
  /**
     * If true, replace the current point in history rather than push
     */
  replace: PropTypes.bool,
  /**
     * Handler to be called when the user taps the button
     */
  testID: PropTypes.string,
  /**
     * Used to determine which path to link to
     */
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

RouterButton.defaultProps = {
  replace: false,
  disabled: false,
  testID: null,
  color: null,
  accessibilityLabel: null
};

export default RouterButton;
