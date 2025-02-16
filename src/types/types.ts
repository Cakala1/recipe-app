export interface IRecipeSearchProps{
  ingredients: string[], 
  setIngredients: React.Dispatch<React.SetStateAction<string[]>>,
};

export interface IRecipe{
  id: number,
  title: string,
  image: string,
  usedIngredientCount: number,
  missedIngredientCount: number,
  likes: number,
  missedIngredients: {
    id: number,
    name: string,
    image: string,
  }[],
  usedIngredients: {
    id: number,
    name: string,
    image: string,
  }[],
  unusedIngredients: {
    id: number,
    name: string,
    image: string,
  }[],
}

export interface IRecipeListProps{
  recipes: IRecipe[],
}

export interface IRecipeDisplay{
  id: number,
  title: string,
  image: string,
  likes: number,
  summary: string,
  instructions: string,
  sourceUrl: string,
  diets: string[],
  dishTypes: string[],
  cuisines: string[],
  readyInMinutes: number,
  servings: number,
  pricePerServing: number,
  extendedIngredients: {
    id: number,
    name: string,
    image: string,
    amount: number,
    unit: string,
  }[],
  analyzedInstructions: {
    name: string,
    steps: {
      number: number,
      step: string,
    }[],
  }[],
}