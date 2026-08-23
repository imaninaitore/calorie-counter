from django.db import models

# Create your models here.
# Create the Food model
class Food(models.Model):

    # Store the name of the food
    name = models.CharField(max_length=100)

    # Store the number of calories
    calories = models.IntegerField()

    # Automatically store the date and time when the food is added
    date_added = models.DateTimeField(auto_now_add=True)

    # Control how the food object is displayed
    def __str__(self):

        # Return the food name when Django displays the object
        return self.name