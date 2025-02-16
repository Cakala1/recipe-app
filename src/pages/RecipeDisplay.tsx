import { useNavigate, useParams } from "react-router-dom";
import { IRecipeDisplay } from "../types/types";
import { useEffect, useState } from "react";
import { fetchRecipeDetails } from "../api/api";
import { ArrowLeft, } from "lucide-react";
import { ClipLoader } from "react-spinners";

const RecipeDisplay: React.FC = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<IRecipeDisplay | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(()=>{
    const getRecipe = async () => {
      try{
        setIsLoading(true)
        const data = await fetchRecipeDetails(id!);
        setRecipe(data);
        console.log(data);
      }catch(error){
        console.error("Error fetching recipe: ", error);
      }finally{
        setIsLoading(false);
      }
    }

    getRecipe();
  }, [id]);


  return (
    
    <div className="bg-white shadow-xl rounded-lg py-8 px-6 max-w-4xl mx-auto my-8 flex flex-col">
      {isLoading ? <div className="flex justify-center items-center h-96">
        <ClipLoader
        size={124}
        aria-label="Loading Spinner"
        data-testid="loader" />
      </div> : <div>
      <button onClick={() => navigate(-1)} className="w-14 p-2 cursor-pointer">
        <ArrowLeft size={32} />
      </button>
      <div>
        <img src={recipe?.image} alt={recipe?.title} className="mx-auto mb-5 rounded-2xl object-cover"/>
      </div>
      <div>
        <h2 className="text-3xl font-medium mb-1">{recipe?.title}</h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-white mb-5 bg-green-500 px-2 py-2 rounded-2xl">Ready in <span className="font-semibold">{recipe?.readyInMinutes} minutes</span></p>
          <p className="flex mb-6 text-xl font-light">{recipe?.servings} servings</p>
        </div>
        <h3 className="text-2xl mb-1">Ingredients: </h3>
        {recipe?.extendedIngredients.map((ingredient) => (
          <div key={ingredient.id}>
            <p className="text-zinc-600 mb-[0.1rem]">- {ingredient.name} ({ingredient.amount}{ingredient.unit ? " " +ingredient.unit : ""})</p>
          </div>
        ))} 
        {recipe?.analyzedInstructions[0]?.steps?.length && (
          <>
          <h3 className="text-2xl mt-5 mb-1">Instructions: </h3>
          <ul>
          {recipe?.analyzedInstructions[0].steps.map((instruction, index) => (
            <li key={index}>{instruction.number}. {instruction.step}</li>
          ))}
          </ul>
          </>
        ) }
      </div>
        </div>}
      
    </div>
  )
}

export default RecipeDisplay;
