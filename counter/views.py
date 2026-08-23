from django.shortcuts import render,redirect,get_object_or_404

# Create your views here.
# Import our Food model
from .models import Food
# import the food form
from .forms import FoodForm

# Create the homepage view
def home(request):

    # Get all food items from the database
    foods = Food.objects.all()

    # Calculate the total calories of all food items
    total_calories = sum(food.calories for food in foods)

    # Send the food and total calories to the HTML template
    return render(
        request, 'home.html',
        {
            'foods': foods,
            'total_calories': total_calories,
        }
    )


# Display the form for adding a new food
def add_food(request):

    # Check if the user submitted the form
    if request.method == 'POST':

        # Create a form using the submitted data
        form = FoodForm(request.POST)

        # Check if the submitted form is valid
        if form.is_valid():

            # Save the new food to the database
            form.save()

            # Return the user to the homepage
            return redirect('home')

    # If the user has not submitted the form
    else:

        # Create an empty food form
        form = FoodForm()

    # Display the add food page
    return render(
        request,
        'add.html',
        {
            'form': form,
        }
    )


# Delete a food item
def delete_food(request, food_id):

    # Find the food item using its ID
    food = get_object_or_404(Food, id=food_id)

    # Check if the user submitted the delete confirmation
    if request.method == 'POST':

        # Delete the food from the database
        food.delete()

        # Return the user to the homepage
        return redirect('home')

    # Display the delete confirmation page
    return render(
        request,
        'delete.html',
        {
            'food': food,
        }
    )