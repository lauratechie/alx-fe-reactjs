import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // --- Recipe actions ---
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  setRecipes: (recipes) => set({ recipes }),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
      recommendations: state.recommendations.filter((rec) => rec.id !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // --- Favorites actions ---
  addFavorite: (recipeId) =>
    set((state) => {
      if (state.favorites.includes(recipeId)) return state;
      return { favorites: [...state.favorites, recipeId] };
    }),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // --- Recommendations (mock) ---
  generateRecommendations: () =>
    set((state) => {
      // Example logic: recommend recipes that are NOT favorites,
      // but share some randomness for demo purposes.
      const recommended = state.recipes.filter(
        (recipe) => !state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
