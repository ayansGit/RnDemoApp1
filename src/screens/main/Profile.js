import { View, Text, SafeAreaView, Image, StatusBar, KeyboardAvoidingView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Color from '../../utils/Color'
import ImagePath from '../../utils/ImagePath'
import normalize from '../../utils/Normalize'
import DashboardItem from '../../components/DashboardItem'
import Button from '../../components/Button'

export default function Profile({ navigation }) {


  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [profDegree, setProfDegree] = useState("")
  const [experience, setExperience] = useState("")

  const handleOnBackPress = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={false} backgroundColor={Color.themeSecondary} barStyle="light-content" />
      <Header title='Profile' backgroundColor={Color.themeSecondary} onBackPress={handleOnBackPress} />
      <KeyboardAvoidingView style={{ flex: 1 }}>

        <View style={{ flex: 1, }}>

          <ScrollView style={{ width: "100%" }}>
            <View style={{ width: "100%", paddingLeft: "5%", paddingRight: "5%" }}>

              <TouchableOpacity style={{
                height: normalize(100), width: normalize(100),
                borderRadius: normalize(50), borderWidth: normalize(2),
                borderColor: Color.darkGrey, alignSelf: "center", marginTop: normalize(30),
                justifyContent: "center", alignItems: "center"
              }}>

                <Image
                  style={{
                    height: normalize(90), width: normalize(90),
                    borderRadius: normalize(50)
                  }}
                  source={ImagePath.profile} />

              </TouchableOpacity>


              <Text style={{ fontSize: normalize(14), color: Color.textColorDark, marginBottom: normalize(5), marginLeft: normalize(10), marginTop: normalize(20) }}>Fullname</Text>

              <View style={{ width: "100%", backgroundColor: Color.white, borderRadius: normalize(40), borderWidth: normalize(1), borderColor: Color.darkGrey, }}>

                <TextInput
                  focusable={true}
                  autoFocus={true}
                  value={fullName}
                  maxLength={10}
                  keyboardType="default"
                  style={{ width: "100%", paddingLeft: normalize(10), paddingRight: normalize(10), fontSize: normalize(14) }}
                  onChangeText={(text) => {
                    setFullName(text)
                  }} />

              </View>

              <Text style={{ fontSize: normalize(14), color: Color.textColorDark, marginBottom: normalize(5), marginLeft: normalize(10), marginTop: normalize(10) }}>Email</Text>

              <View style={{ width: "100%", backgroundColor: Color.white, borderRadius: normalize(40), borderWidth: normalize(1), borderColor: Color.darkGrey, }}>

                <TextInput
                  value={email}
                  maxLength={10}
                  keyboardType="default"
                  style={{ width: "100%", paddingLeft: normalize(10), paddingRight: normalize(10), fontSize: normalize(14) }}
                  onChangeText={(text) => {
                    setEmail(text)
                  }} />

              </View>


              <Text style={{ fontSize: normalize(14), color: Color.textColorDark, marginBottom: normalize(5), marginLeft: normalize(10), marginTop: normalize(10) }}>Mobile Number</Text>

              <View style={{ width: "100%", backgroundColor: Color.white, borderRadius: normalize(40), borderWidth: normalize(1), borderColor: Color.darkGrey, }}>

                <TextInput
                  value={phone}
                  maxLength={10}
                  keyboardType="number-pad"
                  style={{ width: "100%", paddingLeft: normalize(10), paddingRight: normalize(10), fontSize: normalize(14) }}
                  onChangeText={(text) => {
                    setPhone(text)
                  }} />

              </View>


              <Text style={{ fontSize: normalize(14), color: Color.textColorDark, marginBottom: normalize(5), marginLeft: normalize(10), marginTop: normalize(10) }}>Address</Text>

              <View style={{ width: "100%", backgroundColor: Color.white, borderRadius: normalize(40), borderWidth: normalize(1), borderColor: Color.darkGrey, }}>

                <TextInput
                  value={address}
                  maxLength={10}
                  keyboardType="default"
                  style={{ width: "100%", paddingLeft: normalize(10), paddingRight: normalize(10), fontSize: normalize(14) }}
                  onChangeText={(text) => {
                    setAddress(text)
                  }} />

              </View>


              <Text style={{ fontSize: normalize(14), color: Color.textColorDark, marginBottom: normalize(5), marginLeft: normalize(10), marginTop: normalize(10) }}>Prefessional Degree</Text>

              <View style={{ width: "100%", backgroundColor: Color.white, borderRadius: normalize(40), borderWidth: normalize(1), borderColor: Color.darkGrey, }}>

                <TextInput
                  value={profDegree}
                  maxLength={10}
                  keyboardType="default"
                  style={{ width: "100%", paddingLeft: normalize(10), paddingRight: normalize(10), fontSize: normalize(14) }}
                  onChangeText={(text) => {
                    setProfDegree(text)
                  }} />

              </View>

              <Text style={{ fontSize: normalize(14), color: Color.textColorDark, marginBottom: normalize(5), marginLeft: normalize(10), marginTop: normalize(10) }}>Years Of Experience</Text>

              <View style={{ width: "100%", backgroundColor: Color.white, borderRadius: normalize(40), borderWidth: normalize(1), borderColor: Color.darkGrey, }}>

                <TextInput
                  value={experience}
                  maxLength={10}
                  keyboardType="number-pad"
                  style={{ width: "100%", paddingLeft: normalize(10), paddingRight: normalize(10), fontSize: normalize(14) }}
                  onChangeText={(text) => {
                    setExperience(text)
                  }} />

              </View>

              <Button loading={false} text='SUBMIT' marginTop={40} marginBottom={normalize(60)} />
            </View>
          </ScrollView>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}