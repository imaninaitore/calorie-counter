const url = "https://dummyjson.com/recipes";

fetch(url)

.then((response) => response.json())

.then((data) => {

    data.recipes.forEach(food => {

        console.log(
        `food: ${food.name} calories: ${food.caloriesPerServing}`
        );

    });

})

.catch(error =>
console.error("Error fetching data:", error));