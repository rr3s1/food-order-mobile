import {Redirect, Slot, Tabs} from "expo-router";
import useAuthStore from "@/store/auth.store";
import {TabBarIconProps} from "@/type";
import {Image, Text, View} from "react-native";
import {images} from "@/constants";
import cn from "clsx";

// A reusable component to render the icon and title for each tab.
// It dynamically changes style based on the 'focused' state.
const TabBarIcon = ({ focused, icon, title }: TabBarIconProps) => (
    <View className="tab-icon items-center justify-center gap-1">
        <Image
            source={icon}
            className="size-7"
            resizeMode="contain"
            // Apply a different tint color if the tab is focused (active).
            tintColor={focused ? '#FE8C00' : '#5D5F6D'}
        />
        <Text
            // Apply different text colors based on the 'focused' state.
            className={cn('text-sm font-bold', focused ? 'text-primary':'text-gray-200')}
        >
            {title}
        </Text>
    </View>
)

export default function TabLayout() {
    const { isAuthenticated } = useAuthStore();

    // If the user is not authenticated, redirect them to the sign-in screen.
    if(!isAuthenticated) return <Redirect href="/sign-in" />

    return (
        <Tabs
            // 'screenOptions' applies settings to all screens within the Tabs navigator.
            screenOptions={{
                headerShown: false,       // Hides the header at the top of the screen.
                tabBarShowLabel: false,   // Hides the default text labels for tabs.

                // 'tabBarStyle' provides custom styling for the tab bar container.
                tabBarStyle: {
                    // Creates a rounded "pill" shape.
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    marginHorizontal: 20,
                    height: 80,
                    // Positions the tab bar over the screen content.
                    position: 'absolute',
                    bottom: 40,
                    backgroundColor: 'white',
                    // Adds a subtle shadow for a "floating" effect.
                    shadowColor: '#1a1a1a',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 5
                }
            }}>
            {/* Defines the 'Home' screen tab. */}
            <Tabs.Screen
                name='index' // Corresponds to the 'index.tsx' file in the same directory.
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => <TabBarIcon title="Home" icon={images.home} focused={focused} />
                }}
            />
            {/* Defines the 'Search' screen tab. */}
            <Tabs.Screen
                name='search' // Corresponds to 'search.tsx'.
                options={{
                    title: 'Search',
                    tabBarIcon: ({ focused }) => <TabBarIcon title="Search" icon={images.search} focused={focused} />
                }}
            />
            {/* Defines the 'Cart' screen tab. */}
            <Tabs.Screen
                name='cart' // Corresponds to 'cart.tsx'.
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ focused }) => <TabBarIcon title="Cart" icon={images.bag} focused={focused} />
                }}
            />
            {/* Defines the 'Profile' screen tab. */}
            <Tabs.Screen
                name='profile' // Corresponds to 'profile.tsx'.
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => <TabBarIcon title="Profile" icon={images.person} focused={focused} />
                }}
            />
        </Tabs>
    );
}