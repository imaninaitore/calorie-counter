# Import Django's forms system
from django import forms

# Import our Food model
from .models import Food


# Create a form based on the Food model
class FoodForm(forms.ModelForm):

    # Define which model fields should appear in the form
    class Meta:

        # Tell Django which model this form belongs to
        model = Food

        # Tell Django which fields the user can enter
        fields = ['name', 'calories']

        # Customize how the form fields are displayed
        widgets = {

            # Create a text input for the food name
            'name': forms.TextInput(
                attrs={
                    'placeholder': 'Enter food name'
                }
            ),

            # Create a number input for calories
            'calories': forms.NumberInput(
                attrs={
                    'placeholder': 'Enter calories'
                }
            ),
        }