import { View, Text, SafeAreaView, Image, StatusBar, KeyboardAvoidingView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Color from '../../utils/Color'
import ImagePath from '../../utils/ImagePath'
import normalize from '../../utils/Normalize'
import Fab from "../../components/Fab"
import { FlatList } from 'react-native-gesture-handler'
import { getRequest, postRequest } from '../../utils/apiRequest'
import { getToken } from '../../utils/storage'

export default function Speciality({navigation}) {

    const [specialityList, setSpecialityList] = useState([])

    const handleOnBackPress = () => navigation.goBack();
    const addSpeciality = () => navigation.navigate("AddSpeciality");
    

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
            getSpecialityList()
        });
        return unsubscribe
    }, [navigation])


    const getSpecialityList = async () => {
        loader.show();
        try {
            let token = await getToken()

            const header = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const response = await getRequest("speciality/details", header)
            console.log("RESPONSE", response)
            if (response.success) {
                // response.data && setSpeciality(response.data);
            } else {
                toast.show(response.message.join("\n"), "failure");
            }
        } catch (error) {
            toast.show(error.message, "failure");
        }
        loader.hide();
    }

    const specialityItem = () => {
        return (
            <View style={{ width: "100%", paddingLeft: "5%", paddingRight: "5%" }}>
                <View style={{
                    width: "100%",
                    paddingTop: normalize(15),
                    paddingBottom: normalize(15),
                    paddingLeft: normalize(15),
                    paddingRight: normalize(15),
                    borderRadius: normalize(10),
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: Color.white,
                    elevation: normalize(8),
                    shadowColor: Color.black,
                    shadowOffset: { height: 0, width: 0 },
                    shadowOpacity: 0.5, marginTop: normalize(10), marginBottom: normalize(10)
                }}>
                    <Text style={{ fontSize: normalize(14), color: Color.textColorDark }}>
                        Diabetes
                    </Text>
                    <Text style={{ fontSize: normalize(14), color: Color.textColorDark }}>
                        {`₹${"1000"}`}
                    </Text>
                </View>
            </View>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden={false} backgroundColor={Color.themeSecondary} barStyle="light-content" />
            <Header title='Speciality' backgroundColor={Color.themeSecondary} onBackPress={handleOnBackPress} />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={{ flex: 1, }}>

                    <FlatList
                        data={specialityList}
                        renderItem={specialityItem}
                        keyExtractor={(item, index) => index} />

                        <Fab onPress={addSpeciality}/>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}