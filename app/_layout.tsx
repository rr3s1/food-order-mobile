import {SplashScreen, Stack} from "expo-router";
import "./globals.css"
import { useFonts } from 'expo-font';
import { useEffect} from "react";
import useAuthStore from "@/store/auth.store";



export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "QuickSand-Bold": require('../assets/fonts/Quicksand-Bold.ttf'),
    "QuickSand-Medium": require('../assets/fonts/Quicksand-Medium.ttf'),
    "QuickSand-Regular": require('../assets/fonts/Quicksand-Regular.ttf'),
    "QuickSand-SemiBold": require('../assets/fonts/Quicksand-SemiBold.ttf'),
    "QuickSand-Light": require('../assets/fonts/Quicksand-Light.ttf'),
  });
  const { isLoading, fetchAuthenticatedUser } = useAuthStore();

  useEffect(() => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  useEffect(() => {
    fetchAuthenticatedUser()
  }, []);
  
  if(!fontsLoaded || isLoading) return null;

  return <Stack screenOptions={{ headerShown: false }} />;

}
