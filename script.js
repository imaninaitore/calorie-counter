/*
//create variable before using
const totalCalories = 
document.getElementById("totalCalories");

const foodContainer = 
document.getElementById("foodContainer");
//fetching data
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


data.recipes.forEach(food => {
//creating div 
const div = document.createElement("div");
//creating checkbox
const checkbox =document.createElement("input");checkbox.type = "checkbox";

//calculation
//find calorie number
let total = 0;

//listen for check
checkbox.addEventListener("change", () => {
if (checkbox.checked) {
    total = total + food.caloriesPerServing;
} else {
    total = total - food.caloriesPerServing;
}

totalCalories.textContent = total;
});


//creating span
const span = document.createElement("span");

span.textContent = `${food.name} - ${food.caloriesPerServing} cal`;

foodContainer.appendChild(div);
div.appendChild(checkbox);    
div.appendChild(span);    
});

})

.catch(error =>
console.error("Error fetching data:", error));

*/

let foods = [];
let total = 0;

const foodContainer = document.getElementById("foodContainer");
const totalCalories = document.getElementById("totalCalories");

// load from localStorage
foods = JSON.parse(localStorage.getItem("foods")) || [];

// save
function saveData() {
    localStorage.setItem("foods", JSON.stringify(foods));
}

// add food
function addFood(name, calories,carbs, protein,fat) {

    const food = {
        id: Date.now(),
        name,
        calories,
        carbs,
        protein,
        fat
    };

    foods.push(food);

    saveData();
    renderFoods();
}

// render
function renderFoods() {

    foodContainer.innerHTML = "";
    total = 0;
    carbsTotal = 0;
    proteinTotal = 0;
    fatTotal = 0;

    foods.forEach(food => {

        total += food.calories;

        const div = document.createElement("div");

        const span = document.createElement("span");
        span.textContent = `${food.name} - ${food.calories} cal`;

        const btn = document.createElement("button");
        btn.textContent = "Delete";

        btn.onclick = () => deleteFood(food.id);

        div.appendChild(span);
        div.appendChild(btn);

        foodContainer.appendChild(div);

    });

const carbPercent =
(carbTotal / total) * 100;

const proteinPercent =
(proteinTotal / total) * 100;

const fatPercent =
(fatTotal / total) * 100;

    totalCalories.textContent = total;
}

// delete
function deleteFood(id) {

    foods = foods.filter(food => food.id !== id);

    saveData();
    renderFoods();
}

// reset (ONLY ONE)
function resetAll() {

    foods = [];
    total = 0;

    saveData();
    renderFoods();
}

// add button
function handleAdd() {

    const name =
    document.getElementById("foodName").value;

    const calories =
    Number(document.getElementById("foodCalories").value);

    addFood(name, calories, carbs, protein, fat);
}

// initial load
renderFoods();

//grab checkboxes
const carbs =
document.getElementById("carbs").checked;

const protein =
document.getElementById("protein").checked;

const fat =
document.getElementById("fat").checked;



