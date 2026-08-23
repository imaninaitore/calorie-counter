from django.contrib import admin

# Register your models here.

# Import the Food model
from .models import Food


# Register the Food model with Django's admin site
admin.site.register(Food)