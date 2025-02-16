import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDisplay from "./pages/RecipeDisplay";
import { RecipeProvider } from "./context/RecipeContext";

function App() {

  return (
    <Router>
      <RecipeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDisplay />} />
       </Routes>
      </RecipeProvider>
    </Router>
  )
}

export default App
