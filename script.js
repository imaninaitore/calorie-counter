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
    
//creating checkbox
const checkbox =
document.createElement("input");
checkbox.type = "checkbox";

const span = document.createElement("span");

span.textContent = `${food.name} - ${food.caloriesPerServing} cal`;

foodContainer.appendChild(checkbox);    
foodContainer.appendChild(span);    

});

})

.catch(error =>
console.error("Error fetching data:", error));

