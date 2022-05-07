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
import Font from '../utils/Font';
import ImagePath from '../utils/ImagePath';

export default function Header(props) {
  const {
    height,
    title,
    backgroundColor,
    darkContent,
    onMenuPress,
    onBackPress,
    onAddPress,
  } = props;

  const handleOnBackPress = () => {
    if (onBackPress) onBackPress();
  };

  const handleOnMenuPress = () => {
    if (onMenuPress) onMenuPress();
  };

  const handleOnAddPress = () => {
    if (onAddPress) onAddPress();
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      height: height,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: backgroundColor,
      elevation: 8,
      shadowColor: Color.black,
      shadowOpacity: 0.5,
      shadowOffset: {height: 8, width:0}
    },

    title: {
      fontSize: normalize(14),
      fontFamily: Font.medium,
      color: darkContent?  Color.darkGrey : Color.white,
      textAlign: 'center',
      alignSelf: 'center',
      position: 'absolute',
    },
    controllerContainer: {
      width: '100%',
      height: '100%',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.controllerContainer}>
        {onMenuPress && (
          <TouchableOpacity
            onPress={handleOnMenuPress}
            style={{ height: '100%', aspectRatio: 1, padding: normalize(10) }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                tintColor: darkContent ? Color.darkGrey : Color.white,
              }}
              source={ImagePath.menu}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

        {onBackPress && (
          <TouchableOpacity
            onPress={handleOnBackPress}
            style={{ height: '100%', aspectRatio: 1, padding: normalize(17) }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                tintColor: darkContent ? Color.darkGrey : Color.white,
              }}
              source={ImagePath.back}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

        {onAddPress &&
          <TouchableOpacity
            onPress={handleOnAddPress}
            style={{ height: '100%', aspectRatio: 1, padding: normalize(17), position: "absolute", right:0 }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                tintColor: darkContent ? Color.darkGrey : Color.white,
              }}
              source={ImagePath.addPage}
              resizeMode="contain"
            />
          </TouchableOpacity>}
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

Header.propTypes = {
  darkContent: PropTypes.bool,
  height: PropTypes.any,
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  onMenuPress: PropTypes.func,
  onBackPress: PropTypes.func,
  onAddPress: PropTypes.func,
};

Header.defaultProps = {
  darkContent: false,
  height: normalize(50),
  title: 'Button',
  backgroundColor: Color.transparent,
  onMenuPress: null,
  onBackPress: null,
  onAddPress: null,
};
