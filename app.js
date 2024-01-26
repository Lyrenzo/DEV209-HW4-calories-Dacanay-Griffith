// Food array to store food objects
let foodArray = [
    { name: 'Banana', calories: 105 },
    { name: 'Hot Dog', calories: 565 }
];

// Function to add food and update display
function addFood() {
    const foodName = document.getElementById('foodName').value;
    const caloriesInput = document.getElementById('calories').value;
    const calories = parseInt(caloriesInput);

    if (foodName && !isNaN(calories)) {
        // Create food object
        const newFood = { name: foodName, calories: calories };

        // Add new food to the array
        foodArray.push(newFood);

        // Display updated contents of the array
        console.log(foodArray);

        // Update total calories display
        updateCaloriesDisplay();
    }
}

// Function to update total calories display
function updateCaloriesDisplay() {
    const totalCalories = foodArray.reduce((sum, food) => sum + food.calories, 0);
    document.getElementById('caloriesDisplay').innerText = `Total Calories: ${totalCalories}`;
}

// Initial display
updateCaloriesDisplay();