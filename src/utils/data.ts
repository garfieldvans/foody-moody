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
    categoryThemeColor: "linear-gradient(to top, rgb(112, 130, 70, 0.4), rgb(108, 166, 141, 0.3), rgb(145, 196, 201, 0.3), rgb(207, 223, 236, 0.3), rgb(255, 255, 255))",
  },
  {
    id: "lunch",
    title: "Lunch",
    description: "Quick and easy lunch recipes.",
    categoryUrl: "/categories/lunch",
    categoryImageUrl: "/images/lunch.png",
    categoryThemeColor: "linear-gradient(to top, rgb(85, 85, 85, 0.4), rgb(124 124 124 / 30%), rgb(166 166 166 / 30%), rgb(210 210 210 / 30%), #ffffff)",
  },
  {
    id: "seafood",
    title: "Seafood",
    description: "Fresh and delicious seafood recipes.",
    categoryUrl: "/categories/seafood",
    categoryImageUrl: "/images/seafood.png",
    categoryThemeColor: "linear-gradient(to top,rgb(0, 123, 255, 0.4),rgb(127, 152, 255, 0.3),rgb(180, 184, 255, 0.3),rgb(221, 218, 255, 0.3), #ffffff)",
  },
  {
    id: "dinner",
    title: "Dinner",
    description: "Hearty dinner recipes for the whole family.",
    categoryUrl: "/categories/dinner",
    categoryImageUrl: "/images/dinner.png",
    categoryThemeColor: "linear-gradient(to top,rgb(78, 205, 196, 0.4),rgb(127, 216, 233, 0.3),rgb(183, 226, 251, 0.3),rgb(228, 238, 255, 0.3), #ffffff);",
  },
  {
    id: "desserts",
    title: "Desserts",
    description: "Sweet treats to satisfy your cravings.",
    categoryUrl: "/categories/desserts",
    categoryImageUrl: "/images/dessert.png",
    categoryThemeColor: "linear-gradient(to top,rgb(240, 158, 0, 0.4),rgb(255, 158, 127, 0.3),rgb(255, 186, 209, 0.3),rgb(255, 224, 253, 0.3), #ffffff);",
  },
  {
    id: "vegan",
    title: "Vegan",
    description: "Delicious vegan recipes for everyone.",
    categoryUrl: "/categories/vegan",
    categoryImageUrl: "/images/vegan.png",
    categoryThemeColor: "linear-gradient(to top,rgb(17, 168, 33, 0.4),rgb(0, 222, 78, 0.3),rgb(94, 254, 177, 0.3), rgb(205, 239, 255, 0.3), #ffffff)",
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
