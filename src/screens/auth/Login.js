import { View, Text, SafeAreaView, StatusBar, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Color from '../../utils/Color'
import ImagePath from '../../utils/ImagePath'
import normalize from '../../utils/Normalize'
import Button from '../../components/Button'

export default function Login({navigation}) {

    const [phone, setPhone] = useState("")

    const handleOnLogin = () =>{
        console.log("LOGIN")
        navigation.navigate("Verification")
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden={false} backgroundColor={Color.themeSecondary} barStyle="light-content" />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: Color.themeSecondary, }}>
                    <Image
                        style={{ width: "60%", height: "60%", alignSelf: "center" }}
                        resizeMode="contain"
                        source={ImagePath.logo} />

                    <View style={{ width: "100%", paddingLeft: "5%", paddingRight: "5%" }}>

                        <Text style={{ fontSize: normalize(14), color: Color.white, marginBottom: normalize(10), marginLeft: normalize(10) }}>Mobile Number</Text>

                        <View style={{ width: "100%", backgroundColor: Color.white, borderRadius: normalize(40), borderWidth: normalize(3), borderColor: Color.lightGrey, }}>

                            <TextInput
                                focusable={true}
                                autoFocus={true}
                                value={phone}
                                maxLength={10}
                                keyboardType="number-pad"
                                style={{ width: "100%", paddingLeft: normalize(10), paddingRight: normalize(10), fontSize: normalize(14) }}
                                onChangeText={(text) => {
                                    setPhone(text)
                                }} />

                        </View>

                        <Button loading={false} text='LOGIN' marginTop={20} onPress={handleOnLogin}/>
                    </View>

                   



                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}