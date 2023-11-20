const recipeList = [];

function addRecipe() {
	const recipeName = document.getElementById("title").value;
	const ingredients = document.getElementById("ingredients").value;
	const method = document.getElementById("instructions").value;

	if (recipeName && ingredients && method) {
		const recipe = {
			name: recipeName,
			ingredients: ingredients,
			method: method,
		};

		recipeList.push(recipe);
		displayRecipes();
		clearForm();
	} else {
		alert("Please fill out all fields.");
	}
}

function displayRecipes() {
	const recipeListElement = document.getElementById("recipeList");
	recipeListElement.innerHTML = "";
	recipeList.forEach((recipe, index) => {
		const li = document.createElement("li");
		li.textContent = `${recipe.name}: ${recipe.ingredients} - ${recipe.method}`;
		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.onclick = function () {
			deleteRecipe(index);
		};
		li.appendChild(deleteButton);
		recipeListElement.appendChild(li);
	});
}

function clearForm() {
	document.getElementById("title").value = "";
	document.getElementById("ingredients").value = "";
	document.getElementById("instructions").value = "";
}

function deleteRecipe(index) {
	recipeList.splice(index, 1);
	displayRecipes();
}

function searchRecipes() {
	const searchInput = document
		.getElementById("searchInput")
		.value.toLowerCase();
	const filteredRecipes = recipeList.filter((recipe) => {
		return (
			recipe.name.toLowerCase().includes(searchInput) ||
			recipe.ingredients.toLowerCase().includes(searchInput) ||
			recipe.method.toLowerCase().includes(searchInput)
		);
	});

	displayFilteredRecipes(filteredRecipes);
}

function displayFilteredRecipes(filteredRecipes) {
	const recipeListElement = document.getElementById("recipeList");
	recipeListElement.innerHTML = "";
	filteredRecipes.forEach((recipe, index) => {
		const li = document.createElement("li");
		li.textContent = `${recipe.name}: ${recipe.ingredients} - ${recipe.method}`;
		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.onclick = function () {
			deleteRecipe(recipeList.indexOf(recipe));
		};
		li.appendChild(deleteButton);
		recipeListElement.appendChild(li);
	});
}
