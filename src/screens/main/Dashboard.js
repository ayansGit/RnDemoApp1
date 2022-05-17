import { View, Text, SafeAreaView, Image, StatusBar, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Color from '../../utils/Color'
import ImagePath from '../../utils/ImagePath'
import normalize from '../../utils/Normalize'
import DashboardItem from '../../components/DashboardItem'
import { clearAppData } from '../../utils/storage'

export default function Dashboard({navigation}) {

  const logout = async() => {
    await clearAppData();
    navigation.replace("SignedOutNavigator");
  }
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
              icon={ImagePath.appointment}
              onItemPress={() => navigation.navigate("Appointments")} />

            <DashboardItem
              width={normalize(80)}
              height={normalize(85)}
              title='Patients'
              icon={ImagePath.patient} 
              onItemPress={() => navigation.navigate("Patients")}/>

            <DashboardItem
              width={normalize(80)}
              height={normalize(85)}
              title='Specilaity'
              icon={ImagePath.speciality}
              onItemPress={() => navigation.navigate("Speciality")} />
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
              icon={ImagePath.info}
              onItemPress={() => navigation.navigate("AppInfo")} />

            <DashboardItem
              width={normalize(80)}
              height={normalize(85)}
              title='Logout'
              icon={ImagePath.logout}
              onItemPress={logout} />
          </View>



        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}