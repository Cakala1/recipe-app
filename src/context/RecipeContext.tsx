import { createContext, useState, useContext, useEffect } from "react";

interface RecipeContextType {
  ingredients: string[];
  setIngredients: (ingredients: string[]) => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  const [ingredients, setIngredients] = useState<string[]>(() => {
    const storedIngredients = localStorage.getItem("ingredients");
    return storedIngredients ? JSON.parse(storedIngredients) : [];
  });

  useEffect(() => {
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
  }, [ingredients]);

  return <RecipeContext.Provider value={{ ingredients, setIngredients }}>
      {children}
    </RecipeContext.Provider>
};

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipeContext must be used within a RecipeProvider");
  }
  return context;
};
