import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Platform,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  FlatList,
} from 'react-native';
import Colors from '../utils/Color';
import normalize from '../utils/Normalize';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-date-picker';

export default function DatePicter(props) {
  const [date, setDate] = useState(new Date());

  function onConfirm(date) {
    if (props.onConfirm) {
      props.onConfirm(date);
    }
  }

  function onClose() {
    if (props.onClose) {
      props.onClose();
    }
  }

  return (
    <DatePicker
      mode={'date'}
      androidVariant={'iosClone'}
      title={props.title}
      modal
      open={props.visible}
      // minimumDate={props.minimumDate}
      date={date}
      onConfirm={date => {
        // console.log(date);
        let outputDate = new Date(date);
        let month = outputDate.getMonth() + 1;
        let day = outputDate.getDate();
        let year = outputDate.getFullYear();

        const monthStr = month>9 ? month.toString() : `0${month}`
        const dayStr = day>9 ?  day.toString() : `0${day}`
        
        let finalString = dayStr + '/' + monthStr + '/' + year;
        onConfirm(finalString);
        setDate(date);
      }}
      onCancel={() => {
        onClose();
      }}
    />
  );
}

DatePicter.propTypes = {
  minimumDate: PropTypes.any,
  title: PropTypes.string,
  visible: PropTypes.bool,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
};

DatePicter.defaultProps = {
  // minimumDate: new Date('2021-11-19'),
  title: 'Select a date',
  visible: false,
  onConfirm: null,
  onClose: null,
};
