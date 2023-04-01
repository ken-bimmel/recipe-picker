const LIGHT = "Light";
const HEAVY = "Heavy";

const WEIGHTS = [LIGHT, HEAVY];

const BREAKFAST = "Breakfast";
const LUNCH = "Lunch";
const DINNER = "Dinner";
const SNACK = "Snack";
const DESSERT = "Dessert";

const MEALS = [BREAKFAST, LUNCH, DINNER, SNACK, DESSERT];

const MEXICAN = "Mexican";
const EAST_ASIAN = "East Asian";
const INDIAN = "Indian";
const ITALIAN = "Italian";
const AMERICAN = "American";
const MEDITERRANEAN = "Mediterranean";
const OTHER = "Other";

const CUISINES = [
  MEXICAN,
  EAST_ASIAN,
  INDIAN,
  AMERICAN,
  MEDITERRANEAN,
  ITALIAN,
  OTHER,
];

const RECIPES = [
  {
    name: "Mac & Cheese",
    source: "Brain",
    weight: HEAVY,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Rice & Beans",
    source: "Mexican Cookbook",
    weight: LIGHT,
    cuisine: MEXICAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Aloo Gobhi",
    source: "Indian-ish pg. 96",
    weight: LIGHT,
    cuisine: INDIAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Dal",
    source: "Indian-ish pg. 151",
    weight: LIGHT,
    cuisine: INDIAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Paneer Saag",
    source: "Indian-ish pg. 83",
    weight: LIGHT,
    cuisine: INDIAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Matar Paneer",
    source: "Indian-ish pg. 70",
    weight: HEAVY,
    cuisine: INDIAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Garlic Ginger Chicken with Cilantro & Mint",
    source: "Indian-ish pg. 187",
    weight: LIGHT,
    cuisine: INDIAN,
    meal: DINNER,
    vegetarian: false,
    quick: false,
  },
  {
    name: "Quesadillas",
    source: "Brain",
    weight: LIGHT,
    cuisine: MEXICAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Taco Bowl",
    source: "Brain",
    weight: HEAVY,
    cuisine: MEXICAN,
    meal: DINNER,
    vegetarian: false,
    quick: true,
  },
  {
    name: "Poke Bowls",
    source: "Time to Eat pg. 116",
    weight: LIGHT,
    cuisine: EAST_ASIAN,
    meal: DINNER,
    vegetarian: false,
    quick: true,
  },
  {
    name: "One pot Tortellini",
    source: "Time to Eat pg. 97",
    weight: LIGHT,
    cuisine: ITALIAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Tzatziki Quesadillas",
    source: "Time to Eat pg. 73",
    weight: HEAVY,
    cuisine: MEXICAN,
    meal: DINNER,
    vegetarian: false,
    quick: true,
  },
  {
    name: "Mushroom Poutine",
    source: "Time to Eat pg. 142",
    weight: HEAVY,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Chicken Shawarma",
    source: "Time to Eat pg. 177",
    weight: HEAVY,
    cuisine: MEDITERRANEAN,
    meal: DINNER,
    vegetarian: false,
    quick: false,
  },
  {
    name: "Veggie Pot Pie",
    source: "ATK Vegetarian Cookbook pg. 29",
    weight: HEAVY,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Roasted Poblano and Black Bean Enchiladas",
    source: "ATK Vegetarian Cookbook pg. 30",
    weight: HEAVY,
    cuisine: MEXICAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Vegetable and Bean Tostadas",
    source: "ATK Vegetarian Cookbook pg. 40",
    weight: LIGHT,
    cuisine: MEXICAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Latkes",
    source: "ATK Vegetarian Cookbook pg. 45",
    weight: HEAVY,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Indian-style Vegetable Curry with Potatoes and Cauliflower",
    source: "ATK Vegetarian Cookbook pg. 62",
    weight: LIGHT,
    cuisine: INDIAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Vegetable Bibimbap",
    source: "ATK Vegetarian Cookbook pg. 66",
    weight: LIGHT,
    cuisine: EAST_ASIAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Wild Rice and Mushroom Soup",
    source: "ATK Vegetarian Cookbook pg. 91",
    weight: LIGHT,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Farfalle with Summer Squash, Tomato, Basil, and Pine Nuts",
    source: "ATK Vegetarian Cookbook pg. 118",
    weight: LIGHT,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Potato Gnocchi with Browned Butter and Sage Sauce",
    source: "ATK Vegetarian Cookbook pg. 141",
    weight: HEAVY,
    cuisine: ITALIAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Veggie pad Thai",
    source: "ATK Vegetarian Cookbook pg. 148",
    weight: LIGHT,
    cuisine: EAST_ASIAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Veggie Lo Mein",
    source: "ATK Vegetarian Cookbook pg. 149",
    weight: LIGHT,
    cuisine: EAST_ASIAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Tomato Sauce with Vodka and Cream",
    source: "ATK Vegetarian Cookbook pg. 112",
    weight: LIGHT,
    cuisine: ITALIAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Butternut Squash Risotto",
    source: "ATK Vegetarian Cookbook pg. 172",
    weight: HEAVY,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Spring Vegetable Risotto",
    source: "ATK Vegetarian Cookbook pg. 173",
    weight: HEAVY,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Shepherd's Pie",
    source: "ATK Vegetarian Cookbook pg. 133",
    weight: HEAVY,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Cauliflower Briyani",
    source: "ATK Vegetarian Cookbook pg. 169",
    weight: LIGHT,
    cuisine: INDIAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Salad with Herbed Goat Cheese and Vinegarette",
    source: "ATK Vegetarian Cookbook pg. 247",
    weight: LIGHT,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Citrus Salad with Watercress, Dried Cranberries, and Pecans",
    source: "ATK Vegetarian Cookbook pg. 245",
    weight: LIGHT,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Salad with Crispy Spiced Chickpeas and Honey Vinegarette",
    source: "ATK Vegetarian Cookbook pg. 246",
    weight: LIGHT,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Socca with Swiss Chard, Pistachios, and Apricots",
    source: "ATK Vegetarian Cookbook pg. 328",
    weight: LIGHT,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Samosas",
    source: "ATK Vegetarian Cookbook pg. 347",
    weight: LIGHT,
    cuisine: INDIAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Falafel",
    source: "ATK Vegetarian Cookbook pg. 361",
    weight: LIGHT,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Korean BBQ Tempe Wraps",
    source: "ATK Vegetarian Cookbook pg. 360",
    weight: LIGHT,
    cuisine: EAST_ASIAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Tofu Bon Mi",
    source: "ATK Vegetarian Cookbook pg. 358",
    weight: LIGHT,
    cuisine: EAST_ASIAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Black Bean and Cheese Arepas",
    source: "ATK Vegetarian Cookbook pg. 369",
    weight: LIGHT,
    cuisine: MEXICAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Quiche",
    source: "ATK Vegetarian Cookbook pg. 396",
    weight: HEAVY,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Curried Chicken Breasts with Tomatoes and Fragrant Yoghurt Sauce",
    source: "The Frog Commissary Cookbook pg. 122",
    weight: LIGHT,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: false,
    quick: false,
  },
  {
    name: "Burst Cherry Tomato Pasta",
    source: "Bon Appetit, August 2020 pg. 12",
    weight: LIGHT,
    cuisine: ITALIAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Corn and Chickpea Bowls with Miso Tahini",
    source: "Bon Appetit, August 2020 pg. 44",
    weight: LIGHT,
    cuisine: MEDITERRANEAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Sesame-Scallion Chicken Salad",
    source: "Bon Appetit, August 2020 pg. 51",
    weight: LIGHT,
    cuisine: EAST_ASIAN,
    meal: DINNER,
    vegetarian: false,
    quick: true,
  },
  {
    name: "Chicken and Rice Meatballs with Hummus",
    source: "Bon Appetit, February 2020 pg. 56",
    weight: LIGHT,
    cuisine: MEDITERRANEAN,
    meal: DINNER,
    vegetarian: false,
    quick: false,
  },
  {
    name: "Veggie Meatballs",
    source: "Internet Recipe",
    weight: HEAVY,
    cuisine: ITALIAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Mexican Corn Soup with Cheese and Chilis",
    source: "The Frog Commissary Cookbook pg. 50",
    weight: HEAVY,
    cuisine: MEXICAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Frog Mixed Salad with Mustard Dressing",
    source: "The Frog Commissary Cookbook pg. 62",
    weight: LIGHT,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Chicken Florentine",
    source: "The Frog Commissary Cookbook pg. 121",
    weight: HEAVY,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: false,
    quick: false,
  },
  {
    name: "Basic Oriental Stir Fry with Chicken",
    source: "The Frog Commissary Cookbook pg. 131",
    weight: HEAVY,
    cuisine: EAST_ASIAN,
    meal: DINNER,
    vegetarian: false,
    quick: false,
  },
  {
    name: "Homemade Pizza",
    source: "Brain",
    weight: HEAVY,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Thai Turkey Burgers",
    source: "Classic Rachel Ray 30-Minute Meals pg. 27",
    weight: HEAVY,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: false,
    quick: true,
  },
  {
    name: "Grilled Honey-Lime Chicken Sandwiches with Flavored Tortilla Chips",
    source: "Classic Rachel Ray 30-Minute Meals pg. 41",
    weight: HEAVY,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: false,
    quick: true,
  },
  {
    name: "Honey Mustard BBQ Chicken",
    source: "Classic Rachel Ray 30-Minute Meals pg. 69",
    weight: HEAVY,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: false,
    quick: true,
  },
  {
    name: "Turkey and Wild Mushroom Meat Loaf Patties with Pan Gravy",
    source: "Classic Rachel Ray 30-Minute Meals pg. 80",
    weight: HEAVY,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: false,
    quick: true,
  },
  {
    name: "Greek Turkey Burgers",
    source: "Family Cookbook",
    weight: HEAVY,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: false,
    quick: true,
  },
  {
    name: "Mushroom Curry",
    source: "Silk Road Vegetarian pg. 109",
    weight: HEAVY,
    cuisine: INDIAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Chickpea Dal with Coconut Broth",
    source: "Silk Road Vegetarian pg. 111",
    weight: HEAVY,
    cuisine: INDIAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Stuffed Peppers",
    source: "Silk Road Vegetarian pg. 119",
    weight: HEAVY,
    cuisine: INDIAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Afghan Risotto",
    source: "Silk Road Vegetarian pg. 140",
    weight: HEAVY,
    cuisine: INDIAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Roasted Butternut Squash and Red Onion with Tahini and Za'atar",
    source: "Jerusalem pg. 36",
    weight: LIGHT,
    cuisine: MEDITERRANEAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Spiced Chickpeas & Fresh Vegetable Salad",
    source: "Jerusalem pg. 56",
    weight: LIGHT,
    cuisine: MEDITERRANEAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Shakshuka",
    source: "Jerusalem pg. 66",
    weight: HEAVY,
    cuisine: MEDITERRANEAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Tabbouleh",
    source: "Jerusalem pg. 85",
    weight: LIGHT,
    cuisine: MEDITERRANEAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "Basmati & Wild Rice with Chickpeas, Currants, and Herbs",
    source: "Jerusalem pg. 106",
    weight: HEAVY,
    cuisine: MEDITERRANEAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Roasted Chicken with Clementines and Arak",
    source: "Jerusalem pg. 179",
    weight: LIGHT,
    cuisine: MEDITERRANEAN,
    meal: DINNER,
    vegetarian: false,
    quick: false,
  },
  {
    name: "Roasted Chicken with Jerusalem Artichoke and Lemon",
    source: "Jerusalem pg. 180",
    weight: LIGHT,
    cuisine: MEDITERRANEAN,
    meal: DINNER,
    vegetarian: false,
    quick: false,
  },
  {
    name: "Saffron Chicken & Herb Salad",
    source: "Jerusalem pg. 1888",
    weight: LIGHT,
    cuisine: MEDITERRANEAN,
    meal: DINNER,
    vegetarian: false,
    quick: true,
  },
  {
    name: "Turkey & Zucchini burgers with green onion & cumin",
    source: "Jerusalem pg. 200",
    weight: LIGHT,
    cuisine: MEDITERRANEAN,
    meal: DINNER,
    vegetarian: false,
    quick: false,
  },
  {
    name: "Homemade Sushi",
    source: "Family Cookbook",
    weight: LIGHT,
    cuisine: EAST_ASIAN,
    meal: DINNER,
    vegetarian: false,
    quick: true,
  },
  {
    name: "Stuffed Shells",
    source: "Family Cookbook",
    weight: HEAVY,
    cuisine: ITALIAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
  {
    name: "Ben Chicken",
    source: "Family Cookbook",
    weight: HEAVY,
    cuisine: ITALIAN,
    meal: DINNER,
    vegetarian: false,
    quick: false,
  },
  {
    name: "Tortilla Chip Casserole",
    source: "Family Cookbook",
    weight: HEAVY,
    cuisine: MEXICAN,
    meal: DINNER,
    vegetarian: false,
    quick: true,
  },
  {
    name: "Turkey with Tomatoes, Onions, and Pine Nuts",
    source: "Family Cookbook",
    weight: LIGHT,
    cuisine: MEDITERRANEAN,
    meal: DINNER,
    vegetarian: false,
    quick: true,
  },
  {
    name: "Turkey Empanadas",
    source: "Internet",
    weight: HEAVY,
    cuisine: MEXICAN,
    meal: DINNER,
    vegetarian: false,
    quick: false,
  },
  {
    name: "Spatzle",
    source: "Internet",
    weight: HEAVY,
    cuisine: ITALIAN,
    meal: DINNER,
    vegetarian: true,
    quick: false,
  },
];

export { RECIPES, CUISINES, WEIGHTS, MEALS, DINNER };