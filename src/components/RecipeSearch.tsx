import { useState } from "react";
import { useRecipeContext } from "../context/RecipeContext";



const RecipeSearch: React.FC = () => {
  const [ingredientValue, setIngredientValue] = useState<string>("");
  const { ingredients, setIngredients } = useRecipeContext();

  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault();
    if (ingredientValue.trim() !== "") {
      setIngredients([...ingredients, ingredientValue]);
      setIngredientValue("");
    }
  }

  const handleRemoveIngredient = (index: number) => { 
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };
  



  return(
    <div className="shadow-lg m-4 border border-slate-200 rounded-2xl p-4 grid md:grid-cols-2">
      <div className="flex flex-col justify-between">
        <h1 className="text-3xl font-bold text-blue-500 mb-16">Recipe Search</h1>
        <form className="flex justify-start items-center gap-4" onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="border border-slate-400 font-medium p-2 h-12 rounded-2xl mb-2"
            placeholder="Add ingredient..."
            value={ingredientValue}
            onChange={(e) => setIngredientValue(e.target.value)}
            />
          <button 
            type="submit" 
            className="bg-blue-500 text-xl font-bold text-white cursor-pointer py-2 px-3 rounded-2xl border-blue-600 hover:bg-blue-800 ease-in-out transition-all">
              Add
            </button>
        </form>
      </div>
      <div className="flex flex-wrap  gap-2">
        {ingredients.map((ingredient, index) => (
          <div key={index} 
            onClick={() => handleRemoveIngredient(index)}
            className="px-5 py-2 border border-slate-200 rounded-2xl font-medium hover:bg-red-400 hover:text-white ease-in-out transition-all cursor-pointer max-h-12 flex justify-center align-middle">
            <p>{ingredient}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecipeSearch;