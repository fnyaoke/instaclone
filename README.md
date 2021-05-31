# instaclone

clone of instagram

## Requirements

Clone the the repository by running

==========================================================

git clone <https://github.com/fnyaoke/instaclone.git>

## or download a zip file of the project from github then unzip

Navigate to your project directory

## Create a virtual environment

Install Virtual env using pip

=========================

## pip install virtual venv

To create a virtual environment named virtual ,venv or env, run

=========================

python3 -m venv env

=========================

To activate the virtual environment we just created,
run

==================================================

### source virtual{name of the virtual}/bin/activate

## Create a database

You'll need to create a new postgres database, To access postgres type

$ psql

Then run the following query to create a new database named instagram

===========================

### create database instagram

## Install dependencies

To install the requirements from requirements.txt file,

===============================

### pip install -r requirements.txt

## Create Database migrations

Making migrations on postgres using django
run

========================================

### python manage.py makemigrations

then run the command below;

=================================

### python3 manage.py migrate

## Run the app

To run the application on your development machine,

==========================

python manage.py runserver

==========================

## Running Tests

To run tests

=========================

python manage.py test

=========================

## Technologies Used

- Django3
- Python3.6
- HTML and Css
- Javascript
- Bootstrap

## User stories

Users should expect the following

### As a user of the application I should be able to

- Sign in to the application to start using.
- Upload my pictures to the application.
- See my profile with all my pictures.
- Follow other users and see their pictures on my timeline.
- Like a picture and leave a comment on it.

---

---

## LICENSE

[LICENSE](license)

**Copyright (c) {2021} {{{Icons}}}.**
