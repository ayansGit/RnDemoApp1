import React, {useState, useImperativeHandle, forwardRef} from 'react';
import {ActivityIndicator, SafeAreaView, Dimensions, View} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../utils/Color';

function Loader(props, ref) {
  const [visible, setVisile] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisile(true);
    },
    hide: () => {
      setVisile(false);
    },
  }));

  return visible ? (
    <SafeAreaView
      style={{
        display: 'flex',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 10,
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={"large"} color={Colors.themePrimary}/>
      </View>
    </SafeAreaView>
  ) : null;
}

export default forwardRef(Loader);
