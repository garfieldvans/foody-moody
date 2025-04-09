export const heroData = [
  {
    id: 1,
    title: "Spicy delicious chicken wings",
    description: "A spicy and delicious recipe for chicken wings.",
    imageUrl: "/images/banner1.png",
    imageAlt: "Spicy chicken wings",
    cooktime: "30 minutes",
    cta: {
      show: true,
      ctaType: {
        type: "video",
        url: "/recipes/spicy-chicken-wings",
        ctatext: "View Recipe",
      },
    },
    badges: [
      {
        id: 1,
        displayText: "Hot Recipes",
        icon: "🔥",
        badgeUrl: "/recipes/hot-recipes",
      },
    ],
    tags: [
      {
        id: 1,
        tagText: "Chicken",
        tagUrl: "/recipes/chicken-recipes",
      },
    ],
  },
  {
    id: 2,
    title: "Healthy Salad",
    description: "A fresh and healthy salad recipe.",
    imageUrl: "/images/banner2.png",
    imageAlt: "Healthy salad",
    cooktime: "15 minutes",
    cta: {
      show: true,
      ctaType: {
        type: "article",
        url: "/recipes/healthy-salad",
        ctatext: "View Recipe",
      },
    },
    tags: ["salad", "healthy", "fresh"],
  },
  {
    id: 3,
    title: "Chocolate Cake",
    description: "A rich and moist chocolate cake recipe.",
    imageUrl: "/images/banner3.png",
    imageAlt: "Chocolate cake",
    cooktime: "45 minutes",
    cta: {
      show: true,
      ctaType: {
        type: "article",
        url: "/recipes/chocolate-cake",
        ctatext: "View Recipe",
      },
    },
    tags: ["cake", "chocolate", "dessert"],
  },
];

export const categoriesData = [
  {
    id: "breakfast",
    title: "Breakfast",
    description: "Start your day with a delicious breakfast.",
    categoryUrl: "/categories/breakfast",
    categoryImageUrl: "/images/breakfast.png",
    categoryThemeColor: "#708246",
  },
  {
    id: "lunch",
    title: "Lunch",
    description: "Quick and easy lunch recipes.",
    categoryUrl: "/categories/lunch",
    categoryImageUrl: "/images/lunch.png",
    categoryThemeColor: "#000000",
  },
  {
    id: "seafood",
    title: "Seafood",
    description: "Fresh and delicious seafood recipes.",
    categoryUrl: "/categories/seafood",
    categoryImageUrl: "/images/seafood.png",
    categoryThemeColor: "#007BFF",
  },
  {
    id: "dinner",
    title: "Dinner",
    description: "Hearty dinner recipes for the whole family.",
    categoryUrl: "/categories/dinner",
    categoryImageUrl: "/images/dinner.png",
    categoryThemeColor: "#4ECDC4",
  },
  {
    id: "desserts",
    title: "Desserts",
    description: "Sweet treats to satisfy your cravings.",
    categoryUrl: "/categories/desserts",
    categoryImageUrl: "/images/dessert.png",
    categoryThemeColor: "#F09E00",
  },
  {
    id: "vegan",
    title: "Vegan",
    description: "Delicious vegan recipes for everyone.",
    categoryUrl: "/categories/vegan",
    categoryImageUrl: "/images/vegan.png",
    categoryThemeColor: "#6CC63F",
  },
  {
    id: "meat",
    title: "Meat",
    description: "Savory meat recipes for meat lovers.",
    categoryUrl: "/categories/meat",
    categoryImageUrl: "/images/meat.png",
    categoryThemeColor: "#CC261B",
  },
  {
    id: "chocolate",
    title: "Chocolate",
    description: "Indulge in rich chocolate recipes.",
    categoryUrl: "/categories/chocolate",
    categoryImageUrl: "/images/chocolate.png",
    categoryThemeColor: "#D2691E",
  }
]
