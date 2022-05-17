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
import DatePicter from '../../components/Datepicker'

export default function Patients({ navigation }) {


    const handleOnBackPress = () => navigation.goBack();


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
            // getPatientList();
        });
        return unsubscribe
    }, [navigation])


    const getPatientList = async () => {
        loader.show();
        try {
            let token = await getToken()

            const header = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const response = await getRequest("patient/list", header)
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

    const patientItem = () => {
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

                    <View>
                        <Text style={{ fontSize: normalize(10), color: Color.textColor }}>
                            Patient Name
                        </Text>
                        <Text style={{ fontSize: normalize(13), color: Color.textColorDark }}>
                            Kuldeep Mishra
                        </Text>

                        <Text style={{ fontSize: normalize(10), color: Color.textColor, marginTop: normalize(10) }}>
                            Phone No.
                        </Text>
                        <Text style={{ fontSize: normalize(13), color: Color.textColorDark }}>
                            8981160015
                        </Text>

                        <Text style={{ fontSize: normalize(10), color: Color.textColor, marginTop: normalize(10) }}>
                            Total appointments completed
                        </Text>
                        <Text style={{ fontSize: normalize(13), color: Color.textColorDark }}>
                            2
                        </Text>
                    </View>

                </View>
            </View>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden={false} backgroundColor={Color.themeSecondary} barStyle="light-content" />
            <Header title='Patients' backgroundColor={Color.themeSecondary} onBackPress={handleOnBackPress}  />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={{ flex: 1, }}>

                    <FlatList
                        data={[1, 2, 3]}
                        renderItem={patientItem}
                        keyExtractor={(item, index) => index} />


                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}