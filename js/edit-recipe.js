function searchRecipes() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredRecipes = recipeList.filter(recipe => {
        return recipe.name.toLowerCase().includes(searchInput) ||
            recipe.ingredients.toLowerCase().includes(searchInput) ||
            recipe.method.toLowerCase().includes(searchInput);
    });

    displayFilteredRecipes(filteredRecipes);
}