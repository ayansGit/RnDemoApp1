import { View, Text, SafeAreaView, Image, StatusBar, KeyboardAvoidingView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Color from '../../utils/Color'
import ImagePath from '../../utils/ImagePath'
import normalize from '../../utils/Normalize'
import DashboardItem from '../../components/DashboardItem'
import Button from '../../components/Button'
import { getRequest, postRequest } from '../../utils/apiRequest'
import { getToken } from '../../utils/storage'
import DropDownPicker from 'react-native-dropdown-picker';


export default function AddSpeciality({ navigation }) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [loading, setLoading] = useState(false)
    const [specialityId, setSpecialityId] = useState("")
    const [price, setPrice] = useState("")
    const [speciality, setSpeciality] = useState([]);


    const validate = () => {
        if (specialityId == null) return [false, "Select Speciality"];
        if (price.length == 0) return [false, "Enter price"];
        return [true, "success"];
    }


    const handleOnBackPress = () => {
        navigation.goBack()
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
            getSpeciality()
        });
        return unsubscribe
    }, [navigation])


    const getSpeciality = async () => {
        loader.show();
        try {
            let token = await getToken()

            const header = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const response = await getRequest("speciality/list", header)
            console.log("RESPONSE", response)
            if (response.success) {
                response.data && setSpeciality(response.data);
            } else {
                toast.show(response.message.join("\n"), "failure");
            }
        } catch (error) {
            toast.show(error.message, "failure");
        }
        loader.hide();
    }

    const addSpeciality = async () => {
        const [isValid, message] = validate();
        if (!isValid) {
            toast.show(message, "failure")
            return;
        }
        setLoading(true);
        try {
            let token = await getToken()
            let request = {
                speciality_id: specialityId,
                amount: price
            }

            const header = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const response = await postRequest("speciality/store", request, header)
            if (response.success) {
                toast.show(response.message.join("\n"), "success");
            } else {
                toast.show(response.message.join("\n"), "failure");
            }
        } catch (error) {
            toast.show(error.message, "failure");
        }
        setLoading(false);
    }

    

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden={false} backgroundColor={Color.themeSecondary} barStyle="light-content" />
            <Header title='Speciality' backgroundColor={Color.themeSecondary} onBackPress={handleOnBackPress} />
            <KeyboardAvoidingView style={{ flex: 1 }}>

                <View style={{ flex: 1, }}>

                    <ScrollView style={{ width: "100%" }}>
                        <View style={{ width: "100%", paddingLeft: "5%", paddingRight: "5%" }}>

                            <Text style={{ fontSize: normalize(14), color: Color.textColorDark, marginBottom: normalize(5), marginLeft: normalize(10), marginTop: normalize(20) }}>Speciality</Text>
                            
                            <DropDownPicker
                                open={open}
                                value={specialityId}
                                items={speciality}
                                setOpen={setOpen}
                                setValue={setSpecialityId}
                                itemKey={"speciality_id"}
                                schema={{
                                    label: 'name',
                                    value: 'speciality_id'
                                  }}
                                  textStyle={{fontSize: normalize(12), color: Color.textColorDark}}
                                key={"specialityList"}
                                style={{ width: "100%", backgroundColor: Color.white, borderRadius: open ? normalize(10) : normalize(40), borderWidth: normalize(1), borderColor: Color.darkGrey, }}
                            />

                            <Text style={{ fontSize: normalize(14), color: Color.textColorDark, marginBottom: normalize(5), marginLeft: normalize(10), marginTop: normalize(20) }}>Price</Text>

                            <View style={{ width: "100%", backgroundColor: Color.white, borderRadius: normalize(40), borderWidth: normalize(1), borderColor: Color.darkGrey, }}>

                                <TextInput
                                    value={price}
                                    maxLength={10}
                                    keyboardType="number-pad"
                                    style={{ width: "100%", paddingLeft: normalize(10), paddingRight: normalize(10), fontSize: normalize(14), color: Color.textColorDark }}
                                    onChangeText={(text) => {
                                        setPrice(text)
                                    }} />

                            </View>

                            <Button loading={loading} text='ADD SPECILAITY' marginTop={40} marginBottom={normalize(60)} onPress={addSpeciality} />
                        </View>
                    </ScrollView>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}