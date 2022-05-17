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
import { app_version } from '../../utils/constants'

export default function AppInfo({ navigation }) {


    const handleOnBackPress = () => navigation.goBack();



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden={false} backgroundColor={Color.themeSecondary} barStyle="light-content" />
            <Header title='App Info' backgroundColor={Color.themeSecondary} onBackPress={handleOnBackPress} />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: "center" }}>

                    <TouchableOpacity style={{
                        width: "85%", borderBottomWidth: normalize(1), borderBottomColor: Color.lightGrey,
                        padding: normalize(15)
                    }}>

                        <Text style={{ fontSize: normalize(14), color: Color.textColorDark }}>About Us</Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={{
                        width: "85%", borderBottomWidth: normalize(1), borderBottomColor: Color.lightGrey,
                        padding: normalize(15)
                    }}>

                        <Text style={{ fontSize: normalize(14), color: Color.textColorDark }}>{"Terms & Conditions"}</Text>

                    </TouchableOpacity>

                    <Text style={{ position: "absolute", bottom: 10 }}>Version: {app_version}</Text>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}