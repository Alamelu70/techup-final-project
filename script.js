const foodList = [
    {
        name: 'Sambar',
        src: 'Sambar',
    },
    {
        name: "Laksa Goreng",
        src: "LaksaGoreng",
    },
    {
        name: "French Toast Casserole",
        src: "FrenchToastCasserole",
    },
    {
        name:"Banana Bread",
        src:"BananaBread",
    }
];

function renderFood(foodList) {
    const recipesContainer = document.getElementById('recipes-container');
    recipesContainer.innerHTML = '';

    foodList.forEach(food => {
        recipesContainer.innerHTML += `
            <a href="${food.src}.html" class="recipe-link">
                <img src="./${food.src}.jpg" alt="${food.name}" class="recipe-image">
                <div class="recipe-title">${food.name}</div>
            </a>
        `;
    });
}

// Initial render of all food items
renderFood(foodList);

function updateFoodList(event) {
    const searchTerm = event.target.value.toLowerCase();
    const newFoodList = foodList.filter((food) => {
        return food.name.toLowerCase().includes(searchTerm);
    });
    renderFood(newFoodList);
}

// Attach the event listener to the search input field
document.getElementById('search-input').addEventListener('input', updateFoodList);
