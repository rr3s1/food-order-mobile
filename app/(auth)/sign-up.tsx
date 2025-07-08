import {View, Text} from 'react-native'
import React from 'react'
import {Button} from "@react-navigation/elements";
import {router} from "expo-router";

const SignUp = () => {
    return (
        <View>
            <Text>SignUp</Text>
            <Button title="Sign In" onPress={()=>router.push("/sign-in")} />

        </View>
    )
}
export default SignUp
