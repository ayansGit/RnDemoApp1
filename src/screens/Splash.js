import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import ImagePath from '../utils/ImagePath'
import Color from '../utils/Color'
import normalize from '../utils/Normalize'
import { getToken } from '../utils/storage'

export default function Splash(props) {

    setTimeout(async () => {
        const token = await getToken()
        if (token && token.length != 0) {
            props.navigation.replace("SignedInNavigator")
        } else
            props.navigation.replace("SignedOutNavigator")
    }, 2000)

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Color.white }}>
            <StatusBar hidden={true} />
            <Image
                style={{ width: "60%", height: "60%", marginBottom: normalize(30) }}
                resizeMode="contain"
                source={ImagePath.logo} />
        </View>
    )
}