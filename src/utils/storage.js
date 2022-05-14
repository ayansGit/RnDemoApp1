import AsyncStorage from "@react-native-async-storage/async-storage"

export const type = {
    token: "app.token",
    userId: "app.userId",
    profileCompleted: "app.profileCompleted",
    authData: "app.authData",
    userName: "app.userName",
    email: "app.email",
    address: "app.address",
    pincode: "app.pincode",
    addressId: "app.addressId",
    phone: "app.phone",
}

export async function clearAppData() {
    try {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
    } catch (error) {
        console.error('Error clearing app data.');
    }
}

export async function setToken(token) {
    try {
        await AsyncStorage.setItem(
            type.token,
            token
        );
    } catch (error) {
        // Error saving data
    }
}

export async function getToken() {
    let token = ""
    try {
        token = await AsyncStorage.getItem(
            type.token
        )
    } catch (error) {
        // Error saving data
    }
    return token
}

export async function setUserId(value) {
    try {
        await AsyncStorage.setItem(
            type.userId,
            value
        );
    } catch (error) {
        // Error saving data
    }
}

export async function getUserId() {
    let value = 0
    try {
        value = await AsyncStorage.getItem(
            type.userId)
    } catch (error) {
        // Error saving data
    }
    return parseInt(value);
}

export async function setProfileCompleted(value) {
    try {
        await AsyncStorage.setItem(
            type.profileCompleted,
            value
        );
    } catch (error) {
        // Error saving data
    }
}

export async function getProfileCompleted() {
    let value = "No"
    try {
        value = await AsyncStorage.getItem(
            type.profileCompleted)
    } catch (error) {
        // Error saving data
    }
    return value;
}

export async function setAuthData(value) {
    try {
        await AsyncStorage.setItem(
            type.authData,
            value
        );
    } catch (error) {
        // Error saving data
    }
}

export async function getAuthData() {
    let value = "{}"
    try {
        value = await AsyncStorage.getItem(
            type.authData)
    } catch (error) {
        // Error saving data
    }
    return value;
}

export async function setUserName(value) {
    try {
        await AsyncStorage.setItem(
            type.userName,
            value
        );
    } catch (error) {
        // Error saving data
    }
}

export async function getUserName() {
    let value = ""
    try {
        value = await AsyncStorage.getItem(
            type.userName)
    } catch (error) {
        // Error saving data
    }
    return value;
}

export async function setEmail(value) {
    try {
        await AsyncStorage.setItem(
            type.email,
            value
        );
    } catch (error) {
        // Error saving data
    }
}

export async function getEmail() {
    let value = ""
    try {
        value = await AsyncStorage.getItem(
            type.email)
    } catch (error) {
        // Error saving data
    }
    return value;
}

export async function setAddress(value) {
    try {
        await AsyncStorage.setItem(
            type.address,
            value
        );
    } catch (error) {
        // Error saving data
    }
}

export async function getAddress() {
    let value = ""
    try {
        value = await AsyncStorage.getItem(
            type.address)
    } catch (error) {
        // Error saving data
    }
    return value;
}

export async function setPincode(value) {
    try {
        await AsyncStorage.setItem(
            type.pincode,
            value
        );
    } catch (error) {
        // Error saving data
    }
}

export async function getPincode() {
    let value = ""
    try {
        value = await AsyncStorage.getItem(
            type.pincode)
    } catch (error) {
        // Error saving data
    }
    return value;
}

export async function setAddressId(value) {
    try {
        await AsyncStorage.setItem(
            type.addressId,
            value
        );
    } catch (error) {
        // Error saving data
    }
}

export async function getAddressId() {
    let value = ""
    try {
        value = await AsyncStorage.getItem(
            type.addressId)
    } catch (error) {
        // Error saving data
    }
    return value;
}


export async function setPhone(value) {
    try {
        await AsyncStorage.setItem(
            type.phone,
            value
        );
    } catch (error) {
        // Error saving data
    }
}

export async function getPhone() {
    let value = ""
    try {
        value = await AsyncStorage.getItem(
            type.phone)
    } catch (error) {
        // Error saving data
    }
    return value;
}




