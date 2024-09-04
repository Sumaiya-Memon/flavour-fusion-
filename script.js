const recipes = [
    { name: "Pasta Carbonara", area: "italian" },
    { name: "Tacos", area: "mexican" },
    // Add more recipes with different areas
];

function filterRecipes() {
    const selectedArea = document.getElementById("area").value;
    const recipesContainer = document.getElementById("recipes");
    recipesContainer.innerHTML = "";

    recipes.forEach(recipe => {
        if (selectedArea === "all" || recipe.area === selectedArea) {
            const recipeCard = document.createElement("div");
            recipeCard.className = "recipe-card";
            recipeCard.textContent = recipe.name;
            recipesContainer.appendChild(recipeCard);
        }
    });
}
