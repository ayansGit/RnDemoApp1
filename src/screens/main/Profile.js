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

export default function Profile({ navigation }) {


  const [loading, setLoading] = useState(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [profDegree, setProfDegree] = useState("")
  const [experience, setExperience] = useState("")

  const validate = () => {
    if (fullName.length == 0) return [false, "Fullname required"];
    if (email.length == 0) return [false, "Email required"];
    if (!validateEmail(email)) return [false, "Enter valid email"];
    return [true, "success"];
  }

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleOnBackPress = () => {
    navigation.goBack()
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      getProfile()
    });
    return unsubscribe
  }, [navigation])


  const getProfile = async () => {
    loader.show();
    try {
      let token = await getToken()

      const header = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const response = await getRequest("profile/details", header)
      if (response.success) {
        setFullName(response.data.full_name ? response.data.full_name : "")
        setEmail(response.data.email ? response.data.email : "")
        setPhone(response.data.phone ? response.data.phone.toString() : "")
      } else {
        toast.show(response.message.join("\n"), "failure");
      }
    } catch (error) {
      toast.show(error.message, "failure");
    }
    loader.hide();
  }

  const updateProfile = async () => {
    const [isValid, message] = validate();
    if (!isValid) {
      toast.show(message, "failure")
      return;
    }
    setLoading(true);
    try {
      let token = await getToken()
      let request = {
        full_name: fullName,
        email: email,
        phone: phone
      }

      const header = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const response = await postRequest("profile/update", request, header)
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
                  value={fullName}
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
                  keyboardType="default"
                  style={{ width: "100%", paddingLeft: normalize(10), paddingRight: normalize(10), fontSize: normalize(14) }}
                  onChangeText={(text) => {
                    setEmail(text)
                  }} />

              </View>


              <Text style={{ fontSize: normalize(14), color: Color.textColorDark, marginBottom: normalize(5), marginLeft: normalize(10), marginTop: normalize(10) }}>Mobile Number</Text>

              <View style={{ width: "100%", backgroundColor: Color.white, borderRadius: normalize(40), borderWidth: normalize(1), borderColor: Color.darkGrey, }}>

                <TextInput
                  editable={false}
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
                  maxLength={3}
                  keyboardType="number-pad"
                  style={{ width: "100%", paddingLeft: normalize(10), paddingRight: normalize(10), fontSize: normalize(14) }}
                  onChangeText={(text) => {
                    setExperience(text)
                  }} />

              </View>

              <Button loading={loading} text='SUBMIT' marginTop={40} marginBottom={normalize(60)} onPress={updateProfile} />
            </View>
          </ScrollView>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}