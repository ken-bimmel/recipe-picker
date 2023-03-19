import { RECIPES } from "../data/recipes";

// Adapted from: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  const arrayCopy = [...array];
  let arrayLength = arrayCopy.length;
  let swapSpace = null;
  let index = null;

  // While there remain elements to shuffle…
  while (arrayLength) {
    // Pick a remaining element…
    arrayLength -= 1;
    index = Math.floor(Math.random() * arrayLength);

    // And swap it with the current element.
    swapSpace = arrayCopy[arrayLength];
    arrayCopy[arrayLength] = arrayCopy[index];
    arrayCopy[index] = swapSpace;
  }

  return arrayCopy;
}

function pickMeals(
  numberOfMeals,
  cuisines,
  weights,
  meals,
  vegOnly,
  quickOnly
) {
  //   console.log(numberOfMeals, cuisines, weights, meals);
  const filteredRecipes = RECIPES.filter((recipe) => {
    const vegMatch = vegOnly === false || recipe.vegetarian === true;
    const quickMatch = quickOnly === false || recipe.quick === true;
    return (
      cuisines.includes(recipe.cuisine) &&
      weights.includes(recipe.weight) &&
      meals.includes(recipe.meal) &&
      vegMatch &&
      quickMatch
    );
  });
  //   console.log(filteredRecipes);
  const shuffledRecipes = shuffle(filteredRecipes);
  console.log(filteredRecipes, shuffledRecipes);
  return shuffledRecipes.slice(0, numberOfMeals);
}

export default pickMeals;
