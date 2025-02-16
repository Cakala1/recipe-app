import { useEffect, useState } from "react";
import RecipeSearch from "../components/RecipeSearch";
import { fetchRecipes } from "../api/api";
import RecipeList from "../components/RecipeList";
import { IRecipe } from "../types/types";
import { ClipLoader } from "react-spinners";
import { useRecipeContext } from "../context/RecipeContext";

const Home = () => {
  const {ingredients} = useRecipeContext();
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (ingredients.length === 0) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchRecipes(ingredients);
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes: ", error);
      }finally{
        setIsLoading(false);
      }
    };
    fetchData();
  }, [ingredients]);

  return (
    <>
      <RecipeSearch />
      {isLoading ? <div className="flex justify-center items-center h-96">
        <ClipLoader
        size={124}
        aria-label="Loading Spinner"
        data-testid="loader" />
      </div>
         : <RecipeList recipes={recipes} />}
    </>
  );
}

export default Home;
