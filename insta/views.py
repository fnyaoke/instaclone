from django.shortcuts import render
from django import forms
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from cloudinary.forms import cl_init_js_callbacks
from django.shortcuts import render,redirect
from .forms import ImageUploadForm, ImageProfileForm, CommentForm
from .models import *
from vote.managers import  VotableManager
from .email import send_welcome_email
from datetime import date


# Create your views here.
votes = VotableManager()

@login_required(login_url='/accounts/login/')
def home(request):
    images = Image.objects.all()

    return render(request, 'gram/index.html',{"images":images})

def image_upload(request):
    current_user = request.user
    if request.method == 'POST':
        form = ImageUploadForm(request.POST,request.FILES)
        if form.is_valid():
            image = form.save(commit=False)
            image.user = current_user
            image.save()
        return redirect('home')

    else:
        form = ImageUploadForm()
        return render(request,'gram/upload.html', {"form":form})

def profile_info(request):

    current_user=request.user
    profile_info = Profile.objects.filter(user=current_user).first()
    posts =  request.user.image_set.all()


    return render(request,'gram/profile.html',{"images":posts,"profile":profile_info,"current_user":current_user})

def profile_edit(request):
    current_user = request.user
    if request.method == 'POST':
        form = ImageProfileForm(request.POST,request.FILES)
        if form.is_valid():
            image = form.save(commit=False)
            image.user = current_user
            image.save()
        return redirect('profile')

    else:
        form = ImageProfileForm()
        return render(request,'gram/edit.html',{"form":form})

def add_comment(request,id):

    current_user = request.user
    image = Image.get_single_photo(id=id)
    if request.method == 'POST':
        form = CommentForm(request.POST)
        print(form)

        if form.is_valid():
            comment = form.save(commit=False)
            comment.user = current_user
            comment.image_id = id
            comment.save()
        return redirect('home')

    else:
        form = CommentForm()
        return render(request,'gram/new_comment.html',{"form":form,"image":image})

def comments(request,id):
    comments = Comments.get_comments(id)
    number = len(comments   )

    return render(request,'gram/comments.html',{"comments":comments,"number":number})

@login_required (login_url='/accounts/register/')
def like_images(request,id):
    image =  Image.get_single_photo(id)
    user = request.user
    user_id = user.id

    if user.is_authenticated:
        uplike = image.votes.up(user_id)
        image.likes = image.votes.count()
        image.save()

    return redirect('home')

def search_user(request):

    if 'search_user' in request.GET and request.GET["search_user"]:

        search_term = request.GET.get("search_user")
        searched_user = User.objects.filter(name__icontains=search_term)
        message = f"{search_term}"
        return render(request, 'gram/search_results.html', {"message": message, "users": searched_user})

    else:
        message = "You haven't searched for any term "
        return render(request, 'gram/search_results.html', {"message": message})

# Send Welcome email
def welcome_insta(request):
    if request.method == 'POST':
        form = forms(request.POST)
        if form.is_valid():
            name = form.cleaned_data['your_name']
            email = form.cleaned_data['email']

            recipient = User(name = name,email =email)
            recipient.save()
            send_welcome_email(name,email)

            HttpResponseRedirect('/templates/email/email.html')
            #.................
    return render(request, 'templates/email/email.html', {"date": date,"letterForm":form})