import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {View, Text, Platform, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import normalise from '../utils/Normalize';
import Colors from '../utils/Color';

function Toast(props, ref) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('#4CB050');
  const [position, setPosition] = useState('bottom');
  const [type, setType] = useState('');

  useImperativeHandle(ref, () => ({
    show(message, type, position="bottom") {
      setVisible(true);
      setMessage(message);
      setType(type);
      setColor(type === 'success' ? '#4CB050' : '#FF3933');
      if (position !== '') {
        setPosition(position);
      }

      let timeout = message.length > 50 ? 3500 : 2500;

      setTimeout(() => {
        setVisible(false);
      }, timeout);
    },
  }));

  return (
    <Modal
      animationIn={position === 'top' ? 'slideInDown' : 'slideInUp'}
      animationOut={position === 'top' ? 'fadeOut' : 'fadeOut'}
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating={true}
      isVisible={visible}
      backdropOpacity={0}
      style={{width: '100%', alignSelf: 'center', margin: 0}}
      animationInTiming={500}
      animationOutTiming={500}>
      {position === 'top' ? (
        <View
          style={{
            position: 'absolute',
            top:
              Platform.OS === 'ios'
                ? Dimensions.get('window').height > 736
                  ? 50
                  : 30
                : 20,
            width: '90%',
            alignSelf: 'center',
            borderRadius: normalise(5),
            backgroundColor: Colors.white,
            justifyContent: 'center',
            alignItems: 'flex-start',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%',
            }}>
            <View
              style={{
                height: '100%',
                width: normalise(5),
                borderTopLeftRadius: normalise(5),
                borderBottomLeftRadius: normalise(5),
                backgroundColor: color,
              }}
            />

            <View
              style={{
                paddingVertical: normalise(12),
                paddingHorizontal: normalise(12),
                width: '85%',
              }}>
              <Text
                style={{
                  fontSize: normalise(12),
                  color: color,
                }}>
                {type === 'success' ? 'Success' : 'Error'}
              </Text>

              <Text
                style={{
                  fontSize: normalise(12),
                  color: Colors.textGrey,
                }} numberOfLines={4}>
                {message}
              </Text>
            </View>

            <View
              style={{
                height: normalise(25),
                width: normalise(25),
                borderRadius: normalise(15),
                borderColor: type === 'success' ? 'green' : 'red',
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: type === 'success' ? 'green' : 'red',
                  fontSize: normalise(12),
                  fontWeight: 'bold',
                }}>
                {type === 'success' ? '✓' : '!'}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View
          style={{
            position: 'absolute',
            bottom:50,
            width: '90%',
            alignSelf: 'center',
            borderRadius: normalise(5),
            backgroundColor: Colors.white,
            justifyContent: 'center',
            alignItems: 'flex-start',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%',
            }}>
            <View
              style={{
                height: '100%',
                width: normalise(5),
                borderTopLeftRadius: normalise(5),
                borderBottomLeftRadius: normalise(5),
                backgroundColor: color,
              }}
            />

            <View
              style={{
                paddingVertical: normalise(12),
                paddingHorizontal: normalise(12),
                width: '80%',
              }}>
              <Text
                style={{
                  fontSize: normalise(12),
                  color: color,
                }}>
                {type === 'success' ? 'Success' : 'Error'}
              </Text>

              <Text
                style={{
                  fontSize: normalise(12),
                  color: Colors.textGrey,
                }} numberOfLines={4}>
                {message}
              </Text>
            </View>

            <View
              style={{
                height: normalise(25),
                width: normalise(25),
                borderRadius: normalise(15),
                borderColor: type === 'success' ? 'green' : 'red',
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: type === 'success' ? 'green' : 'red',
                  fontSize: normalise(12),
                  fontWeight: 'bold',
                }}>
                {type === 'success' ? '✓' : '!'}
              </Text>
            </View>
          </View>
        </View>
      )}
    </Modal>
  );
}

export default forwardRef(Toast);
