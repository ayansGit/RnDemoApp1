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

export default function Button(props) {
  const {
    children,
    height,
    width,
    fontSize,
    text,
    textVeritcalAlign,
    loading,
    onPress,
    marginTop,
    marginBottom,
    textTransform,
    disabled,
    active,
  } = props;

  const handleOnPress = () => {
    if (onPress) onPress();
  };

  const styles = StyleSheet.create({
    container: {
      height: height,
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: marginTop,
      marginBottom: marginBottom,
      backgroundColor: Color.themePrimary,
      borderRadius: normalize(height/2),
      elevation: 8
    },
    background: {
      height: '100%',
      width: '100%',
      tintColor: !active? Color.lightGrey: null
    },
    childContainer: {
      position: 'relative',
    },
    text: {
      fontSize: fontSize,
      fontWeight: "bold",
      color: Color.white,
      textAlign: 'center',

    },
  });

  return (
    <TouchableOpacity
      disabled={loading || disabled}
      style={styles.container}
      onPress={handleOnPress}>
      <View style={styles.childContainer}>
        {loading ? (
          <ActivityIndicator size={'small'} color={Color.white} />
        ) : children ? (
          children
        ) : (
          <Text style={styles.text}>{text}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  height: PropTypes.any,
  width: PropTypes.any,
  fontSize: PropTypes.number,
  text: PropTypes.string,
  loading: PropTypes.bool,
  textVeritcalAlign: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  textTransform: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  height: normalize(45),
  width: '100%',
  fontSize: normalize(12),
  text: 'Button',
  loading: false,
  textVeritcalAlign: normalize(-8),
  marginTop: 0,
  marginBottom: 0,
  textTransform: 'uppercase',
  disabled: false,
  active: true,
  onPress: null,
};
