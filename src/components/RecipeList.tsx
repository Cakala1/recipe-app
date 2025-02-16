import { useNavigate } from "react-router-dom";
import { IRecipeListProps } from "../types/types";


const RecipeList: React.FC<IRecipeListProps> = ({recipes}) =>  {
  const navigate = useNavigate();
  return(
    <ul className="m-8">
      {recipes.map((recipe) => (
        <li 
          key={recipe.id} 
          className="flex align-center gap-4 p-4 border border-slate-200 rounded-2xl shadow-lg mb-4 cursor-pointer hover:transform hover:scale-102 ease-in-out transition-all"
          onClick={() => navigate(`/recipe/${recipe.id}`)}
          >
          <img
            src={recipe.image} 
            alt={recipe.title}
            className="w-32 h-32 rounded-xl object-cover m-4"/> 
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl mt-2">{recipe.title}</h2>
            <div>
              <p className="text-slate-500">Used Ingredients: {recipe.usedIngredientCount}</p>
              <p className="text-green-600 font-medium" >Likes: {recipe.likes}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default RecipeList;