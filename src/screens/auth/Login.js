import { View, Text, SafeAreaView, StatusBar, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Color from '../../utils/Color'
import ImagePath from '../../utils/ImagePath'
import normalize from '../../utils/Normalize'
import Button from '../../components/Button'
import {postRequest} from "../../utils/apiRequest"

export default function Login({navigation}) {

    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState(false)

    const validate = () =>{
        if(phone.length == 0) return [false, "Enter mobile number"];
        if(phone.length < 10) return [false, "Enter valid mobile number"];

        return [true, "success"];
    }

    const handleOnLogin = async() =>{
        
        const [isValid, message] = validate();

        if(!isValid){
            toast.show(message, "failure")
            return;
        }
        setLoading(true)
        try{
            const request = { phone: phone};
            const response = await postRequest("register", request);
            if(response.success){
                navigation.navigate("Verification", {loginId: response.data})
                // toast.show(response.message.join("\n"), "success")
            }else{
                toast.show(response.message.join("\n"), "failure")
            }
            
        }catch(error){
            toast.show(error.message, "failure")
        }
        setLoading(false)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden={false} backgroundColor={Color.themeSecondary} barStyle="light-content" />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: Color.white, }}>
                    <Image
                        style={{ width: "60%", height: "60%", alignSelf: "center" }}
                        resizeMode="contain"
                        source={ImagePath.logo} />

                    <View style={{ width: "100%", paddingLeft: "5%", paddingRight: "5%" }}>

                        <Text style={{ fontSize: normalize(14), color: Color.textColorDark, marginBottom: normalize(10), marginLeft: normalize(10) }}>Mobile Number</Text>

                        <View style={{ width: "100%", backgroundColor: Color.white, borderRadius: normalize(40), borderWidth: normalize(1), borderColor: Color.darkGrey, }}>

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

                        <Button loading={loading} text='LOGIN' marginTop={20} onPress={handleOnLogin}/>
                    </View>

                   



                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}