# Import Django's path function
from django.urls import path

# Import our views
from . import views


# Define the URLs for the counter app
urlpatterns = [

    # Connect the homepage URL to the home view
    path('', views.home, name='home'),
]