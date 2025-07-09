import {Image, Platform, Text, TouchableOpacity} from "react-native";
import {MenuItem} from "@/type";
import {appwriteConfig} from "@/lib/appwrite";
import { useCartStore } from "@/store/cart.store";

// This component displays a single menu item card.
const MenuCard = ({ item }: { item: MenuItem }) => {
    // Destructure properties from the item prop for easy access.
    // Use correct property names from MenuItem type
    const { imageUrl, name, price, id, customizations } = item as any;
    const addItem = useCartStore((state: any) => state.addItem);

    // Construct the full image URL by appending the Appwrite project ID.
    // This is required for Appwrite to serve the image.
    // const fullImageUrl = `${imageUrl}?project=${appwriteConfig.projectId}`;

    return (
        // Use TouchableOpacity to make the entire card clickable.
        <TouchableOpacity
            className="menu-card"
            style={
                // Apply platform-specific styles for Android to create a shadow effect.
                Platform.OS === 'android' ? { elevation: 10, shadowColor: '#878787' } : {}
            }
        >
            {/* Display the menu item's image, positioned absolutely to float above the card. */}
            <Image
                source={{ uri: imageUrl }}
                className="w-32 h-32 absolute -top-10"
                resizeMode="contain"
            />

            {/* Display the name of the menu item. */}
            <Text className="text-center base-bold text-dark-100 mb-2" numberOfLines={1}>
                {name}
            </Text>

            {/* Display the starting price of the menu item. */}
            <Text className="body-regular text-gray-200 mb-4">
                from ${price}
            </Text>

            {/* "Add to Cart" button, another touchable element. */}
            <TouchableOpacity onPress={() => addItem({
                id,
                name,
                price,
                image_url: imageUrl,
                customizations: customizations || [],
            })}>
                <Text className="paragraph-bold text-primary">
                    + Add to Cart
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

export default MenuCard;