const url = "https://dummyjson.com/recipes";

fetch(url)

.then((response) => response.json())

.then((data) => {

    data.recipes.forEach(food => {

        console.log(
        `food: ${food.name} calories: ${food.caloriesPerServing}`
        );

    });

//grabbing the food container
const foodContainer = 
document.getElementById("foodContainer");

data.recipes.forEach(food => {
const p = document.createElement("p");

p.textContent = `${food.name} - ${food.caloriesPerServing} cal`;
foodContainer.appendChild(p);    
});

})

.catch(error =>
console.error("Error fetching data:", error));

