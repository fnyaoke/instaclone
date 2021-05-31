from django import forms
from . models import Image,Profile,Comments, User
# from .forms import RegistrationForm


# class UserForm(RegistrationForm):
    # class Meta:
        # model = User

class ImageUploadForm(forms.ModelForm):
    class Meta:
        model = Image
        exclude = ['profile','likes','comments','user']

class ImageProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        exclude = ['user',]

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comments
        exclude = ['user','image','date_posted']