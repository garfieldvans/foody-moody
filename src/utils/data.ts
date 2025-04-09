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
