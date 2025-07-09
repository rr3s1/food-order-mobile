import {FlatList, Text, View} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import {getCategories, getMenu} from "@/lib/appwrite";
import {useLocalSearchParams} from "expo-router";
import useAppwrite from "@/lib/useAppwrite";
import {useEffect} from "react";
import CartButton from "@/components/CartButton";
import cn from "clsx";
import MenuCard from "@/components/MenuCard";
import {MenuItem} from "@/type";

const Search = () => {
    // Get search parameters from the URL
    const { category, query } = useLocalSearchParams<{query: string; category: string}>()

    // Fetch menu items and categories using the custom useAppwrite hook
    const { data, refetch, loading } = useAppwrite({ fn: getMenu, params: { category,  query,  limit: 6, } });
    const { data: categories } = useAppwrite({ fn: getCategories });

    // Refetch data whenever the category or query parameters change
    useEffect(() => {
        refetch({ category, query, limit: 6})
    }, [category, query]);

    return (
        <SafeAreaView className="bg-white h-full">
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    // Check if the item is in the first column to apply cascading style
                    const isFirstRightColItem = index % 2 === 0;

                    return (
                        // Container for the card with conditional margin for the cascading effect
                        <View className={cn("flex-1 max-w-[48%]", !isFirstRightColItem ? 'mt-10': 'mt-0')}>
                            {/* Render the reusable MenuCard component for each item */}
                            <MenuCard item={item as MenuItem} />
                        </View>
                    )
                }}
                keyExtractor={item => item.$id}
                numColumns={2}
                columnWrapperClassName="gap-7"
                contentContainerClassName="gap-7 px-5 pb-32"
                ListHeaderComponent={() => (
                    // Header section with title and placeholders for search/filter
                    <View className="my-5 gap-5">
                        <View className="flex-between flex-row w-full">
                            <View className="flex-start">
                                <Text className="small-bold uppercase text-primary">Search</Text>
                                <View className="flex-start flex-row gap-x-1 mt-0.5">
                                    <Text className="paragraph-semibold text-dark-100">Find your favorite food</Text>
                                </View>
                            </View>
                            <CartButton />
                        </View>
                        <Text>Search Input</Text>
                        <Text>Filter</Text>
                    </View>
                )}
                // Display a message if no results are found
                ListEmptyComponent={() => !loading && <Text>No results</Text>}
            />
        </SafeAreaView>
    )
}

export default Search
