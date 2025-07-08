import {View, Text} from 'react-native'
import React from 'react'
import {router} from "expo-router";
import {Button} from "@react-navigation/elements";

const SignIn = () => {
    return (
        <View>
            <Text>SignIn</Text>
            <Button title="Sign Up" onPress={()=>router.push("/sign-up")} />
        </View>
    )
}
export default SignIn
