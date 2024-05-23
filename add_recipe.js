document.getElementById('add-recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const recipeName = document.getElementById('recipe-name').value.trim();
    const recipeImage = document.getElementById('recipe-image').value.trim();
    const recipeInstructions = document.getElementById('recipe-instructions').value.trim();

    if (recipeName && recipeImage && recipeInstructions) {
        const newRecipe = {
            name: recipeName,
            src: recipeImage,
            instructions: recipeInstructions
        };

        // Here you would typically send this data to your server to save it
        // For this example, we'll just log it to the console
        console.log('New Recipe:', newRecipe);

        // Optionally, redirect back to the main page
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields');
    }
});
