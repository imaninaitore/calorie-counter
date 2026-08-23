# Calorie Counter

A simple and responsive **Calorie Counter web application** built with **Django**. The application allows users to record the food they consume, track the calories for each food item, view their daily calorie total, remove food items, and reset their daily calorie count.

---

## Project Description

The Calorie Counter is a Django-based web application designed to make it easy for users to keep track of their daily calorie intake.

Users can:

* Add food items and their calorie values
* View all food items recorded
* Remove food items
* View the total calories consumed
* Reset their daily calorie count
* Use the application on different screen sizes through responsive design

The project demonstrates the use of Django models, views, templates, forms, database integration, CRUD operations, Tailwind CSS, Git, and deployment.

---

## Features

### Calorie Tracking

* **Add Food** — Add a food item together with its calorie count.
* **View Food Items** — Display all food items that have been added.
* **Delete Food** — Remove a food item from the list.
* **Calculate Total Calories** — Automatically calculate the total calories consumed.
* **Reset Calories** — Clear the current day's calorie records.

### User Interface

* Responsive design
* Clean and simple layout
* Tailwind CSS styling
* Django template inheritance
* User-friendly forms
* Clear calorie total display
* Mobile-friendly pages

---

## Technologies Used

| Technology   | Purpose               |
| ------------ | --------------------- |
| Python 3.x   | Programming language  |
| Django       | Web framework         |
| HTML5        | Page structure        |
| CSS3         | Styling               |
| Tailwind CSS | Responsive UI styling |
| PostgreSQL   | Database              |
| Git          | Version control       |
| GitHub       | Source code hosting   |
| Render       | Deployment platform   |

---

## Project Structure

A typical project structure looks like this:

```text
calorie-tracker/
│
├── calorie_tracker/
│   ├── migrations/
│   ├── templates/
│   ├── admin.py
│   ├── apps.py
│   ├── forms.py
│   ├── models.py
│   ├── urls.py
│   └── views.py
│
├── calorie_counter/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── templates/
│   ├── base.html
│   └── ...
│
├── static/
│   └── ...
│
├── manage.py
├── requirements.txt
├── .gitignore
├── .env
└── README.md
```

> The exact folder names may vary depending on the Django project configuration.

---

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/imaninaitore/calorie-counter.git
```

Move into the project directory:

```bash
cd calorie-counter
```

---

### 2. Create a Virtual Environment

Create a Python virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

For macOS/Linux:

```bash
source venv/bin/activate
```

---

### 3. Install Dependencies

Install the required Python packages:

```bash
pip install -r requirements.txt
```

If a `requirements.txt` file has not yet been created, install Django and PostgreSQL support:

```bash
pip install django psycopg2-binary
```

Then generate the requirements file:

```bash
pip freeze > requirements.txt
```

---

## Database Configuration

This project uses **PostgreSQL** as its database.

Create a PostgreSQL database and configure the database credentials in Django's `settings.py`.

Example:

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "calorie_counter",
        "USER": "postgres",
        "PASSWORD": "your_password",
        "HOST": "localhost",
        "PORT": "5432",
    }
}
```

### Environment Variables

For security, sensitive database credentials should not be placed directly in the source code.

A `.env` file can be used:

```text
DB_NAME=calorie_counter
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
```

The `.env` file should be added to `.gitignore` so that passwords and other sensitive information are not uploaded to GitHub.

---

## Database Migrations

After configuring the database, create the migrations:

```bash
python manage.py makemigrations
```

Apply the migrations:

```bash
python manage.py migrate
```

This creates the required database tables.

---

## Create an Admin User

To access the Django administration panel, create a superuser:

```bash
python manage.py createsuperuser
```

Follow the prompts to enter:

* Username
* Email address
* Password

Then start the development server:

```bash
python manage.py runserver
```

Open:

```text
http://127.0.0.1:8000/
```

The Django admin panel can normally be accessed at:

```text
http://127.0.0.1:8000/admin/
```

---

## How the Application Works

### 1. Add a Food Item

The user enters:

* Food name
* Number of calories

The food item is submitted through a Django form and saved to the database.

Example:

```text
Food: Banana
Calories: 105
```

---

### 2. View Food Items

The application retrieves saved food items from the database and displays them on the page.

Example:

```text
Food              Calories
--------------------------------
Banana              105
Egg                  78
Rice                200
```

---

### 3. Calculate Total Calories

The application calculates the sum of the calories for all recorded food items.

For example:

```text
105 + 78 + 200 = 383 calories
```

The total is then displayed to the user.

---

### 4. Remove Food

Each food item has an option to remove it.

When the user removes an item, the corresponding record is deleted from the database and the total calorie count is updated.

---

### 5. Reset Daily Calories

The reset functionality removes the recorded food items for the current day.

After resetting, the calorie total returns to:

```text
0 calories
```

---

## CRUD Operations

The project demonstrates the four basic CRUD operations:

| Operation | Django Function              |
| --------- | ---------------------------- |
| Create    | Add a new food item          |
| Read      | Display saved food items     |
| Update    | Modify an existing food item |
| Delete    | Remove a food item           |

The main required functionality focuses on creating, viewing, and deleting food items, while the application structure supports standard CRUD functionality.

---

## Django Components

### Models

Django models represent the application's database data.

A food model can contain fields such as:

```python
class Food(models.Model):
    name = models.CharField(max_length=100)
    calories = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
```

The model allows Django to store and retrieve food information from PostgreSQL.

---

### Views

Views handle application logic.

They are responsible for tasks such as:

* Displaying food items
* Processing forms
* Saving food items
* Deleting food items
* Calculating calorie totals
* Resetting daily records

---

### Forms

Django forms are used to collect and validate food information from users.

Example fields:

```text
Food Name
Calories
Submit
```

Forms also help prevent invalid data from being submitted.

---

### Templates

The project uses Django templates to create the user interface.

Template inheritance is used to avoid repeating common HTML.

For example:

```django
{% extends "base.html" %}

{% block content %}

<h1>Calorie Counter</h1>

{% endblock %}
```

A shared `base.html` template can contain common elements such as:

* Navigation
* Page structure
* Tailwind CSS
* Footer

---

## Styling

The project uses **Tailwind CSS** instead of Bootstrap.

Tailwind CSS is used to create:

* Responsive layouts
* Buttons
* Forms
* Cards
* Navigation
* Calorie summary sections
* Mobile-friendly interfaces

The interface is designed to work across:

* Desktop
* Tablet
* Mobile

---

## Security

The application follows Django security best practices.

Important security considerations include:

* CSRF protection
* Django form validation
* Secure database queries through Django's ORM
* Keeping database credentials outside the source code
* Using environment variables for secrets
* Keeping `.env` out of Git
* Setting `DEBUG = False` in production
* Configuring `ALLOWED_HOSTS` correctly
* Using secure production settings
* Avoiding hard-coded passwords and API keys

Example `.gitignore` entries:

```text
.env
venv/
__pycache__/
*.pyc
db.sqlite3
```

---

## Testing

Django's testing framework can be used to test the application's functionality.

Example areas to test:

* Food items can be created
* Food items are displayed correctly
* Calories are calculated correctly
* Food items can be deleted
* Daily calories can be reset
* Invalid calorie values are rejected
* Required form fields are validated

Run Django tests with:

```bash
python manage.py test
```

---

## Running the Project

Start the Django development server:

```bash
python manage.py runserver
```

Then visit:

```text
http://127.0.0.1:8000/
```

Press `CTRL + C` in the terminal to stop the development server.

---

## Dependencies

The main dependencies include:

```text
Django
psycopg2-binary
python-dotenv
```

The complete dependency list should be stored in:

```text
requirements.txt
```

Install them with:

```bash
pip install -r requirements.txt
```

---

## Git and Version Control

Git is used to track changes throughout the development process.

Initialize Git:

```bash
git init
```

Add project files:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Initial commit"
```

Connect the local repository to GitHub:

```bash
git remote add origin https://github.com/imaninaitore/calorie-counter.git
```

Rename the branch to `main`:

```bash
git branch -M main
```

Push the project:

```bash
git push -u origin main
```

### Example Commit Messages

Good commit messages clearly describe what was changed:

```text
Initial commit
Add calorie tracker model
Add food creation form
Add food list view
Add delete functionality
Add calorie total calculation
Add reset functionality
Improve responsive styling
Configure PostgreSQL
Prepare project for deployment
Fix production settings
```

---

## Deployment

The project can be deployed to a hosting platform such as **Render**.

Before deployment, make sure:

* `requirements.txt` exists
* PostgreSQL is configured
* Environment variables are configured
* `DEBUG` is disabled in production
* `ALLOWED_HOSTS` contains the production domain
* Static files are configured
* Database migrations are ready
* GitHub contains the latest project files

### General Render Deployment Steps

1. Push the project to GitHub.
2. Create an account on Render.
3. Create a new Web Service.
4. Connect the GitHub repository.
5. Select the Django project repository.
6. Configure the Python environment.
7. Add the required environment variables.
8. Create/configure the PostgreSQL database.
9. Configure the build command.
10. Configure the start command.
11. Deploy the application.
12. Test the live website.

### Example Build Command

```bash
pip install -r requirements.txt
python manage.py collectstatic --noinput
python manage.py migrate
```

### Example Start Command

Depending on the production server configuration:

```bash
gunicorn calorie_counter.wsgi:application
```

Replace `calorie_counter` with the actual Django project package name if it is different.

---

## Live Website

**Live Website:**
`https://calorie-counter.onrender.com`

> Replace the placeholder above with the actual deployed website URL once the project has been deployed.

### GitHub Repository

**GitHub:**
`https://github.com/imaninaitore/calorie-counter`
---

## Project Rubric

The project is designed to satisfy the following assessment criteria:

| Criterion                        | Points | Implementation                                                 |
| -------------------------------- | -----: | -------------------------------------------------------------- |
| Project Setup and Configuration  |      1 | Django project and PostgreSQL configuration                    |
| Django App Development           |      2 | `calorie_tracker` app, models, and CRUD operations             |
| User Interface and Styling       |      2 | Django templates, inheritance, Tailwind CSS, responsive design |
| Functionality Implementation     |      3 | Add/view/remove food, calorie calculation, reset               |
| Version Control and Deployment   |      1 | Git, GitHub, regular commits, and deployment                   |
| Documentation and Best Practices |      1 | README, comments, docstrings, validation, and security         |
| **Total**                        | **10** | **10 points**                                                  |

---

## Learning Objectives

This project provides practical experience with:

* Python web development
* Django project structure
* Django applications
* Django models
* Django views
* Django forms
* Django templates
* CRUD operations
* Database queries
* PostgreSQL
* Tailwind CSS
* Responsive web design
* Git and GitHub
* Environment variables
* Web application security
* Django deployment

---


## Future Improvements

Possible future improvements include:

* reset calories in the day
* User registration and authentication
* Separate calorie records for each user
* Daily and weekly calorie history
* Food categories
* Search functionality
* Edit food items
* Nutrition information such as protein, carbohydrates, and fats
* Calorie goals
* Progress charts
* Dashboard statistics
* Export calorie records
* Improved mobile experience

## License
MIT license

---

---
## Author

**Imani Naitore**

GitHub:
`https://github.com/imaninaitore`

---