import { View, Text, SafeAreaView, Image, StatusBar, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Color from '../../utils/Color'
import ImagePath from '../../utils/ImagePath'
import normalize from '../../utils/Normalize'
import DashboardItem from '../../components/DashboardItem'

export default function Dashboard({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={false} backgroundColor={Color.themeSecondary} barStyle="light-content" />
      <Header title='Dashboard' backgroundColor={Color.themeSecondary} />
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={{ flex: 1, }}>

          <View style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginLeft: normalize(5),
            marginRight: normalize(5),
            marginTop: normalize(40)
          }}>

            <DashboardItem
              width={normalize(80)}
              height={normalize(85)}
              title='Appointments'
              icon={ImagePath.appointment} />

            <DashboardItem
              width={normalize(80)}
              height={normalize(85)}
              title='Patients'
              icon={ImagePath.patient} />

            <DashboardItem
              width={normalize(80)}
              height={normalize(85)}
              title='Specilaity'
              icon={ImagePath.speciality} />
          </View>

          <View style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginLeft: normalize(5),
            marginRight: normalize(5),
            marginTop: normalize(40)
          }}>

            <DashboardItem
              width={normalize(80)}
              height={normalize(85)}
              title='Profile'
              icon={ImagePath.profile}
              onItemPress={() => navigation.navigate("Profile")} />

            <DashboardItem
              width={normalize(80)}
              height={normalize(85)}
              title='App Info'
              icon={ImagePath.info} />

            <DashboardItem
              width={normalize(80)}
              height={normalize(85)}
              title='Logout'
              icon={ImagePath.logout} />
          </View>



        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}