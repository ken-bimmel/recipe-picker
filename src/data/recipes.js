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
    name: "example light",
    source: "Cookbook",
    weight: LIGHT,
    cuisine: MEXICAN,
    meal: DINNER,
    vegetarian: true,
    quick: true,
  },
  {
    name: "example heavy",
    source: "Cookbook",
    weight: HEAVY,
    cuisine: ITALIAN,
    meal: BREAKFAST,
    vegetarian: true,
    quick: false,
  },
  {
    name: "example light mediterranean",
    source: "Cookbook",
    weight: LIGHT,
    cuisine: MEDITERRANEAN,
    meal: LUNCH,
    vegetarian: false,
    quick: true,
  },
  {
    name: "example heavy american",
    source: "Cookbook",
    weight: HEAVY,
    cuisine: AMERICAN,
    meal: DINNER,
    vegetarian: false,
    quick: false,
  },
];

export { RECIPES, CUISINES, WEIGHTS, MEALS, DINNER };
