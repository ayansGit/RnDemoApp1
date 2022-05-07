import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import ImagePath from '../utils/ImagePath'
import Color from '../utils/Color'
import normalize from '../utils/Normalize'

export default function Splash(props) {

    setTimeout(()=>{
        props.navigation.replace("SignedOutNavigator")
    }, 2000)

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems:"center", backgroundColor: Color.themeSecondary }}>
            <StatusBar hidden={true}/>
            <Image
                style={{ width: "60%", height: "60%", marginBottom: normalize(30) }}
                resizeMode="contain"
                source={ImagePath.logo} />
        </View>
    )
}