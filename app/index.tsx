import { Text, View } from "react-native";

export default function Index() {
    return (
        // The View component is a fundamental container that supports layout with flexbox.
        <View
            style={{
                flex: 1, // 'flex: 1' makes the View expand to fill the entire screen.
                justifyContent: "center", // 'justifyContent' aligns children vertically in the center.
                alignItems: "center", // 'alignItems' aligns children horizontally in the center.
            }}
        >
            {/* The Text component is used to display strings of text. */}
            <Text>Welcome to Food Ordering App!</Text>
        </View>
    );
}