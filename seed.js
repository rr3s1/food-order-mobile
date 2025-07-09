require('dotenv').config();
const { Client, Databases, Storage, ID, InputFile } = require('node-appwrite');
const fetch = require('node-fetch');

const dummyData = {
    categories: [
        { name: "Burgers", description: "Juicy grilled burgers" },
        { name: "Pizzas", description: "Oven-baked cheesy pizzas" },
        { name: "Burritos", description: "Rolled Mexican delights" },
        { name: "Sandwiches", description: "Stacked and stuffed sandwiches" },
        { name: "Wraps", description: "Rolled up wraps packed with flavor" },
        { name: "Bowls", description: "Balanced rice and protein bowls" },
    ],

    customizations: [
        // Toppings
        { name: "Extra Cheese", price: 25, type: "topping" },
        { name: "Jalapeños", price: 20, type: "topping" },
        { name: "Onions", price: 10, type: "topping" },
        { name: "Olives", price: 15, type: "topping" },
        { name: "Mushrooms", price: 18, type: "topping" },
        { name: "Tomatoes", price: 10, type: "topping" },
        { name: "Bacon", price: 30, type: "topping" },
        { name: "Avocado", price: 35, type: "topping" },

        // Sides
        { name: "Coke", price: 30, type: "side" },
        { name: "Fries", price: 35, type: "side" },
        { name: "Garlic Bread", price: 40, type: "side" },
        { name: "Chicken Nuggets", price: 50, type: "side" },
        { name: "Iced Tea", price: 28, type: "side" },
        { name: "Salad", price: 33, type: "side" },
        { name: "Potato Wedges", price: 38, type: "side" },
        { name: "Mozzarella Sticks", price: 45, type: "side" },
        { name: "Sweet Corn", price: 25, type: "side" },
        { name: "Choco Lava Cake", price: 42, type: "side" },
    ],

    menu: [
        {
            name: "Classic Cheeseburger",
            description: "Beef patty, cheese, lettuce, tomato",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/044/844/600/large_2x/homemade-fresh-tasty-burger-with-meat-and-cheese-classic-cheese-burger-and-vegetable-ai-generated-free-png.png",
            price: 25.99,
            rating: 4.5,
            calories: 550,
            protein: 25,
            category_name: "Burgers",
            customizations: ["Extra Cheese", "Coke", "Fries", "Onions", "Bacon"],
        },
        {
            name: "Pepperoni Pizza",
            description: "Loaded with cheese and pepperoni slices",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/023/742/417/large_2x/pepperoni-pizza-isolated-illustration-ai-generative-free-png.png",
            price: 30.99,
            rating: 4.7,
            calories: 700,
            protein: 30,
            category_name: "Pizzas",
            customizations: [
                "Extra Cheese",
                "Jalapeños",
                "Garlic Bread",
                "Coke",
                "Olives",
            ],
        },
        {
            name: "Bean Burrito",
            description: "Stuffed with beans, rice, salsa",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/055/133/581/large_2x/deliciously-grilled-burritos-filled-with-beans-corn-and-fresh-vegetables-served-with-lime-wedge-and-cilantro-isolated-on-transparent-background-free-png.png",
            price: 20.99,
            rating: 4.2,
            calories: 480,
            protein: 18,
            category_name: "Burritos",
            customizations: ["Jalapeños", "Iced Tea", "Fries", "Salad"],
        },
        {
            name: "BBQ Bacon Burger",
            description: "Smoky BBQ sauce, crispy bacon, cheddar",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/060/236/245/large_2x/a-large-hamburger-with-cheese-onions-and-lettuce-free-png.png",
            price: 27.5,
            rating: 4.8,
            calories: 650,
            protein: 29,
            category_name: "Burgers",
            customizations: ["Onions", "Fries", "Coke", "Bacon", "Avocado"],
        },
        {
            name: "Chicken Caesar Wrap",
            description: "Grilled chicken, lettuce, Caesar dressing",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/048/930/603/large_2x/caesar-wrap-grilled-chicken-isolated-on-transparent-background-free-png.png",
            price: 21.5,
            rating: 4.4,
            calories: 490,
            protein: 28,
            category_name: "Wraps",
            customizations: ["Extra Cheese", "Coke", "Potato Wedges", "Tomatoes"],
        },
        {
            name: "Grilled Veggie Sandwich",
            description: "Roasted veggies, pesto, cheese",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/047/832/012/large_2x/grilled-sesame-seed-bread-veggie-sandwich-with-tomato-and-onion-free-png.png",
            price: 19.99,
            rating: 4.1,
            calories: 420,
            protein: 19,
            category_name: "Sandwiches",
            customizations: ["Mushrooms", "Olives", "Mozzarella Sticks", "Iced Tea"],
        },
        {
            name: "Double Patty Burger",
            description: "Two juicy beef patties and cheese",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/060/359/627/large_2x/double-cheeseburger-with-lettuce-tomatoes-cheese-and-sesame-bun-free-png.png",
            price: 32.99,
            rating: 4.9,
            calories: 720,
            protein: 35,
            category_name: "Burgers",
            customizations: [
                "Extra Cheese",
                "Onions",
                "Fries",
                "Coke",
                "Chicken Nuggets",
            ],
        },
        {
            name: "Paneer Tikka Wrap",
            description: "Spicy paneer, mint chutney, veggies",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/057/913/530/large_2x/delicious-wraps-a-tantalizing-array-of-wraps-filled-with-vibrant-vegetables-succulent-fillings-and-fresh-ingredients-artfully-arranged-for-a-mouthwatering-culinary-experience-free-png.png",
            price: 23.99,
            rating: 4.6,
            calories: 470,
            protein: 20,
            category_name: "Wraps",
            customizations: ["Jalapeños", "Tomatoes", "Salad", "Fries", "Iced Tea"],
        },
        {
            name: "Mexican Burrito Bowl",
            description: "Rice, beans, corn, guac, salsa",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/057/466/374/large_2x/healthy-quinoa-bowl-with-avocado-tomato-and-black-beans-ingredients-free-png.png",
            price: 26.49,
            rating: 4.7,
            calories: 610,
            protein: 24,
            category_name: "Bowls",
            customizations: ["Avocado", "Sweet Corn", "Salad", "Iced Tea"],
        },
        {
            name: "Spicy Chicken Sandwich",
            description: "Crispy chicken, spicy sauce, pickles",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/051/814/008/large_2x/a-grilled-chicken-sandwich-with-lettuce-and-tomatoes-free-png.png",
            price: 24.99,
            rating: 4.3,
            calories: 540,
            protein: 26,
            category_name: "Sandwiches",
            customizations: [
                "Jalapeños",
                "Onions",
                "Fries",
                "Coke",
                "Choco Lava Cake",
            ],
        },
        {
            name: "Classic Margherita Pizza",
            description: "Tomato, mozzarella, fresh basil",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/058/700/845/large_2x/free-isolated-on-transparent-background-delicious-pizza-topped-with-fresh-tomatoes-basil-and-melted-cheese-perfect-for-food-free-png.png",
            price: 26.99,
            rating: 4.1,
            calories: 590,
            protein: 21,
            category_name: "Pizzas",
            customizations: ["Extra Cheese", "Olives", "Coke", "Garlic Bread"],
        },
        {
            name: "Protein Power Bowl",
            description: "Grilled chicken, quinoa, veggies",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/056/106/379/large_2x/top-view-salad-with-chicken-avocado-tomatoes-and-lettuce-free-png.png",
            price: 29.99,
            rating: 4.8,
            calories: 580,
            protein: 38,
            category_name: "Bowls",
            customizations: ["Avocado", "Salad", "Sweet Corn", "Iced Tea"],
        },
        {
            name: "Paneer Burrito",
            description: "Paneer cubes, spicy masala, rice, beans",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/056/565/254/large_2x/burrito-with-cauliflower-and-vegetables-free-png.png",
            price: 24.99,
            rating: 4.2,
            calories: 510,
            protein: 22,
            category_name: "Burritos",
            customizations: ["Jalapeños", "Fries", "Garlic Bread", "Coke"],
        },
        {
            name: "Chicken Club Sandwich",
            description: "Grilled chicken, lettuce, cheese, tomato",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/060/364/135/large_2x/a-flavorful-club-sandwich-with-turkey-bacon-and-fresh-vegetables-sliced-and-isolated-on-a-transparent-background-free-png.png",
            price: 27.49,
            rating: 4.5,
            calories: 610,
            protein: 31,
            category_name: "Sandwiches",
            customizations: ["Bacon", "Tomatoes", "Mozzarella Sticks", "Iced Tea"],
        },
    ],
};

const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID)
    .setKey(process.env.EXPO_PUBLIC_APPWRITE_API_KEY);

const databases = new Databases(client);
const storage = new Storage(client);

const appwriteConfig = {
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    bucketId: process.env.EXPO_PUBLIC_APPWRITE_BUCKET_ID,
    categoriesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_CATEGORIES_COLLECTION_ID,
    customizationsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_CUSTOMIZATIONS_COLLECTION_ID,
    menuCollectionId: process.env.EXPO_PUBLIC_APPWRITE_MENU_COLLECTION_ID,
    menuCustomizationsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_MENU_CUSTOMIZATIONS_COLLECTION_ID,
};

async function clearAll(collectionId) {
    try {
        const list = await databases.listDocuments(appwriteConfig.databaseId, collectionId);
        if (list.documents.length > 0) {
            await Promise.all(
                list.documents.map((doc) =>
                    databases.deleteDocument(appwriteConfig.databaseId, collectionId, doc.$id)
                )
            );
        }
    } catch (error) {
        if (error.code !== 404) { // Ignore if collection doesn't exist
            console.error(`Error clearing collection ${collectionId}:`, error);
        }
    }
}

async function clearStorage() {
    try {
        const list = await storage.listFiles(appwriteConfig.bucketId);
        if (list.files.length > 0) {
            await Promise.all(
                list.files.map((file) => storage.deleteFile(appwriteConfig.bucketId, file.$id))
            );
        }
    } catch (error) {
        console.error('Error clearing storage:', error);
    }
}

async function uploadImageToStorage(imageUrl) {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const buffer = await blob.arrayBuffer();
    const fileName = imageUrl.split("/").pop() || `file-${Date.now()}.jpg`;

    const inputFile = InputFile.fromBuffer(buffer, fileName);

    const file = await storage.createFile(
        appwriteConfig.bucketId,
        ID.unique(),
        inputFile
    );

    return `${process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${appwriteConfig.bucketId}/files/${file.$id}/view?project=${process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID}`;
}

async function seed() {
    console.log("🚀 Starting to seed database...");

    await clearAll(appwriteConfig.categoriesCollectionId);
    await clearAll(appwriteConfig.customizationsCollectionId);
    await clearAll(appwriteConfig.menuCollectionId);
    await clearAll(appwriteConfig.menuCustomizationsCollectionId);
    await clearStorage();
    console.log("✅ Cleared existing data.");

    const categoryMap = {};
    for (const cat of dummyData.categories) {
        const doc = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.categoriesCollectionId,
            ID.unique(),
            cat
        );
        categoryMap[cat.name] = doc.$id;
    }
    console.log("✅ Seeded categories.");

    const customizationMap = {};
    for (const cus of dummyData.customizations) {
        const doc = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.customizationsCollectionId,
            ID.unique(),
            cus
        );
        customizationMap[cus.name] = doc.$id;
    }
    console.log("✅ Seeded customizations.");

    for (const item of dummyData.menu) {
        const uploadedImage = await uploadImageToStorage(item.image_url);

        const doc = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.menuCollectionId,
            ID.unique(),
            {
                name: item.name,
                description: item.description,
                image_url: uploadedImage,
                price: item.price,
                rating: item.rating,
                calories: item.calories,
                protein: item.protein,
                categories: categoryMap[item.category_name],
            }
        );

        for (const cusName of item.customizations) {
            await databases.createDocument(
                appwriteConfig.databaseId,
                appwriteConfig.menuCustomizationsCollectionId,
                ID.unique(),
                {
                    menu: doc.$id,
                    customizations: customizationMap[cusName],
                }
            );
        }
    }
    console.log("✅ Seeded menu items and customizations.");

    console.log("🎉 Seeding complete.");
}

seed().catch(console.error);