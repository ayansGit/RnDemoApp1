import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Color from '../utils/Color';
import normalize from '../utils/Normalize';
import ImagePath from '../utils/ImagePath';

export default function Button(props) {
  const {
    onPress,
    marginTop,
    marginBottom,
    disabled,
    backgroundColor,
    icon
  } = props;

  const handleOnPress = () => {
    if (onPress) onPress();
  };

  const styles = StyleSheet.create({
    container: {
      height: normalize(45),
      width: normalize(45),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: marginTop,
      marginBottom: marginBottom,
      backgroundColor: backgroundColor,
      borderRadius: normalize(45/2),
      elevation: 8,
      position: "absolute",
      bottom: normalize(20),
      right: normalize(20)
    },
    icon: {
      height: '40%',
      width: '40%',
      tintColor: Color.white
    },

  });

  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.container}
      onPress={handleOnPress}>
      <Image style={styles.icon}
        resizeMode="contain"
        source={icon} />
    </TouchableOpacity>
  );
}

Button.propTypes = {
  icon: PropTypes.any,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string
};

Button.defaultProps = {
  icon: ImagePath.add,
  marginTop: 0,
  marginBottom: 0,
  disabled: false,
  active: true,
  onPress: null,
  backgroundColor: Color.themePrimary
};
