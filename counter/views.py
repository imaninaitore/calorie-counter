from django.shortcuts import render

# Create your views here.
# Import our Food model
from .models import Food

# Create the homepage view
def home(request):

    # Get all food items from the database
    foods = Food.objects.all()

    # Calculate the total calories of all food items
    total_calories = sum(food.calories for food in foods)

    # Send the food and total calories to the HTML template
    return render(
        request,
        'counter/home.html',
        {
            'foods': foods,
            'total_calories': total_calories,
        }
    )