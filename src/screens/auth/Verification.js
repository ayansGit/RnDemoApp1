import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    SafeAreaView,
    KeyboardAvoidingView,
    StatusBar
} from 'react-native';
import Button from '../../components/Button';
import Color from '../../utils/Color';
import Font from '../../utils/Font';
import normalize from '../../utils/Normalize';
import {postRequest} from "../../utils/apiRequest"
import {setToken, setUserId, setProfileCompleted} from "../../utils/storage"


const Verification = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false)
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');
    const [fourth, setFourth] = useState('');
    const first1 = useRef(null);
    const first2 = useRef(null);
    const first3 = useRef(null);
    const first4 = useRef(null);


    useEffect(() => {
        first1.current.focus();
    }, []);

    const submit = async() => {
        // console.log('submitted');
        const OTP = [first, second, third, fourth].join('');
        
        if(OTP.length<4){
            toast.show("Enter Valid OTP", "failure")
            return;
        }
        setLoading(true)
        try{
            const request = {
                otp: OTP,
                user_id: route.params.loginId,
            };
            const response = await postRequest("verify", request);
            if(response.success){
                setToken(response.token);
                setUserId(response.data.id);
                setProfileCompleted(response.data.profile_completed);
                navigation.replace("SignedInNavigator");
                toast.show(response.message.join("\n"), "success");
            }else{
                toast.show(response.message.join("\n"), "failure");
            }
            
        }catch(error){
            toast.show(error.message, "failure")
        }
        setLoading(false)
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden={false} backgroundColor={Color.themeSecondary} barStyle="light-content" />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={styles.mainContainer}>
                    <Text style={{ ...styles.normatText, ...styles.headerText }}>
                        Verification
                    </Text>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            keyboardType="number-pad"
                            style={styles.textInput}
                            selectionColor={Color.themePrimary}
                            ref={first1}
                            name="first1"
                            onChangeText={e => {
                                setFirst(e);
                                if (e.length > 0) first2.current.focus();
                            }}
                            maxLength={1}
                        />
                        <TextInput
                            keyboardType="number-pad"
                            style={styles.textInput}
                            selectionColor={Color.themePrimary}
                            ref={first2}
                            name="first2"
                            onChangeText={e => {
                                setSecond(e);
                                if (e.length > 0) first3.current.focus();
                                else first1.current.focus();
                            }}
                            maxLength={1}
                        />
                        <TextInput
                            keyboardType="number-pad"
                            style={styles.textInput}
                            selectionColor={Color.themePrimary}
                            ref={first3}
                            name="first3"
                            onChangeText={e => {
                                setThird(e);
                                if (e.length > 0) first4.current.focus();
                                else first2.current.focus();
                            }}
                            maxLength={1}
                        />
                        <TextInput
                            keyboardType="number-pad"
                            style={styles.textInput}
                            selectionColor={Color.themePrimary}
                            ref={first4}
                            name="first4"
                            onChangeText={e => {
                                setFourth(e);
                                if (e.length == 0) first3.current.focus();
                            }}
                            maxLength={1}
                        />
                    </View>
                    <Button
                        loading={loading}
                        text="SUBMIT"
                        onPress={() => submit()}
                    />
                    <Text style={{ ...styles.normatText, paddingTop: normalize(20) }}>
                        If you didn't received OTP
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.normatText}>{`please click `}</Text>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    ...styles.normatText,
                                    color: Color.themePrimary,
                                    fontWeight:"bold",
                                }}>
                                Resend
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: Color.white,
        alignItems: 'center',
        padding: 20,
    },
    headerText: {
        fontWeight: "bold",
        textTransform: 'uppercase',
        fontSize: normalize(12),
        marginBottom: normalize(10),
        marginTop: normalize(20),
    },
    normatText: {
        textAlign: 'center',
        color: Color.textColorDark,
    },
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 'auto',
        marginTop: normalize(20),
        marginBottom: normalize(20),
        // backgroundColor: 'gray',
    },
    textInput: {
        margin: normalize(10),
        // display: 'flex',
        borderColor: Color.darkGrey,
        borderWidth: normalize(1),
        padding: normalize(5),
        height: normalize(50),
        width: normalize(42),
        borderRadius: normalize(7),
        textAlign: 'center',
        color: Color.textColorDark,
        fontSize: normalize(16),
    },
});

export default Verification;