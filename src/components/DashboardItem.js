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

export default function DashboardItem(props) {
  const {
    icon,
    onItemPress,
    title,
    height,
    width,
  } = props;


  const handleItemPress = () => {
    if (onItemPress) onItemPress();
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      width: width,
      height: height,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: Color.white,
      elevation: 8,
      shadowColor: Color.black,
      shadowOpacity: 0.5,
      shadowOffset: { height: 8, width: 0 },
      borderRadius: height/10
    },

    title: {
      fontSize: normalize(10),
      fontWeight: "bold",
      color: Color.darkGrey,
      textAlign: 'center',
      alignSelf: 'center',
      marginBottom: normalize(5)
    },
    icon: {
      width: '50%',
      height: '50%',
      marginTop: normalize(5)
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={handleItemPress}>
      <Image
        style={styles.icon}
        source={icon ? icon : ImagePath.icon}
        resizeMode="contain" />

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

DashboardItem.propTypes = {
  icon: PropTypes.any,
  height: PropTypes.any,
  width: PropTypes.any,
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  onItemPress: PropTypes.func,
};

DashboardItem.defaultProps = {
  icon: null,
  height: normalize(70),
  width: normalize(55),
  title: 'Button',
  backgroundColor: Color.white,
  onItemPress: null,
};
