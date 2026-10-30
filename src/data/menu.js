import shoyu from "../assets/images/shoyuramen.webp";
import tonkotsu from "../assets/images/tonkotsuramen.webp";

export const categories = ["Ramen", "Small Plates", "Drinks", "Desserts"];

export const menuItems = [
    {
        id: 1,
        category: "Ramen",
        name: "Shōyu Ramen",
        jp: "醤油ラーメン",
        description:
            "Classic soy-based broth with chashu, bamboo shoots, soft egg and menma.",
        price: 450,
        image: shoyu,
        rating: 4.8,
        prepTime: "12 min",
        spice: 0,
        ingredients: ["Soy tare broth", "Chashu pork", "Soft egg", "Menma", "Nori"],
        tags: ["Classic", "Chef's pick"],
    },
    {
        id: 2,
        category: "Ramen",
        name: "Spicy Miso Ramen",
        jp: "辛味噌ラーメン",
        description:
            "A bold, fiery red miso pork broth with thick noodles, niku-miso pork, bamboo shoots and a marinated egg.",
        price: 520,
        image: shoyu, // temporary: swap when you export this photo
        rating: 4.7,
        prepTime: "14 min",
        spice: 3,
        ingredients: ["Red miso broth", "Niku-miso pork", "Thick noodles", "Garlic", "Chili oil"],
        tags: ["Spicy", "Bold"],

    },
    {
        id: 3,
        category: "Ramen",
        name: "Tonkotsu Ramen",
        jp: "豚骨ラーメン",
        description:
            "Ultra-rich, creamy pork bone broth with thin noodles, braised pork belly, a soft-yolk egg and nori.",
        price: 430,
        image: tonkotsu,
        rating: 4.9,
        prepTime: "15 min",
        spice: 1,
        ingredients: ["Pork bone broth", "Braised pork belly", "Thin noodles", "Soft egg", "Nori"],
        tags: ["Rich", "Bestseller"],
    },
    {
        id: 4,
        category: "Ramen",
        name: "Yuzu Shio Ramen",
        jp: "柚子塩ラーメン",
        description:
            "Clear, light umami salt broth with aromatic yuzu citrus, thin noodles, tender chashu and fresh green onions.",
        price: 550,
        image: tonkotsu, // temporary: swap when you export this photo
        rating: 4.6,
        prepTime: "10 min",
        spice: 0,
        ingredients: ["Salt broth", "Kochi yuzu", "Chashu", "Green onions", "Thin noodles"],
        tags: ["Light", "Citrus"],
    },
];