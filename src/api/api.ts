const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchRecipes = async (ingredients: string[]) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(",")}&number=100&apiKey=${API_KEY}`);
  const data = await response.json();
  return data;
}

export const fetchRecipeDetails = async (id: string) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
  const data = await response.json();
  return data;
}