import {View, Text} from 'react-native'
import React from 'react'
import {Slot, Redirect} from "expo-router";
import useAuthStore from "@/store/auth.store";

export default function TabLayout() {
    const { isAuthenticated } = useAuthStore();
    if(!isAuthenticated) return <Redirect href="/sign-in" />
    return <Slot />
}
