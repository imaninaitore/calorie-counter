# Import Django's path function
from django.urls import path

# Import our views
from . import views


# Define the URLs for the counter app
urlpatterns = [

    # Connect the homepage URL to the home view
    path('', views.home, name='home'),

     # Add a new food item
    path('add/', views.add_food, name='add'),

    # Delete a food item
    path('delete/<int:food_id>/', views.delete_food, name='delete'),
]