import {View, KeyboardAvoidingView, Platform, ScrollView, Dimensions, ImageBackground, Image} from 'react-native'
import { Slot} from "expo-router";
import {images} from "@/constants";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";


export default function AuthLayout() {
    return (
        // This component adjusts the view when the keyboard is visible.
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            {/* ScrollView enables content to be scrollable if it exceeds the screen height. */}
            <ScrollView className="bg-white h-full" keyboardShouldPersistTaps="handled">
                {/* A container for the top graphic, with its height dynamically calculated. */}
                <View className="w-full relative" style={{ height: Dimensions.get('screen').height / 2.25}}>
                    {/* The background image for the authentication screens. */}
                    <ImageBackground
                        source={images.loginGraphic}
                        className="size-full rounded-b-lg"
                        resizeMode="stretch"
                    />
                    {/* The application logo, positioned absolutely over the background. */}
                    <Image source={images.logo} className="self-center size-48 absolute -bottom-16 z-10" />
                </View>


                {/* The Slot component renders the content of the child route (sign-in or sign-up). */}
                <Slot />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
